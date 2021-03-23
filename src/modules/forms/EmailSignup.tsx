// Packages
import React, { useCallback, useState } from 'react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Link } from 'gatsby'
import { useRecoilValue } from 'recoil'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'
import { userConversionsAtom } from '@common/store/newfangled/atoms'

// Components
import TextInput from '@modules/common/components/TextInput'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/common/components/SelectField'
import Checkbox from '@modules/common/components/Checkbox'

// Style
import './styles/EmailSignup.css'

interface Props {
  location: string
}
interface FormValues {
  'E-mail Address': string
  Country: string
  'Privacy Notice': boolean
  'Opt-In': string
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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const EmailSignupForm = ({ location }: Props) => {
  const userConversions = useRecoilValue(userConversionsAtom)
  const userHasCompletedForm = userConversions.includes('Email Signup')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const initialFormValues: FormValues = {
    'E-mail Address': '',
    Country: '',
    'Privacy Notice': true,
    'Opt-In': '1',
    'Lead Source': 'Web - Email Signup',
    'Page URL': location
  }

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.EmailSignup.name,
    actOnFormId: NFForms.EmailSignup.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
        'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
        'Opt-In': values['Opt-In'],
        'Lead Source': values['Lead Source'],
        'Page URL': values['Page URL']
      }
      await submitToInsightEngine(
        values['E-mail Address'],
        formattedSubmissionValues
      )

      await sleep(500)

      setFormSubmitted(true)
    },
    [submitToInsightEngine]
  )

  return userHasCompletedForm || formSubmitted ? (
    formSubmitted ? (
      <>
        <p className="text-h3 mb-8">Thanks for subscribing!</p>
        <p className="text-h3">We'll see you in your inbox soon.</p>
      </>
    ) : null
  ) : (
    <div className="EmailSignup px-8 py-14 bg-foundation lg:bg-transparent">
      <h2 className="text-h4 text-center lg:text-left mb-2">Learn From Us</h2>
      <p className="text-body text-center mb-8 lg:hidden">
        Sign up to receive our monthly insights directly in your inbox!
      </p>
      <p className="text-caption mb-8 hidden lg:block">
        Sign up to receive our monthly insights directly in your inbox!
      </p>
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
            <TextInput className="hidden" name="Opt-In" type="text" />
            <TextInput className="hidden" name="Lead Source" type="text" />
            <TextInput className="hidden" name="Page URL" type="text" />

            <TextInput
              className="block appearance-none mb-4"
              label="Email *"
              name="E-mail Address"
              type="text"
            />

            <SelectField
              className="mb-6"
              label="Country *"
              name="Country"
              options={COUNTRIES}
              placeholder="Country"
            />

            <p className="text-tag block mb-6 lg:hidden">
              We take your privacy seriously. We do not sell or share your data.
              We use it to enhance your experience with our site and to analyze
              the performance of our marketing efforts. To learn more, please
              see our{' '}
              <Link className="text-electricViolet font-bold" to="/privacy">
                Privacy Notice
              </Link>
              .
            </p>
            <Checkbox
              checkboxClassName="mr-2"
              className="flex items-center justify-center cursor-pointer lg:hidden"
              label="Got It!"
              name="Privacy Notice"
            />
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
              className="block mx-auto mt-4 lg:ml-0"
              disabled={isSubmitting || !values['Privacy Notice']}
              loading={isSubmitting}
              type="submit"
            >
              Sign Up!
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EmailSignupForm
