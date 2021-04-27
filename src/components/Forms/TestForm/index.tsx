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
import { NFForms } from '@common/types/NewFangled'

interface FormValues {
  'First Name': string
  'Last Name': string
  'Email Address': string
}

const initialFormValues: FormValues = {
  'Email Address': '',
  'First Name': '',
  'Last Name': ''
}

const testFormSchema = Yup.object().shape({
  'Email Address': Yup.string()
    .email('Invalid Email')
    .required('This field is required'),
  'First Name': Yup.string().required('This field is required'),
  'Last Name': Yup.string().required('This field is required')
})

const TestForm = () => {
  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.TestForm.name,
    actOnFormId: NFForms.TestForm.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      const formattedSubmissionValues = {
        'First Name': values['First Name'],
        'Last Name': values['Last Name'],
        'Email Address': values['Email Address']
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
    <div>
      <h1 className="mb4">Test Form</h1>
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        validationSchema={testFormSchema}
      >
        {({ isSubmitting }: FormikProps<FormValues>) => (
          <Form id={NFForms.TestForm.actOnId} name={NFForms.TestForm.name}>
            <Field
              className="block mb-4"
              name="First Name"
              placeholder="First Name"
              type="text"
            />
            <ErrorMessage
              className="text-error"
              component="div"
              name="First Name"
            />

            <Field
              className="block mb-4"
              name="Last Name"
              placeholder="Last Name"
              type="text"
            />
            <ErrorMessage
              className="text-error"
              component="div"
              name="Last Name"
            />

            <Field
              className="block mb-4"
              name="Email Address"
              placeholder="Email Address"
              type="Email Address"
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
