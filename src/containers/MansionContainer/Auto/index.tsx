// RPTOMLSKIIGGFAD77DA
import {
  CloudArrowDownIcon,
  CodeBracketSquareIcon
} from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { StatusContext } from '../../../status'
import Manual, { delay } from '../Manual'
import { MansionContext } from '../Provider'

const Auto = () => {
  const { aprId, aprResult, onAprFetch, onAprIdChange } =
    useContext(MansionContext)
  const { onStatusChange } = useContext(StatusContext)

  const handleAprFetch = async () => {
    onStatusChange('loading', undefined)
    await delay(2)
    const { status, msg } = await onAprFetch()
    onStatusChange(status, msg)
  }

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          className="btn btn-primary text-white h-[70px]"
          onClick={handleAprFetch}
        >
          <CloudArrowDownIcon className="w-5 h-5" />
          帶入資料
        </button>
        <div className="form-control w-full ">
          <label className="label justify-start gap-2">
            <CodeBracketSquareIcon className="w-6 h-6" />
            <span className="label-text-alt">實價登錄ID</span>
          </label>
          <input
            value={aprId}
            type="text"
            onChange={(e) => {
              onAprIdChange(e.target.value)
            }}
            placeholder="請輸入實價登錄ID"
            className="input input-sm input-bordered text-xs w-full"
          />
        </div>
      </div>

      {aprResult && <Manual />}
    </div>
  )
}

export default Auto
