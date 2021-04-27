import React, { useCallback, useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'

// Components
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import TextInput from '@modules/forms/components/TextInput'
import Button from '@modules/common/components/Button'
import SelectField, {
  SelectOption
} from '@modules/forms/components/SelectField'

import './styles/ContactForm.css'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import TextAreaField from './components/TextAreaField'

interface FormValues {
  'First Name': string
  'Last Name': string
  'E-mail Address': string
  Country: string
  'Contact Reason': string
  'Fundraising Stage': string
  Message: string
  'Referral Source': string
  'Privacy Notice': boolean
  'Opt-In': boolean
  'Lead Source': 'Web - Contact'
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'E-mail Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('You must enter your email to continue.'),
  'First Name': Yup.string().required(
    'You must provide your first name to continue.'
  ),
  'Fundraising Stage': Yup.string().required(
    'You must select a fundraising stage to continue.'
  ),
  'Last Name': Yup.string().required(
    'You must provide your first name to continue.'
  ),
  Message: Yup.string().required('You must enter a message to continue.'),
  'Privacy Notice': Yup.boolean().required(
    'You must accept the privacy notice to continue.'
  )
})

const contactReasonOptions: SelectOption[] = [
  {
    name: '',
    value: ''
  },
  {
    name: 'Request a quote',
    value: 'Request a quote'
  },
  {
    name: 'Career Opportunities',
    value: 'Career Opportunities'
  },
  {
    name: 'Partnership Opportunities',
    value: 'Partnership Opportunities'
  },
  {
    name: 'Speaking Request',
    value: 'Speaking Request'
  },
  {
    name: 'Other',
    value: 'Other'
  }
]

const fundraisingStageOptions: SelectOption[] = [
  {
    name: '',
    value: ''
  },
  {
    name: "Haven't raised money",
    value: "Haven't raised money"
  },
  {
    name: 'Pre-Seed / Accelerator',
    value: 'Pre-Seed / Accelerator'
  },
  {
    name: 'Seed',
    value: 'Seed'
  },
  {
    name: 'Series A',
    value: 'Series A'
  },
  {
    name: 'Series B',
    value: 'Series B'
  },
  {
    name: 'Series C',
    value: 'Series C'
  },
  {
    name: 'Series D+',
    value: 'Series D+'
  },
  {
    name: 'Public Company',
    value: 'Public Company'
  }
]

const referralSourceOptions: SelectOption[] = [
  {
    name: '',
    value: ''
  },
  {
    name: 'Referral',
    value: 'Referral'
  },
  {
    name: 'Internet Search',
    value: 'Internet Search'
  },
  {
    name: 'Listing Site (Rocketplace, Clutch)',
    value: 'Listing Site (Rocketplace, Clutch)'
  },
  {
    name: 'Dribbble',
    value: 'Dribbble'
  },
  {
    name: 'Social Media',
    value: 'Social Media'
  },
  {
    name: 'Other',
    value: 'Other'
  }
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const initialFormValues: FormValues = {
    'First Name': '',
    'Last Name': '',
    'E-mail Address': '',
    Country: '',
    'Contact Reason': '',
    'Fundraising Stage': '',
    Message: '',
    'Referral Source': '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Lead Source': 'Web - Contact'
  }

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.Contact.name,
    actOnFormId: NFForms.Contact.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'First Name': values['First Name'],
        'Last Name': values['Last Name'],
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
        'Contact Reason': values['Contact Reason'],
        'Fundraising Stage': values['Fundraising Stage'],
        Message: values.Message,
        'Referral Source': values['Referral Source'],
        'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
        'Opt-In': values['Opt-In'] ? '1' : '0',
        'Lead Source': values['Lead Source']
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
    <div className="ContactForm">
      <h2 className="text-h2 mb-12 pt-15 md:pt-20">
        Thank you for getting in touch!
      </h2>
      <p className="text-h3 mb-35">
        We’ll get back to you shortly. In the meantime, learn more about{' '}
        <MotionAniLink
          className="text-electricViolet"
          styleType="link"
          to="/who-we-are"
        >
          who we are
        </MotionAniLink>{' '}
        or catch up on our{' '}
        <MotionAniLink
          className="text-electricViolet"
          styleType="link"
          to="/insights"
        >
          latest insights.
        </MotionAniLink>
      </p>
    </div>
  ) : (
    <div className="ContactForm">
      <h2 className="font-extrabold text-h3 mb-8 text-center md:text-left">
        Contact us—we look forward to connecting.
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
          <Form id={NFForms.Contact.actOnId} name={NFForms.Contact.name}>
            <TextInput className="hidden" name="Lead Source" type="text" />

            <div className="ContactForm-row">
              <TextInput
                className="ContactForm-row-item block appearance-none"
                label="First Name *"
                name="First Name"
                type="text"
              />
              <TextInput
                className="ContactForm-row-item block appearance-none"
                label="Last Name *"
                name="Last Name"
                type="text"
              />
            </div>

            <div className="ContactForm-row">
              <TextInput
                className="ContactForm-row-item block appearance-none"
                label="Email *"
                name="E-mail Address"
                type="text"
              />

              <SelectField
                className="ContactForm-row-item"
                label="Country *"
                name="Country"
                options={COUNTRIES}
              />
            </div>

            <div className="ContactForm-row">
              <SelectField
                className="ContactForm-row-item"
                label="Contact Reason"
                name="Contact Reason"
                options={contactReasonOptions}
              />

              <SelectField
                className="ContactForm-row-item"
                label="Fundraising Stage *"
                name="Fundraising Stage"
                options={fundraisingStageOptions}
              />
            </div>

            <TextAreaField
              className="mb-8"
              label="Message *"
              name="Message"
              rows={4}
            />

            <SelectField
              className="ContactForm-referral"
              label="How did you hear of us?"
              name="Referral Source"
              options={referralSourceOptions}
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
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
