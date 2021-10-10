// Packages
import React, { useCallback, useEffect, useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import uniq from 'lodash/uniq'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation, Variants } from 'framer-motion'

// Commons
import useSubmitNfForm from '@modules/forms/hooks/useSubmitNfForm'
import sleep from '@modules/common/utils/sleep'
import { NFForms } from '@common/types/NewFangled'
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'
import { COUNTRIES } from '@common/constants/countries'

// Components
import Button from '@modules/common/components/Button'
import TextInput from '@modules/forms/components/TextInput'
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import SelectField from '@modules/forms/components/SelectField'

// Svgs
import EmailIcon from '@static/svgs/type/email-course.inline.svg'
import CloseIcon from '@static/svgs/closeIcon.inline.svg'
import Checkmark from '@static/svgs/common/checkmark-handrawn.inline.svg'

// Styles
import '@modules/forms/styles/MonthlyNewsletter.css'

interface Props {
  location: string
}

interface FormValues {
  'E-mail Address': string
  Country: string
  'Privacy Notice': boolean
  'Opt-In': boolean
  'Lead Source': 'Web - Email Signup'
  'Page URL': string
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'E-mail Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('You must enter your email to continue.'),
  'Privacy Notice': Yup.boolean().required(
    'You must accept the privacy notice to continue.'
  )
})

const variants: Variants = {
  visible: {
    opacity: 1,
    bottom: 32,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  hidden: {
    opacity: 0.25,
    bottom: -500,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

const MonthlyNewsletterForm = ({ location }: Props) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formClosed, setFormClosed] = useState(false)
  const [anchorPosition, setAnchorPosition] = useState(2000)
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )
  const userHasCompletedForm = userConversions.includes(
    NFForms.EmailSignup.name
  )
  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.EmailSignup.name,
    actOnFormId: NFForms.EmailSignup.actOnId
  })
  const initialFormValues: FormValues = {
    'E-mail Address': '',
    Country: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Email Signup',
    'Page URL': location
  }

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
        'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
        'Opt-In': values['Opt-In'] ? '1' : '0',
        'Lead Source': values['Lead Source'],
        'Page URL': values['Page URL']
      }
      await submitToInsightEngine(
        values['E-mail Address'],
        formattedSubmissionValues
      )

      await sleep(500)

      setUserConversions(uniq([...userConversions, NFForms.EmailSignup.name]))
      setFormSubmitted(true)
    },
    [setUserConversions, submitToInsightEngine, userConversions]
  )

  const handleCloseForm = () => setFormClosed(true)

  const handleSetPosition = useCallback(async () => {
    await sleep(2000)
    setAnchorPosition(
      Math.ceil(document.documentElement.getBoundingClientRect().height * 0.4)
    )
  }, [])

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  useEffect(() => {
    if (formClosed) {
      animationControls.start('hidden')
    }
  }, [formClosed, animationControls])

  useEffect(() => {
    handleSetPosition()
  }, [handleSetPosition])

  return userHasCompletedForm && !formSubmitted ? null : (
    <>
      <div
        ref={ref}
        className="MonthlyNewsletter-pixel-anchor"
        style={{ top: `${anchorPosition}px` }}
      />
      <motion.div
        animate={animationControls}
        className="MonthlyNewsletter"
        initial="hidden"
        layout
        variants={variants}
      >
        <CloseIcon
          className="MonthlyNewsletter-close"
          onClick={handleCloseForm}
        />
        {formSubmitted ? (
          <div className="MonthlyNewsletter-success">
            <Checkmark className="MonthlyNewsletter-checkmark" />
            <h4 className="text-h4 mb-2">Thanks for subscribing!</h4>
            <p className="text-body">We'll see you in your inbox soon</p>
            <Button
              animate={false}
              className="MonthlyNewsletter-close-btn"
              onClick={handleCloseForm}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <EmailIcon className="MonthlyNewsletter-icon" />
            <h4 className="text-h4 mb-6">
              Receive our Monthly insights directly in your inbox.
            </h4>
            <Formik
              initialValues={initialFormValues}
              onSubmit={handleSubmit}
              validateOnBlur={false}
              validateOnChange={false}
              validateOnMount={false}
              validationSchema={formSchema}
            >
              {({ isSubmitting, values, errors }: FormikProps<FormValues>) => (
                <Form
                  id={NFForms.EmailSignup.actOnId}
                  name={NFForms.EmailSignup.name}
                >
                  <TextInput
                    className="hidden"
                    name="Lead Source"
                    type="text"
                  />
                  <TextInput className="hidden" name="Page URL" type="text" />

                  <TextInput
                    className="MonthlyNewsletter-email"
                    label="Email *"
                    name="E-mail Address"
                    type="text"
                  />

                  <SelectField
                    className="MonthlyNewsletter-select mb-6"
                    label="Country *"
                    name="Country"
                    options={COUNTRIES}
                    placeholder="Country"
                  />

                  <PrivacyOptIn showOptIn={false} />

                  {Object.values(errors).map((error, idx) => {
                    return (
                      <p
                        key={`error-${idx}`}
                        className="text-tag my-6 text-ui-error-dark"
                      >
                        {error}
                      </p>
                    )
                  })}
                  <Button
                    animate={false}
                    className="MonthlyNewsletter-submit"
                    disabled={isSubmitting || !values['Privacy Notice']}
                    loading={isSubmitting}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </>
        )}
      </motion.div>
    </>
  )
}

export default MonthlyNewsletterForm
