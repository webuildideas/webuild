// Packages
import React, { useCallback } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { useRecoilState } from 'recoil'
import { uniq } from 'lodash'
import * as Yup from 'yup'

// Common
// import useSubmitNfForm from '@modules/forms/hooks/useSubmitNfForm'
// import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'
import { WithClassName } from '@common/types/Utilities'

// Components
import TextInput from '@modules/forms/components/TextInput'
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/forms/components/SelectField'

// Atoms
import { userGatedPostConversionsAtom } from '@modules/insight/atoms/userGatedPostConversions'
import encode from './utils/encode'

// Style
import './styles/GatedPostForm.css'

interface Props extends WithClassName {
  postTitle: string
  postId: string
}

interface FormValues {
  'E-mail Address': string
  Country: string
  'First Name': string
  'Last Name': string
  Company: string
  Title: string
  'Privacy Notice': boolean
  'Opt-In': boolean
  'Gated Post Title': string
  'Lead Source': 'Web - Gated Post'
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'E-mail Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('You must enter your email to continue.')
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const GatedPostForm = ({ className, postTitle, postId }: Props) => {
  const [
    userGatedPostConversions,
    setUserGatedPostConversions
  ] = useRecoilState(userGatedPostConversionsAtom)
  const userHasCompletedForm = userGatedPostConversions.includes(postId)
  const initialFormValues: FormValues = {
    'E-mail Address': '',
    Country: '',
    'First Name': '',
    'Last Name': '',
    Company: '',
    Title: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Gated Post Title': postTitle,
    'Lead Source': 'Web - Gated Post'
  }

  const handleSubmit = useCallback(
    async (values: FormValues, actions: any) => {
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'gated-post-form', ...values })
      })
        .then(() => {
          actions.resetForm()
        })
        .catch(() => {
          console.log('Error')
        })
        .finally(() => actions.setSubmitting(false))

      await sleep(500)

      const updatedConversions = uniq([...userGatedPostConversions, postId])
      setUserGatedPostConversions(updatedConversions)
    },
    [postId, userGatedPostConversions, setUserGatedPostConversions]
  )

  return userHasCompletedForm ? null : (
    <div className={`GatedPost ${className}`}>
      <div className="GatedPost-container">
        <h2 className="text-h3 font-extrabold mb-6">Continue Reading...</h2>
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validateOnBlur={false}
          validateOnChange={false}
          validateOnMount={false}
          validationSchema={formSchema}
        >
          {({ isSubmitting, errors }: FormikProps<FormValues>) => (
            <Form
              data-netlify={true}
              data-netlify-honeypot="bot-field"
              name="gated-post-form"
            >
              <input name="form-name" type="hidden" value="gated-post-form" />
              <input name="bot-field" type="hidden" />

              <div className="GatedPost-form">
                <TextInput
                  className="GatedPost-email block appearance-none mb-4 md:mb-0"
                  label="Email *"
                  name="E-mail Address"
                  type="text"
                />

                <SelectField
                  className="GatedPost-country mb-6 md:mb-0"
                  label="Country *"
                  name="Country"
                  options={COUNTRIES}
                  placeholder="Country"
                />
                <Button
                  animate={false}
                  className="GatedPost-button block mt-8"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  styleType="solid-purple"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default GatedPostForm
