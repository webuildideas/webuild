// Packages
import React, { useCallback } from 'react'
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik'
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

interface FormValues {
  'Email Address': string
  Country: string
}

const initialFormValues: FormValues = {
  'Email Address': '',
  Country: ''
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('This field is required'),
  'Email Address': Yup.string()
    .email('Invalid Email')
    .required('This field is required')
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
        Country: values.Country
      }
      actions.setSubmitting(true)
      await submitToInsightEngine(
        values['Email Address'],
        formattedSubmissionValues
      )
      actions.setSubmitting(false)
    },
    [submitToInsightEngine]
  )

  return (
    <div className="EmailSignup px-8 py-14 bg-foundation">
      <h2 className="text-h4 text-center mb-2">Learn From Us</h2>
      <p className="text-body text-center mb-8">
        Sign up to receive our monthly insights directly in your inbox!
      </p>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }: FormikProps<FormValues>) => (
          <Form
            id={NFForms.EmailSignup.actOnId}
            name={NFForms.EmailSignup.name}
          >
            <TextInput
              className="block appearance-none mb-4"
              label="Email *"
              name="Email Address"
              placeholder="Email Address"
              type="email"
            />

            <SelectField
              className="mb-6"
              label="Country *"
              name="Country"
              options={[
                { name: 'United States', value: 'united states' },
                { name: 'Africa', value: 'africa' }
              ]}
              placeholder="Country"
            />

            <label>
              <span className="text-tag block mb-6">
                We take your privacy seriously. We do not sell or share your
                data. We use it to enhance your experience with our site and to
                analyze the performance of our marketing efforts. To learn more,
                please see our <Link to="/privacy">Privacy Notice</Link>.
              </span>
              <Field type="checkbox" />
              <span>Got It!</span>
            </label>

            <Button className="block" disabled={isSubmitting} type="submit">
              Sign Up!
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default EmailSignupForm
