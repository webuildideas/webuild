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

// Utils
import sleep from '@modules/common/utils/sleep'

// Hooks
import useSubmitNfForm from './hooks/useSubmitNfForm'

// Styles
import './styles/BookACallForm.css'

interface Props {
  location: string
  className?: string
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

const BookACallForm = ({ location, className = '' }: Props) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )
  const userHasCompletedForm = userConversions.includes(
    NFForms.EmailSignup.name
  )

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.BookACall.name,
    actOnFormId: NFForms.BookACall.actOnId
  })

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
    [className]: className.length > 0
  })

  const handleSubmit = async (values: FormValues) => {
    const formattedSubmissionValues = {
      'First Name': values['First Name'],
      'Last Name': values['Last Name'],
      'E-mail Address': values['E-mail Address'],
      'Company Name': values['Company Name'],
      Country: values.Country,
      'Phone Number': values['Phone Number'],
      Message: values.Message,
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

    setUserConversions(uniq([...userConversions, NFForms.BookACall.name]))
    setFormSubmitted(true)
  }

  return userHasCompletedForm && !formSubmitted ? null : (
    <>
      <div className={`BookACall ${formClasses}`}>
        {formSubmitted ? (
          <div className="BookACall-success">
            <h2 className="text-h2">Thank you!</h2>
          </div>
        ) : (
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
                id={NFForms.BookACall.actOnId}
                name={NFForms.BookACall.name}
              >
                <h3 className="text-h3 mb-6">Book a call</h3>

                <TextInput className="hidden" name="Lead Source" type="text" />
                <TextInput className="hidden" name="Page URL" type="text" />

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
                  className="block mx-auto mt-10 lg:ml-0"
                  disabled={isSubmitting || !values['Privacy Notice']}
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
    </>
  )
}

export default BookACallForm
