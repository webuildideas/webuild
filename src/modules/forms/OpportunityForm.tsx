import React, { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

// Common
// import useSubmitNfForm from '@modules/forms/hooks/useSubmitNfForm'
// import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'

// Components
import Button from '@modules/common/components/Button'
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import TextInput from '@modules/forms/components/TextInput'
import TextAreaField from '@modules/forms/components/TextAreaField'
import SelectField from '@modules/forms/components/SelectField'

import './styles/OpportunityForm.css'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import { useRecoilValue } from 'recoil'
import encode from './utils/encode'
import useOpportunityFormModal from './hooks/useOpportunityFormModal'
import { opportunityFormModalEmail } from './atoms/opportunityFormModalEmail'

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
  title = 'Set up a meeting, <span class="font-medium">we’d love to chat!</span>',
  buttonText = 'Send'
}: Props) => {
  const emailAddress = useRecoilValue(opportunityFormModalEmail)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { closeModal } = useOpportunityFormModal()
  const initialFormValues: FormValues = {
    'First Name': '',
    'Last Name': '',
    'E-mail Address': emailAddress,
    Country: '',
    Message: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Opportunity',
    'Page URL': location
  }

  // const submitToInsightEngine = useSubmitNfForm({
  //   formName: NFForms.Opportunity.name,
  //   actOnFormId: NFForms.Opportunity.actOnId
  // })

  const handleSubmit = async (values: FormValues, actions: any) => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'opportunity-form',
        // eslint-disable-next-line prettier/prettier
        subject: `${values['First Name']} ${values['Last Name']} filled out the Opportunity Form`,
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
    // const formattedSubmissionValues = {
    //   'First Name': values['First Name'],
    //   'Last Name': values['Last Name'],
    //   'E-mail Address': values['E-mail Address'],
    //   Country: values.Country,
    //   Message: values.Message,
    //   'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
    //   'Opt-In': values['Opt-In'] ? '1' : '0',
    //   'Lead Source': values['Lead Source'],
    //   'Page URL': values['Page URL']
    // }
    // await submitToInsightEngine(
    //   values['E-mail Address'],
    //   formattedSubmissionValues
    // )

    await sleep(500)

    setFormSubmitted(true)
  }

  return formSubmitted ? (
    <div className="OpportunityForm-success">
      <h2 className="text-h2 mb-9 leading-tight">
        Thank you for getting in touch!
      </h2>
      <p className="text-h3 mb-35 leading-tight">
        We’ll get back to you shortly. In the meantime, learn more about{' '}
        <MotionAniLink
          className="text-blueRibbon"
          onClick={closeModal}
          styleType="link"
          to="/who-we-are/"
        >
          who we are
        </MotionAniLink>{' '}
        or catch up on our{' '}
        <MotionAniLink
          className="text-blueRibbon"
          onClick={closeModal}
          styleType="link"
          to="/insights/"
        >
          latest insights.
        </MotionAniLink>
      </p>
    </div>
  ) : (
    <div className="OpportunityForm">
      <h2 className="font-extralight text-4xl text-h3 mb-8 text-left leading-tight text-blueRibbon">
        Set up a meeting,{' '}
        <span className="font-medium">we’d love to chat!</span>
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
            data-netlify={true}
            data-netlify-honeypot="bot-field"
            name="opportunity-form"
          >
            {/* <TextInput className="hidden" name="Lead Source" type="text" />
            <TextInput className="hidden" name="Page URL" type="text" /> */}
            <input name="form-name" type="hidden" value="opportunity-form" />
            <input
              name="subject"
              type="hidden"
              value="Subject to be replaced..."
            />
            <input name="Page URL" type="hidden" value={location} />
            <input name="bot-field" type="hidden" />

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
            <button
              className="fade-in block flex items-center border border-solid rounded-full font-light px-10 py-6 w-full mt-12 text-gray-700 md:w-56 justify-between"
              disabled={isSubmitting || !values['Privacy Notice']}
              // loading={isSubmitting}
              type="submit"
            >
              Submit
              <svg
                className="w-8 h-auto"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24.2753 7.33331C24.2753 11.6662 27.7337 15.1787 32 15.1787V15.4583V15.7379V16.2621V16.5416V16.8212C27.7338 16.8212 24.2753 20.3337 24.2753 24.6666H23.2086C23.2086 21.0582 25.3163 17.9497 28.3495 16.5416L0 16.5416V15.4583L28.3495 15.4583C25.3163 14.0503 23.2086 10.9418 23.2086 7.33331H24.2753Z"
                  fill="#525761"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            {/* <Button
              animate={false}
              className="block mx-auto mt-12 lg:ml-0"
              disabled={isSubmitting || !values['Privacy Notice']}
              loading={isSubmitting}
              styleType="solid-purple"
              type="submit"
            >
              {buttonText}
            </Button> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OpportunityForm
