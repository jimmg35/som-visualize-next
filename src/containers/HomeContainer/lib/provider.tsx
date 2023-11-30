import React, { createContext, useState } from 'react'

interface ISomContext {
  expId: string
  isLoading: boolean
  log: string | undefined
  originalColumns: string[]
  normalizedColumns: string[]
  columnX: string
  columnY: string
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
  onColumnXChange: () => {},
  onColumnYChange: () => {},
  onExpIdChange: () => {},
  onIsLoadingChange: () => {},
  onLogChange: () => {},
  onOriginalColumnsChange: () => {},
  onNormalizedColumnsChange: () => {}
})

const SomProvider = ({ children }: { children: React.ReactNode }) => {
  const [expId, setexpId] = useState<string>('')
  const [isLoading, setisLoading] = useState<boolean>(false)
  const [log, setlog] = useState<string | undefined>(undefined)
  const [originalColumns, setoriginalColumns] = useState<string[]>([])
  const [normalizedColumns, setnormalizedColumns] = useState<string[]>([])
  const [columnX, setcolumnX] = useState<string>('')
  const [columnY, setcolumnY] = useState<string>('')

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
