import React from 'react'

interface INumberInput {
  title: string
  value: number
  onChange: (value: number) => void
}

const NumberField = ({ title, value, onChange }: INumberInput) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text-alt">{title}</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        type="number"
        placeholder="請輸入數字"
        className="input input-sm input-bordered text-xs w-full "
      />
    </div>
  )
}

export default NumberField
