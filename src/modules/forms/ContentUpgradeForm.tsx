// Packages
import React, { useCallback } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { useRecoilState } from 'recoil'
import { uniq } from 'lodash'
import * as Yup from 'yup'

// Common
import useSubmitNfForm from '@modules/forms/hooks/useSubmitNfForm'
import { NFForms } from '@common/types/NewFangled'
import { COUNTRIES } from '@common/constants/countries'
import { WithClassName } from '@common/types/Utilities'

// Components
import TextInput from '@modules/forms/components/TextInput'
import PrivacyOptIn from '@modules/forms/components/PrivacyOptIn'
import Button from '@modules/common/components/Button'
import SelectField from '@modules/forms/components/SelectField'

// Atoms
import { userContentUpgradeConversionsAtom } from '@modules/forms/atoms/userContentUpgradeConversionsAtom'

// Style
import './styles/ContentUpgradeForm.css'
import { TypeContentUpgrade } from '@common/types/ContentUpgrade'
import { classNames } from '@common/utils/classNames'

interface Props extends WithClassName {
  contentUpgrade: TypeContentUpgrade
  isSimple?: boolean
  isResource?: boolean
  title?: string
  inputRef?: React.RefObject<HTMLInputElement>
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
  'Content Upgrade Title': string
  'Lead Source': 'Web - Content Upgrade'
}

const formSchema = Yup.object().shape({
  Country: Yup.string().required('You must select a country to continue.'),
  'E-mail Address': Yup.string()
    .email('Incorrect email format. Please use a valid email address.')
    .required('You must enter your email to continue.')
})

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const ContentUpgradeForm = ({
  className,
  contentUpgrade,
  isSimple = false,
  isResource = false,
  title,
  inputRef
}: Props) => {
  const [
    userContentUpgradeConversions,
    setUserContentUpgradeConversions
  ] = useRecoilState(userContentUpgradeConversionsAtom)
  const userHasCompletedForm = userContentUpgradeConversions.includes(
    contentUpgrade.title
  )

  const formClassNames = classNames({
    ContentUpgrade: true,
    simpleForm: isSimple,
    resourceForm: isResource,
    [`${className}`]: !!className
  })

  const formImageClassNames = classNames({
    'ContentUpgrade-image': true,
    'ContentUpgrade-image__spaced': !!contentUpgrade.formImageWithSpacing,
    'mb-6': true
  })

  const initialFormValues: FormValues = {
    'E-mail Address': '',
    Country: '',
    'First Name': '',
    'Last Name': '',
    Company: '',
    Title: '',
    'Privacy Notice': true,
    'Opt-In': true,
    'Content Upgrade Title': title || contentUpgrade.title,
    'Lead Source': 'Web - Content Upgrade'
  }

  const submitToInsightEngine = useSubmitNfForm({
    formName: NFForms.ContentUpgrade.name,
    actOnFormId: NFForms.ContentUpgrade.actOnId
  })

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      const formattedSubmissionValues = {
        'E-mail Address': values['E-mail Address'],
        Country: values.Country,
        'Privacy Notice': values['Privacy Notice'] ? '1' : '0',
        'Opt-In': values['Opt-In'] ? '1' : 0,
        'Content Upgrade Title': values['Content Upgrade Title'],
        'Lead Source': values['Lead Source']
      }

      await submitToInsightEngine(
        values['E-mail Address'],
        formattedSubmissionValues
      )

      await sleep(500)

      const updatedConversions = uniq([
        ...userContentUpgradeConversions,
        contentUpgrade.title
      ])
      setUserContentUpgradeConversions(updatedConversions)
    },
    [
      submitToInsightEngine,
      contentUpgrade,
      userContentUpgradeConversions,
      setUserContentUpgradeConversions
    ]
  )

  const getTitle = useCallback((): string => {
    if (isSimple && contentUpgrade.simpleFormTitle) {
      return contentUpgrade.simpleFormTitle
    }

    if (isResource && contentUpgrade.resourceFormTitle) {
      return contentUpgrade.resourceFormTitle
    }

    return contentUpgrade.title
  }, [
    isSimple,
    isResource,
    contentUpgrade.simpleFormTitle,
    contentUpgrade.resourceFormTitle,
    contentUpgrade.title
  ])

  return (
    <div className={formClassNames}>
      <div className="ContentUpgrade-container">
        <h2 className="ContentUpgrade-title text-h3 font-extrabold mb-6">
          {getTitle()}
        </h2>

        {isSimple && contentUpgrade?.blurb?.blurb && !userHasCompletedForm ? (
          <p className="text-body mb-6">{contentUpgrade.blurb.blurb}</p>
        ) : null}

        {isResource &&
        contentUpgrade?.resourceBlurb?.resourceBlurb &&
        !userHasCompletedForm ? (
          <p className="text-body mb-6">
            {contentUpgrade.resourceBlurb.resourceBlurb}
          </p>
        ) : null}

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
              id={NFForms.ContentUpgrade.actOnId}
              name={NFForms.ContentUpgrade.name}
            >
              {!userHasCompletedForm ? (
                <>
                  <TextInput
                    className="hidden"
                    name="Lead Source"
                    type="text"
                  />
                  <TextInput
                    className="hidden"
                    name="Content Upgrade Title"
                    type="text"
                  />

                  <div className="ContentUpgrade-form">
                    {contentUpgrade.formImage ? (
                      <img
                        alt="illustration"
                        className={formImageClassNames}
                        src={contentUpgrade.formImage.file.url}
                      />
                    ) : null}
                    <div className="ContentUpgrade-form-fields">
                      <TextInput
                        className="ContentUpgrade-email block appearance-none mb-4"
                        inputRef={inputRef}
                        label="Email *"
                        name="E-mail Address"
                        type="text"
                      />

                      <SelectField
                        className="ContentUpgrade-country mb-6"
                        label="Country *"
                        name="Country"
                        options={COUNTRIES}
                        placeholder="Country"
                      />
                      <div className="ContentUpgrade-submit">
                        <Button
                          animate={false}
                          className="ContentUpgrade-button inline-block"
                          disabled={isSubmitting}
                          loading={isSubmitting}
                          styleType="solid-purple"
                          type="submit"
                        >
                          Submit For Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-h3">
                    Thanks for downloading—enjoy your content!
                  </h2>
                  <Button
                    animate={false}
                    className="ContentUpgrade-button inline-block"
                    disabled={isSubmitting}
                    download={true}
                    href={contentUpgrade.upgradeContent.file.url}
                    loading={isSubmitting}
                    styleType="solid-purple"
                    target="_blank"
                    type="submit"
                  >
                    Download Now
                  </Button>
                </>
              )}

              {!userHasCompletedForm ? (
                <div className="md:pr-8">
                  <PrivacyOptIn />
                </div>
              ) : null}

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

export default ContentUpgradeForm
