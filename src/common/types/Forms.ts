import { FormikHandlers } from 'formik'

export interface WithFormField {
  /** Name of the field */
  name: string
  /** The Type of input */
  type?: string
  /** Value of the field */
  value?: string
  /** Multiple select? */
  multiple?: boolean
  /** Is the field checked? */
  checked?: boolean
  /** Change event handler */
  onChange?: FormikHandlers['handleChange']
  /** Blur event handler */
  onBlur?: FormikHandlers['handleBlur']
  /** placeholder for input */
  placeholder?: string

  label?: string
}
