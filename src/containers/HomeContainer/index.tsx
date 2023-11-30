'use client'

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import Report from './Report'
import { getColumnMeta, getLog } from './lib'
import { SomContext } from './lib/provider'

const HomeContainer = () => {
  const {
    expId,
    log,
    isLoading,
    onNormalizedColumnsChange,
    onExpIdChange,
    onIsLoadingChange,
    onLogChange,
    onColumnXChange,
    onColumnYChange
  } = useContext(SomContext)

  const handleVisualize = async () => {
    onIsLoadingChange(true)

    const logContent = await getLog({ expId })
    onLogChange(logContent)

    const metaContent = await getColumnMeta({ expId })
    // onOriginalColumnsChange(metaContent.original)

    onNormalizedColumnsChange([
      ...metaContent.original,
      ...metaContent.normalized
    ])
    onColumnXChange(metaContent.normalized[0])
    onColumnYChange(metaContent.normalized[1])

    onIsLoadingChange(false)
  }

  return (
    <main className="flex flex-col">
      <div className="flex items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Experiment ID"
          className="input input-bordered w-full max-w-xs"
          value={expId}
          onChange={(e) => {
            onExpIdChange(e.target.value)
          }}
        />
        <button className="btn btn-neutral" onClick={handleVisualize}>
          {!isLoading ? (
            <ArrowDownTrayIcon className="w-5 h-5" />
          ) : (
            <span className="loading loading-bars loading-sm"></span>
          )}
          下載實驗數據
        </button>
      </div>

      {log && <Report />}
    </main>
  )
}

export default HomeContainer
