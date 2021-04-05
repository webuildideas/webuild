// Packages
import React, { useCallback } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { useRecoilState } from 'recoil'
import { uniq } from 'lodash'
import * as Yup from 'yup'

// Common
import useSubmitNfForm from '@common/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'

// Components
import TextInput from '@modules/common/components/TextInput'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/common/components/SelectField'

// Atoms
import { userGatedPostConversionsAtom } from '@modules/insight/atoms/userGatedPostConversions'

// Style
import './styles/GatedPost.css'
import { WithClassName } from '@common/types/Utilities'

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
  'Opt-In': string
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
    'Opt-In': '1',
    'Gated Post Title': postTitle,
    'Lead Source': 'Web - Gated Post'
  }

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.GatedPost.name,
    actOnFormId: NFForms.GatedPost.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
        'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
        'Opt-In': values['Opt-In'],
        'Gated Post Title': values['Gated Post Title'],
        'Lead Source': values['Lead Source']
      }

      await submitToInsightEngine(
        values['E-mail Address'],
        formattedSubmissionValues
      )

      await sleep(500)

      const updatedConversions = uniq([...userGatedPostConversions, postId])
      setUserGatedPostConversions(updatedConversions)
    },
    [
      submitToInsightEngine,
      postId,
      userGatedPostConversions,
      setUserGatedPostConversions
    ]
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
            <Form id={NFForms.GatedPost.actOnId} name={NFForms.GatedPost.name}>
              <TextInput className="hidden" name="Opt-In" type="text" />
              <TextInput className="hidden" name="Lead Source" type="text" />
              <TextInput
                className="hidden"
                name="Gated Post Title"
                type="text"
              />

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
                  className="GatedPost-button block mt-8"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  styleType="solid-purple"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default GatedPostForm
