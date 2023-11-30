import React from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

interface IDateField {
  title: string
  locale: string
  asSingle: boolean
  value: any
  onChange: (value: any) => void
}

const DateField = ({
  title,
  locale,
  value,
  asSingle,
  onChange
}: IDateField) => {
  return (
    <>
      <label className="label">
        <span className="form-control w-full label-text-alt">{title}</span>
      </label>
      <Datepicker
        i18n={locale}
        asSingle={asSingle}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default DateField
