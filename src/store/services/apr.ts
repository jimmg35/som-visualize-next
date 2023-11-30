import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetByAprId } from './types/apr'

export const aprApi = createApi({
  reducerPath: 'aprApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_SOURCE_DSSX}/api/deal/`
  }),
  endpoints: (builder) => ({
    getByAprId: builder.query<
      GetByAprId['ResponseType'],
      GetByAprId['ParamType']
    >({
      query: (param) => ({
        url: `${param.aprId}`,
        method: 'get'
      })
    })
  })
})

export const { useGetByAprIdQuery, useLazyGetByAprIdQuery } = aprApi

export const getInfoByAprId = async (aprId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH_INTERNAL}/api/deal/${aprId}`,
    {
      cache: 'no-store'
    }
  )
  const responseContent = (await response.json()) as GetByAprId['ResponseType']
  if (response.status === 200) return responseContent
  return undefined
}

export const getInfoByAprIdClient = async (aprId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/deal/${aprId}`,
    {
      cache: 'no-store'
    }
  )
  const responseContent = (await response.json()) as GetByAprId['ResponseType']
  if (response.status === 200) return responseContent
  return undefined
}
