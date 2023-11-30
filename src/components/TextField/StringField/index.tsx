import React from 'react'

interface ITextInput {
  title: string
  value: string
  placeholder?: string | undefined
  onChange: (value: string) => void
}

const StringField = ({
  title,
  value,
  placeholder = undefined,
  onChange
}: ITextInput) => {
  return (
    <div className="form-control w-full ">
      <label className="label">
        <span className="label-text-alt">{title}</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="input input-sm input-bordered text-xs w-full "
      />
    </div>
  )
}

export default StringField
