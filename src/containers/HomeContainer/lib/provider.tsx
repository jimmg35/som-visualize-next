import React, { createContext, useState } from 'react'

interface ISomContext {
  expId: string
  isLoading: boolean
  log: string | undefined
  originalColumns: string[]
  normalizedColumns: string[]
  columnX: string
  columnY: string

  epoch: number
  batchSize: number
  outputDimension: number[]
  datasetSize: number[]
  totalCluster: number
  clusterRatio: { [key: string]: number }

  onMetaChange: (value: any) => void
  onColumnXChange: (value: string) => void
  onColumnYChange: (value: string) => void
  onExpIdChange: (value: string) => void
  onIsLoadingChange: (value: boolean) => void
  onLogChange: (value: string) => void
  onOriginalColumnsChange: (value: string[]) => void
  onNormalizedColumnsChange: (value: string[]) => void
}

export const SomContext = createContext<ISomContext>({
  expId: '',
  isLoading: false,
  log: undefined,
  originalColumns: [],
  normalizedColumns: [],
  columnX: '',
  columnY: '',

  epoch: 0,
  batchSize: 0,
  outputDimension: [],
  datasetSize: [],
  totalCluster: 0,
  clusterRatio: {},

  onMetaChange: () => {},
  onColumnXChange: () => {},
  onColumnYChange: () => {},
  onExpIdChange: () => {},
  onIsLoadingChange: () => {},
  onLogChange: () => {},
  onOriginalColumnsChange: () => {},
  onNormalizedColumnsChange: () => {}
})

const SomProvider = ({ children }: { children: React.ReactNode }) => {
  const [expId, setexpId] = useState<string>('1701415386')
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [log, setlog] = useState<string | undefined>(undefined)
  const [originalColumns, setoriginalColumns] = useState<string[]>([])
  const [normalizedColumns, setnormalizedColumns] = useState<string[]>([])
  const [columnX, setcolumnX] = useState<string>('')
  const [columnY, setcolumnY] = useState<string>('')
  const [epoch, setepoch] = useState<number>(0)
  const [batchSize, setbatchSize] = useState<number>(0)
  const [outputDimension, setoutputDimension] = useState<number[]>([])
  const [datasetSize, setdatasetSize] = useState<number[]>([])
  const [totalCluster, settotalCluster] = useState<number>(0)
  const [clusterRatio, setclusterRatio] = useState<{ [key: string]: number }>(
    {}
  )

  return (
    <SomContext.Provider
      value={{
        expId,
        isLoading,
        log,
        originalColumns,
        normalizedColumns,
        columnX,
        columnY,
        epoch,
        batchSize,
        outputDimension,
        datasetSize,
        totalCluster,
        clusterRatio,
        onMetaChange: (value) => {
          console.log(value)
          setepoch(value.epoch)
          setbatchSize(value.batchSize)
          setoutputDimension(value.outputDimension)
          setdatasetSize(value.datasetSize)
          settotalCluster(value.totalCluster)
          setclusterRatio(value.clusterRatio)
        },
        onColumnXChange: (value) => {
          setcolumnX(value)
        },
        onColumnYChange: (value) => {
          setcolumnY(value)
        },
        onExpIdChange: (value) => {
          setexpId(value)
        },
        onIsLoadingChange: (value) => {
          setisLoading(value)
        },
        onLogChange: (value) => {
          setlog(value)
        },
        onOriginalColumnsChange: (value) => {
          setoriginalColumns(value)
        },
        onNormalizedColumnsChange: (value) => {
          setnormalizedColumns(value)
        }
      }}
    >
      {children}
    </SomContext.Provider>
  )
}

export default SomProvider
