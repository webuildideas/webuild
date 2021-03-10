// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'

// Style
import './style.css'
import { classNames } from '@common/utils/classNames'

interface Props extends WithClassName, WithFormField {
  showError?: boolean
}

const TextInput = ({
  className,
  type,
  placeholder,
  label,
  showError,
  ...props
}: Props) => {
  const [field, { error, touched }] = useField(props)
  const inputClasses = classNames({
    TextInput: true,
    'text-caption': true,
    'has-error': !!error
  })
  return (
    <div className={className}>
      <label>
        {label ? (
          <span className="text-tag block text-gray-700 mb-3">{label}</span>
        ) : null}
        <input
          className={inputClasses}
          placeholder={placeholder}
          type={type}
          {...field}
        />
      </label>
      {touched && error && showError ? (
        <div className="text-ui-error-dark text-caption mt-2">{error}</div>
      ) : null}
    </div>
  )
}

export default TextInput
