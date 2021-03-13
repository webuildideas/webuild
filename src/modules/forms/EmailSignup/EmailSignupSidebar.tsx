// Packages
import React, { useCallback } from 'react'
import { Formik, Form, FormikHelpers, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Link } from 'gatsby'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'

// Components
import TextInput from '@modules/common/components/TextInput'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/common/components/SelectField'

// Style
import './style.css'
import { COUNTRIES } from '@common/constants/countries'
import Checkbox from '@modules/common/components/Checkbox'

interface FormValues {
  'Email Address': string
  Country: string
  'Privacy Notice': boolean
}

const initialFormValues: FormValues = {
  'Email Address': '',
  Country: '',
  'Privacy Notice': false
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'Email Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('This field is required'),
  'Privacy Notice': Yup.boolean().required(
    'You must accept the privacy notice to continue.'
  )
})

const EmailSignupForm = () => {
  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.EmailSignup.name,
    actOnFormId: NFForms.EmailSignup.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      const formattedSubmissionValues = {
        'Email Address': values['Email Address'],
        Country: values.Country,
        'Privacy Notice': values['Privacy Notice']
      }

      console.log('Values', formattedSubmissionValues)
      actions.setSubmitting(true)
      // await submitToInsightEngine(
      //   values['Email Address'],
      //   formattedSubmissionValues
      // )
      actions.setSubmitting(false)
    },
    [submitToInsightEngine]
  )

  return (
    <div className="EmailSignup px-8 py-14 bg-foundation">
      <h2 className="text-h4 text-center mb-2">Learn From Us</h2>
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
            <TextInput
              className="block appearance-none mb-4"
              label="Email *"
              name="Email Address"
              type="text"
            />

            <SelectField
              className="mb-6"
              label="Country *"
              name="Country"
              options={COUNTRIES}
              placeholder="Country"
            />

            <p className="text-tag block mb-6">
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
              className="flex items-center justify-center cursor-pointer"
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
              className="block mx-auto mt-4"
              disabled={isSubmitting || !values['Privacy Notice']}
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
