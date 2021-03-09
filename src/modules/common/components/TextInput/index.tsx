// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'

// Style
import './style.css'

interface Props extends WithClassName, WithFormField {}

const TextInput = ({
  className,
  type,
  placeholder,
  label,
  ...props
}: Props) => {
  const [field, { error, touched }] = useField(props)
  return (
    <div className={className}>
      <label>
        {label ? (
          <span className="text-tag block text-gray-700 mb-3">{label}</span>
        ) : null}
        <input
          className="TextInput text-caption"
          placeholder={placeholder}
          type={type}
          {...field}
        />
      </label>
      {touched && error ? (
        <div className="text-ui-error-dark text-caption mt-2">{error}</div>
      ) : null}
    </div>
  )
}

export default TextInput
