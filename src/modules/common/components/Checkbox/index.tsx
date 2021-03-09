// Packages
import React from 'react'
import { useField } from 'formik'

// Common
import { WithFormField } from '@common/types/Forms'
import { WithClassName } from '@common/types/Utilities'

import Checkmark from '@static/svgs/common/checkmark-bold.inline.svg'

// Style
import './style.css'

interface Props extends WithClassName, WithFormField {
  checkboxClassName?: string
  labelClassName?: string
}

const Checkbox = ({
  className,
  checkboxClassName,
  labelClassName,
  label,
  ...props
}: Props) => {
  const [field, { touched, error }] = useField(props)
  return (
    <label className={`Checkbox-container ${className}`}>
      <input className="hidden" type="checkbox" {...field} />
      <span className={`${Checkbox} ${checkboxClassName}`}>
        <Checkmark className="Checkbox-checkmark" />
      </span>
      {label ? (
        <span className={`text-caption ${labelClassName}`}>{label}</span>
      ) : null}
      {touched && error ? (
        <div className="text-ui-error-dark text-caption mt-2">{error}</div>
      ) : null}
    </label>
  )
}

export default Checkbox
