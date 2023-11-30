import { SetCostQuick } from '@/store/services/types/asterack'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const asterackApi = createApi({
  reducerPath: 'asterackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_SOURCE_ASTERACK}/api/appraise`
  }),
  endpoints: (builder) => ({
    getMansionLandAppraise: builder.mutation<
      SetCostQuick['ResponseType'],
      SetCostQuick['ParamType']
    >({
      query: (param) => ({
        url: '/mansion',
        method: 'post',
        body: param
      })
    })
  })
})

export const { useGetMansionLandAppraiseMutation } = asterackApi

// const validateSteelCharge = (builds: IAprBuild[]) => {
//   for (let i = 0; i < builds.length; i++) {
//     if (builds[i].material.includes('鋼骨')) return true
//   }
//   return false
// }

// const validateMaterial = (builds: IAprBuild[]): AsterackMaterial => {
//   for (let i = 0; i < builds.length; i++) {
//     if (builds[i].material.includes('磚造')) return 'brick'
//     if (builds[i].material.includes('混凝土')) return 'concrete'
//   }
//   return 'steel'
// }

// const validateUrbanLandUse = (
//   aprData: GetByAprId['ResponseType']
// ): AsterackBuildingPurpose => {
//   if (aprData.urbanLandUse === 0) return 'resident'
//   if (aprData.urbanLandUse === 1) return 'office'
//   if (aprData.urbanLandUse === 4) return 'factory'
//   return 'resident'
// }

// export const getMansionAsterack = async (
//   aprData: GetByAprId['ResponseType'] | undefined,
//   countyInfo: GetCountyInfoByCoordinate['ResponseType'] | undefined
// ) => {
//   if (!aprData) return undefined
//   if (!countyInfo) return undefined
//   if (aprData.buildingType !== 6 && aprData.buildingType !== 10)
//     return undefined
//   const isSteelCharged = validateSteelCharge(aprData.builds)
//   const material = validateMaterial(aprData.builds)
//   const purpose = validateUrbanLandUse(aprData)

//   const myHeaders = new Headers()
//   myHeaders.append('Content-Type', 'application/json')
//   // console.log(aprData.transactionTime)
//   const raw = JSON.stringify({
//     countyCode: countyInfo.countycode,
//     buildingArea: Number(aprData.buildingTransferArea),
//     buildingPurpose: purpose,
//     material: material,
//     steelCharge: isSteelCharged ? true : false,
//     groundFloor: aprData.floor,
//     underGroundFloor: 0,
//     age: Math.abs(
//       Math.ceil(
//         moment(aprData.completionTime).diff(
//           moment(aprData.transactionTime),
//           'years',
//           true
//         )
//       )
//     ),
//     price: Number(aprData.price),
//     extendYears: 0,
//     transactionDate: aprData.transactionTime
//   })
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_ASTERACK_API_DOMAIN}/api/appraise/mansion`,
//     {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//       cache: 'no-store'
//     }
//   )

//   const responseContent =
//     (await response.json()) as SetCostQuick['ResponseType']
//   if (response.status === 200) return responseContent
//   return undefined
// }
