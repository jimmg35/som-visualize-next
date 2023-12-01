export const getLog = async ({ expId }: { expId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE}/${expId}_som/log.txt`
  )
  const content = await response.text()
  return content
}

export const getColumnMeta = async ({ expId }: { expId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE}/${expId}_som/meta.json`
  )
  const content = (await response.json()) as unknown as {
    original: string[]
    normalized: string[]
    epoch: number
    batchSize: number
    outputDimension: number[]
    datasetSize: number[]
    totalCluster: number
    clusterRatio: { [key: string]: number }
  }
  return content
}

export const getPariedData = async ({
  expId,
  columnX,
  columnY
}: {
  expId: string
  columnX: string
  columnY: string
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE}/${expId}_som/${columnX}_${columnY}.json`
  )
  const content = (await response.json()) as unknown as {
    [key: string]: number[]
  }
  return content
}

// export const getClusterData = async ({ expId }: { expId: string }) => {
//   const responseCluster = await fetch(
//     `${process.env.NEXT_PUBLIC_API_SOURCE}/${expId}_som/cluster.csv`
//   )
//   const pairedData = await responseCluster.json()
//   // const clusterData = new Float32Array(arrayBuffer)
//   console.log(pairedData)
//   // setdata(clusterData)
// }
