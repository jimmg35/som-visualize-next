import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetCountyInfoByCoordinate } from './types/spatial'

export const spatialApi = createApi({
  reducerPath: 'spatialApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_SOURCE_DSSX}/api/spatial`
  }),
  endpoints: (builder) => ({
    getCountyInfoByCoord: builder.mutation<
      GetCountyInfoByCoordinate['ResponseType'],
      GetCountyInfoByCoordinate['ParamType']
    >({
      query: (param) => ({
        url: ``,
        method: 'post',
        body: JSON.stringify({
          longitude: param.longitude,
          latitude: param.latitude
        })
      })
    })
  })
})

export const { useGetCountyInfoByCoordMutation } = spatialApi

export const getCountyInfoByCoordinates = async ({
  longitude,
  latitude
}: GetCountyInfoByCoordinate['ParamType']) => {
  if (!latitude || !longitude) return undefined
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    longitude: longitude,
    latitude: latitude
  })

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SOURCE_DSSX}/api/spatial`,
    {
      method: 'post',
      cache: 'no-store',
      headers: myHeaders,
      body: raw
    }
  )
  const responseContent =
    (await response.json()) as GetCountyInfoByCoordinate['ResponseType']
  if (response.status === 200) return responseContent
  return undefined
}
