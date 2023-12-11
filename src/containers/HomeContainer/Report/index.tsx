import React, { useContext, useState } from 'react'
import Chart from '../Chart'
import StatisticChart from '../StatisticChart'
import { getPariedData } from '../lib'
import { SomContext } from '../lib/provider'

const Report = () => {
  const {
    expId,
    columnX,
    columnY,
    log,
    normalizedColumns,
    epoch,
    batchSize,
    outputDimension,
    datasetSize,
    totalCluster,
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
      <div className="w-full h-full bg-base-300 rounded-xl overflow-auto shadow">
        <div className="p-4 flex flex-col gap-6">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
            <div className="stat  place-items-center">
              <div className="stat-title">Epoch</div>
              <div className="stat-value">{epoch}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Batch size</div>
              <div className="stat-value">{batchSize}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Output Dimension</div>
              <div className="stat-value">{`(${outputDimension[0]},${outputDimension[1]})`}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Dataset size</div>
              <div className="stat-value">{`(${datasetSize[0]},${datasetSize[1]})`}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Total clusters</div>
              <div className="stat-value">{totalCluster}</div>
            </div>
          </div>
          <div className="flex w-full h-[600px] shadow rounded-2xl">
            <pre className="flex-[0.5] text-base bg-neutral text-white p-2 w-1/2 overflow-auto rounded-l-2xl">
              {log}
            </pre>

            <div className="flex-[0.5] w-1/2 rounded-r-2xl p-4 bg-base-100">
              <StatisticChart />
            </div>
          </div>
        </div>

        <div className="divider px-4"></div>

        <div className="p-4">
          <div className="p-4 py-8 bg-base-100 shadow rounded-2xl">
            <div className="flex items-center justify-center gap-4">
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

            <div className="flex flex-wrapitems-center justify-center gap-4 ">
              {data && <Chart data={data} />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report
