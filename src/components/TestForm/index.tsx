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
import { useCookies } from 'react-cookie'
import {
  NF_COOKIE,
  NF_FORM_SUBMISSION_URI,
  NF_TOKEN
} from '../../common/constants/newfangled'
import { getNfCookie } from '../../common/utils/newfangled'
import { urlEncodeData } from '../../common/utils/forms'

// export function useSubmitToInsightEngine() {}

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
  const [, setCookie] = useCookies()

  const prepareFormData = useCallback((values: FormValues) => {
    const cookie = getNfCookie()
    const postData: Record<string, string | number> = {
      token: NF_TOKEN,
      sessionid: cookie || '',
      conversiondesc: 'Test form',
      email: values.email,
      fields: JSON.stringify(values),
      pageLink: window.location.href,
      pagetitle: document.title || 'No title',
      utm_campaign: '',
      utm_content: '',
      utm_source: '',
      utm_medium: '',
      formtype: 1234,
      contentid: ''
    }
    return postData
  }, [])

  const handleSetCookie = useCallback(
    (value: string) => {
      const days = 3650
      const hoursInDay = 24
      const minsInHour = 60
      const secsInMin = 60

      const date = new Date()
      date.setTime(
        date.getTime() + days * hoursInDay * minsInHour * secsInMin * 1000
      )

      setCookie(NF_COOKIE, value, {
        path: '/',
        expires: date
      })
    },
    [setCookie]
  )

  const handleSubmit = useCallback(
    async (values: FormValues, actions: FormikHelpers<FormValues>) => {
      actions.setSubmitting(true)
      const encodedData = urlEncodeData(prepareFormData(values))
      const response = await fetch(NF_FORM_SUBMISSION_URI, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedData
      })
      const responseText = await response.text()
      handleSetCookie(responseText)
      actions.setSubmitting(false)
    },
    [handleSetCookie, prepareFormData]
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
