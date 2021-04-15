// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'

// Style
import '../styles/SelectField.css'

export interface SelectOption {
  name: string
  value: string
  privacyPolicy?: boolean
}

interface Props extends WithClassName, WithFormField {
  options: SelectOption[]
  placeholder?: string
  showError?: boolean
}

const SelectField = ({
  className,
  placeholder,
  label,
  options,
  showError,
  ...props
}: Props) => {
  const [field, { error, touched }] = useField(props)
  return (
    <div className={className}>
      <label>
        {label ? (
          <span className="text-tag block text-gray-700 mb-3">{label}</span>
        ) : null}
        <select
          {...field}
          className="SelectField text-caption w-full"
          placeholder={placeholder}
        >
          {options.map((option: SelectOption) => {
            return (
              <option key={option.name} value={option.value}>
                {option.name}
              </option>
            )
          })}
        </select>
      </label>
      {touched && error && showError ? (
        <div className="error">{error}</div>
      ) : null}
    </div>
  )
}

export default SelectField
