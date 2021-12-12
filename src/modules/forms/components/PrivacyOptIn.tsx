// Packages
import React from 'react'
import { useFormikContext } from 'formik'

// Commons
import { classNames } from '@common/utils/classNames'
import getCountryRequiresPrivacy from '@modules/forms/utils/getCountryRequiresPrivacy'

// Components
import Checkbox from '@modules/common/components/Checkbox'

interface Props {
  showOptIn?: boolean
}

const PrivacyOptIn = ({ showOptIn = true }: Props) => {
  const { values } = useFormikContext<{ Country?: string }>()
  const showPrivacyOptIn =
    !!values.Country && getCountryRequiresPrivacy(values.Country)

  const privacyNoticeClasses = classNames({
    'text-tag': true,
    block: true,
    'mb-2': true,
    'mt-6': true,
    hidden: !showPrivacyOptIn
  })

  const optInNoticeClasses = classNames({
    'text-tag': true,
    block: true,
    'mt-5': true,
    'mb-2': true,
    hidden: !showPrivacyOptIn || !showOptIn
  })

  const privacyCheckBox = classNames({
    flex: true,
    'items-center': true,
    'cursor-pointer': true,
    hidden: !showPrivacyOptIn
  })

  const optInCheckbox = classNames({
    flex: true,
    'items-center': true,
    'cursor-pointer': true,
    hidden: !showPrivacyOptIn || !showOptIn
  })

  return (
    <>
      <p className={privacyNoticeClasses}>
        We take your privacy seriously. We do not sell or share your data. We
        use it to enhance your experience with our site and to analyze the
        performance of our marketing efforts. To learn more, please see our{' '}
        <a
          className="text-electricViolet font-bold"
          href="/privacy/"
          target="_blank"
        >
          Privacy Notice
        </a>
        .
      </p>

      <Checkbox
        checkboxClassName="mr-2"
        className={privacyCheckBox}
        label="Got It!*"
        name="Privacy Notice"
      />

      <p className={optInNoticeClasses}>
        By submitting this form you agree to accept emails from us. Don't worry,
        we never send spam.
      </p>

      <Checkbox
        checkboxClassName="mr-2"
        className={optInCheckbox}
        label="Sounds Good"
        name="Opt-In"
      />
    </>
  )
}

export default PrivacyOptIn
