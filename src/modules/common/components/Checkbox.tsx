// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'

// Assets
import Checkmark from '@static/svgs/common/checkmark-bold.inline.svg'

// Style
import './styles/Checkbox.css'

interface Props extends WithClassName, WithFormField {
  checkboxClassName?: string
  labelClassName?: string
  showError?: boolean
}

const Checkbox = ({
  className,
  checkboxClassName,
  labelClassName,
  label,
  showError = false,
  ...props
}: Props) => {
  const [field, { touched, error }] = useField(props)
  return (
    <label className={`Checkbox-container ${className}`}>
      <input
        checked={field.value}
        className="hidden"
        type="checkbox"
        {...field}
      />
      <span className={`Checkbox ${checkboxClassName}`}>
        <Checkmark className="Checkbox-checkmark" />
      </span>
      {label ? (
        <span className={`text-caption ${labelClassName}`}>{label}</span>
      ) : null}
      {touched && error && showError ? (
        <div className="text-ui-error-dark text-caption mt-2">{error}</div>
      ) : null}
    </label>
  )
}

export default Checkbox
