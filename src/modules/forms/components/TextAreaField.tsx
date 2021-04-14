// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'
import { classNames } from '@common/utils/classNames'

// Style
import '../styles/TextAreaField.css'

interface Props extends WithClassName, WithFormField {
  showError?: boolean
  rows?: number
}

const TextAreaField = ({
  className,
  placeholder,
  label,
  showError,
  rows,
  ...props
}: Props) => {
  const [field, { error, touched }] = useField(props)
  const inputClasses = classNames({
    TextAreaField: true,
    'text-caption': true,
    'w-full': true,
    'has-error': !!error
  })
  return (
    <div className={className}>
      <label className="block">
        {label ? (
          <span className="text-tag block text-gray-700 mb-3">{label}</span>
        ) : null}
        <textarea
          className={inputClasses}
          placeholder={placeholder}
          rows={rows}
          {...field}
        />
      </label>
      {touched && error && showError ? (
        <div className="text-ui-error-dark text-caption mt-2">{error}</div>
      ) : null}
    </div>
  )
}

export default TextAreaField
