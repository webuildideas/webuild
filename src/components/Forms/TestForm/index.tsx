// Packages
import React, { useCallback } from 'react'
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FormikProps
} from 'formik'
import * as Yup from 'yup'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

const initialFormValues: FormValues = { email: '', firstName: '', lastName: '' }

const testFormSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('This field is required'),
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().required('This field is required')
})

const TestForm = () => {
  const submitToInsightEngine = useSubmitNfForm({
    formName: 'Test Form'
  })

  const handleSubmit = useCallback(
    async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      const formattedSubmissionValues = {
        'First Name': values.firstName,
        'Last Name': values.lastName,
        'Email Address': values.email
      }
      actions.setSubmitting(true)
      await submitToInsightEngine(values.email, formattedSubmissionValues)
      actions.setSubmitting(false)
    },
    [submitToInsightEngine]
  )

  return (
    <div>
      <h1 className="mb4">Test Form</h1>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={testFormSchema}
      >
        {({ isSubmitting }: FormikProps<FormValues>) => (
          <Form>
            <Field
              className="block mb-4"
              name="firstName"
              placeholder="First Name"
              type="text"
            />
            <ErrorMessage
              className="text-error"
              component="div"
              name="firstName"
            />

            <Field
              className="block mb-4"
              name="lastName"
              placeholder="Last Name"
              type="text"
            />
            <ErrorMessage
              className="text-error"
              component="div"
              name="lastName"
            />

            <Field
              className="block mb-4"
              name="email"
              placeholder="Email address"
              type="email"
            />
            <ErrorMessage className="text-error" component="div" name="email" />

            <button disabled={isSubmitting} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TestForm
