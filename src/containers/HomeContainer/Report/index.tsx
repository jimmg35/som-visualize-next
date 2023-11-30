import React, { useContext, useState } from 'react'
import Chart from '../Chart'
import { getPariedData } from '../lib'
import { SomContext } from '../lib/provider'

const Report = () => {
  const {
    expId,
    columnX,
    columnY,
    log,
    normalizedColumns,
    onColumnXChange,
    onColumnYChange
  } = useContext(SomContext)
  const [data, setdata] = useState<
    | {
        [key: string]: number[]
      }
    | undefined
  >(undefined)

  const handleColumnChange = async () => {
    const data = await getPariedData({ expId, columnX, columnY })
    setdata(data)
  }

  return (
    <>
      <div className="divider"></div>
      <div className="w-full h-full bg-base-300 rounded-xl overflow-auto">
        <pre className="text-base bg-neutral text-white p-2 rounded-t-lg">
          {log}
        </pre>

        <div className="p-4 flex items-center justify-center gap-4">
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              onColumnXChange(e.target.value)
            }}
            defaultValue={undefined}
            value={columnX}
          >
            {normalizedColumns.map((column, index) => (
              <option key={index} value={column}>
                {column}
              </option>
            ))}
          </select>

          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              onColumnYChange(e.target.value)
            }}
            defaultValue={undefined}
            value={columnY}
          >
            {normalizedColumns.map((column, index) => (
              <option key={index} value={column}>
                {column}
              </option>
            ))}
          </select>

          <button className="btn btn-neutral" onClick={handleColumnChange}>
            產圖
          </button>
        </div>

        <div className="flex flex-wrap py-8 px-4 items-center justify-center gap-4">
          {data && <Chart data={data} />}
        </div>
      </div>
    </>
  )
}

export default Report
