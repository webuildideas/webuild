// Packages
import React, { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import uniq from 'lodash/uniq'

// Common
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'
import { classNames } from '@common/utils/classNames'

// Components
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import TextInput from '@modules/forms/components/TextInput'
import TextAreaField from '@modules/forms/components/TextAreaField'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/forms/components/SelectField'
import MotionAniLink from '@modules/common/components/MotionAniLink'

// Utils
import sleep from '@modules/common/utils/sleep'

// Hooks
import PurpleCheckmark from '@static/svgs/common/purple-circle-checkmark.inline.svg'
import encode from './utils/encode'

// SVGs

// Styles
import './styles/BookACallForm.css'

interface Props {
  location: string
  className?: string
  successButtonText?: string
  successButtonTo?: string
}

interface FormValues {
  'First Name': string
  'Last Name': string
  'E-mail Address': string
  'Company Name': string
  Country: string
  'Phone Number': string
  Message: string
  'Privacy Notice': boolean
  'Opt-In': boolean
  'Page URL': string
  'Lead Source': string
}

const formSchema = Yup.object().shape({
  'Company Name': Yup.string().required('Company Name is required'),
  Country: Yup.string().required('Country is required'),
  'E-mail Address': Yup.string().required('E-mail Address is required'),
  'First Name': Yup.string().required('First Name is required'),
  'Last Name': Yup.string().required('Last Name is required'),
  'Phone Number': Yup.string().required('Phone Number is required')
})

const BookACallForm = ({
  location,
  className = '',
  successButtonText,
  successButtonTo
}: Props) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )

  const initialFormValues: FormValues = {
    'First Name': '',
    'Last Name': '',
    'E-mail Address': '',
    'Company Name': '',
    Country: '',
    'Phone Number': '',
    Message: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Book a Call',
    'Page URL': location
  }

  const formClasses = classNames({
    [className]: className.length > 0,
    'BookACall-success': formSubmitted
  })

  const handleSubmit = async (values: FormValues, actions: any) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'book-a-call-form',
        subject: `${values['First Name']} ${values['Last Name']} filled out the form Book a Call`,
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

    setUserConversions(uniq([...userConversions, NFForms.BookACall.name]))
    setFormSubmitted(true)
  }

  return (
    <div className={`BookACall ${formClasses}`}>
      {formSubmitted ? (
        <div className="BookACall-success-container">
          <PurpleCheckmark className="BookACall-success-icon" />
          <h3 className="BookACall-success-title text-h3 mb-6">
            Thank you for booking a call.
          </h3>
          <p className="text-body">
            We look forward to chatting with you about your project!
          </p>
          {successButtonText && successButtonTo ? (
            <MotionAniLink
              className="BookACall-success-button"
              styleType="solid-purple"
              to={successButtonTo}
            >
              {successButtonText}
            </MotionAniLink>
          ) : null}
        </div>
      ) : (
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={false}
          validateOnMount={true}
          validationSchema={formSchema}
        >
          {({
            dirty,
            isSubmitting,
            // values,
            // errors,
            isValid
          }: FormikProps<FormValues>) => (
            <Form
              data-netlify={true}
              data-netlify-honeypot="bot-field"
              name="book-a-call-form"
            >
              <h3 className="BookACallForm-title text-h3 mb-6">Book a call</h3>

              <input name="form-name" type="hidden" value="book-a-call-form" />
              <input name="bot-field" type="hidden" />

              <div className="BookACall-row mb-6">
                <TextInput
                  className="BookACall-fname"
                  label="First Name *"
                  name="First Name"
                  type="text"
                />
                <TextInput
                  className="BookACall-lname"
                  label="Last Name *"
                  name="Last Name"
                  type="text"
                />
              </div>

              <TextInput
                className="BookACall-email mb-6"
                label="Email *"
                name="E-mail Address"
                type="text"
              />

              <TextInput
                className="BookACall-company mb-6"
                label="Company Name *"
                name="Company Name"
                type="text"
              />

              <div className="BookACall-row mb-6">
                <SelectField
                  className="BookACall-country"
                  label="Country *"
                  name="Country"
                  options={COUNTRIES}
                  placeholder="Country"
                />

                <TextInput
                  className="BookACall-phone"
                  label="Phone Number *"
                  name="Phone Number"
                  type="text"
                />
              </div>

              <TextAreaField
                className="mb-8"
                label="Message"
                name="Message"
                rows={3}
              />

              <PrivacyOptIn />

              {/* {Object.values(errors).map((error, idx) => {
                return (
                  <p
                    key={`error-${idx}`}
                    className="text-tag my-6 text-ui-error-dark"
                  >
                    {error}
                  </p>
                )
              })} */}

              <Button
                animate={false}
                className="block mx-auto mt-10 lg:ml-0"
                // disabled={isSubmitting || !values['Privacy Notice']}
                disabled={
                  isSubmitting ||
                  // !values['Privacy Notice'] ||
                  !(dirty && isValid)
                }
                loading={isSubmitting}
                styleType="solid-purple"
                type="submit"
              >
                Let's Talk
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default BookACallForm
