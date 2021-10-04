import React, { useCallback, useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'

// Components
import Button from '@modules/common/components/Button'
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import TextInput from '@modules/forms/components/TextInput'
import TextAreaField from '@modules/forms/components/TextAreaField'
import SelectField from '@modules/forms/components/SelectField'

import './styles/OpportunityForm.css'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import useOpportunityFormModal from './hooks/useOpportunityFormModal'

interface Props {
  title?: string
  buttonText?: string
  location: string
}

interface FormValues {
  'First Name': string
  'Last Name': string
  'E-mail Address': string
  Country: string
  Message: string
  'Privacy Notice': boolean
  'Opt-In': boolean
  'Lead Source': 'Web - Opportunity'
  'Page URL': string
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'E-mail Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('You must enter your email to continue.'),
  'First Name': Yup.string().required(
    'You must provide your first name to continue.'
  ),
  'Last Name': Yup.string().required(
    'You must provide your first name to continue.'
  ),
  Message: Yup.string().required('You must enter a message to continue.'),
  'Privacy Notice': Yup.boolean().required(
    'You must accept the privacy notice to continue.'
  )
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const OpportunityForm = ({
  location,
  title = 'Set up a meeting—we’d love to chat!',
  buttonText = 'Send'
}: Props) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { closeModal } = useOpportunityFormModal()
  const initialFormValues: FormValues = {
    'First Name': '',
    'Last Name': '',
    'E-mail Address': '',
    Country: '',
    Message: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Opportunity',
    'Page URL': location
  }

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.Opportunity.name,
    actOnFormId: NFForms.Opportunity.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'First Name': values['First Name'],
        'Last Name': values['Last Name'],
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
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

      setFormSubmitted(true)
    },
    [submitToInsightEngine]
  )

  return formSubmitted ? (
    <div className="OpportunityForm-success">
      <h2 className="text-h2 mb-12">Thank you for getting in touch!</h2>
      <p className="text-h3 mb-35">
        We’ll get back to you shortly. In the meantime, learn more about{' '}
        <MotionAniLink
          className="text-electricViolet"
          onClick={closeModal}
          styleType="link"
          to="/who-we-are"
        >
          who we are
        </MotionAniLink>{' '}
        or catch up on our{' '}
        <MotionAniLink
          className="text-electricViolet"
          onClick={closeModal}
          styleType="link"
          to="/insights"
        >
          latest insights.
        </MotionAniLink>
      </p>
    </div>
  ) : (
    <div className="OpportunityForm">
      <h2 className="font-extrabold text-h3 mb-8 text-center md:text-left">
        {title}
      </h2>
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
            id={NFForms.Opportunity.actOnId}
            name={NFForms.Opportunity.name}
          >
            <TextInput className="hidden" name="Lead Source" type="text" />
            <TextInput className="hidden" name="Page URL" type="text" />

            <div className="OpportunityForm-row">
              <TextInput
                className="OpportunityForm-row-item block appearance-none"
                label="First Name *"
                name="First Name"
                type="text"
              />
              <TextInput
                className="OpportunityForm-row-item block appearance-none"
                label="Last Name *"
                name="Last Name"
                type="text"
              />
            </div>

            <div className="OpportunityForm-row">
              <TextInput
                className="OpportunityForm-row-item block appearance-none"
                label="Email *"
                name="E-mail Address"
                type="text"
              />

              <SelectField
                className="OpportunityForm-row-item"
                label="Country *"
                name="Country"
                options={COUNTRIES}
              />
            </div>

            <TextAreaField
              className="mb-8"
              label="Message *"
              name="Message"
              rows={4}
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
              className="block mx-auto mt-12 lg:ml-0"
              disabled={isSubmitting || !values['Privacy Notice']}
              loading={isSubmitting}
              styleType="solid-purple"
              type="submit"
            >
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OpportunityForm
