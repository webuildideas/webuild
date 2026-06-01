// Packages
import React, { useCallback, useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import uniq from 'lodash/uniq'

// Common
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'

// Components
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import TextInput from '@modules/forms/components/TextInput'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/forms/components/SelectField'

// Icons
import Checkmark from '@static/svgs/common/checkmark-handrawn.inline.svg'
import encode from './utils/encode'

// Style
import './styles/EmailSignupForm.css'

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

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const EmailSignupForm = ({ location }: Props) => {
  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )
  const userHasCompletedForm = userConversions.includes(
    NFForms.EmailSignup.name
  )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const initialFormValues: FormValues = {
    'E-mail Address': '',
    Country: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Email Signup',
    'Page URL': location
  }

  const handleSubmit = useCallback(
    async (values: FormValues, actions: any) => {
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'email-signup-form',
          subject: `${values['E-mail Address']} filled out the Email Signup Form`,
          ...values
        })
      })
        .then(() => {
          actions.resetForm()
        })
        .catch(() => {
          console.log('Error')
        })
        .finally(() => actions.setSubmitting(false))

      await sleep(500)

      setUserConversions(uniq([...userConversions, NFForms.EmailSignup.name]))
      setFormSubmitted(true)
    },
    [setUserConversions, userConversions]
  )

  return userHasCompletedForm || formSubmitted ? (
    formSubmitted ? (
      <div className="bg-foundation lg:bg-transparent p-8 lg-p-0">
        <Checkmark className="text-electricViolet mb-3 w-6" />
        <p className="text-h4 mb-2">Thanks for subscribing!</p>
        <p className="text-caption">
          We'll see you in <br /> your inbox soon.
        </p>
      </div>
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
            name="email-signup-form"
          >
            <input
              name="subject"
              type="hidden"
              value="Subject to be replaced..."
            />
            <input name="Page URL" type="hidden" value={location} />
            <input
              name="Lead Source"
              type="hidden"
              value="Web - Email Signup"
            />
            <input name="bot-field" type="hidden" />

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
