import React, { createContext, useState } from 'react'
import moment from 'moment'
import { IStatus } from '../../../status'
import { useLazyGetByAprIdQuery } from '../../../store/services/apr'
import { useGetMansionLandAppraiseMutation } from '../../../store/services/asterack'
import { getCountyInfoByCoordinates } from '../../../store/services/spatial'
import {
  GetByAprIdResponse,
  IAprBuild
} from '../../../store/services/types/apr'
import {
  BuildingPurpose,
  Material,
  SetCostQuickResponse
} from '../../../store/services/types/asterack'

const isValidDateFormat = (dateString: string): boolean => {
  const dateFormatRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateFormatRegex.test(dateString)) {
    return false
  }
  const [year, month, day] = dateString.split('-')
  if (isNaN(Number(year)) || isNaN(Number(month)) || isNaN(Number(day))) {
    return false
  }
  return true
}

const validateSteelCharge = (builds: IAprBuild[]) => {
  for (let i = 0; i < builds.length; i++) {
    if (builds[i].material.includes('鋼骨')) return true
  }
  return false
}

const validateMaterial = (builds: IAprBuild[]): Material => {
  for (let i = 0; i < builds.length; i++) {
    if (builds[i].material.includes('磚造')) return 'brick'
    if (builds[i].material.includes('混凝土')) return 'concrete'
  }
  return 'steel'
}

const validateUrbanLandUse = (aprData: GetByAprIdResponse): BuildingPurpose => {
  if (aprData.urbanLandUse === 0) return 'resident'
  if (aprData.urbanLandUse === 1) return 'office'
  if (aprData.urbanLandUse === 4) return 'factory'
  return 'resident'
}

interface IMansionContext {
  tab: number
  aprId: string
  buildingArea: number
  landArea: number
  groundFloor: number
  age: number
  price: number
  extendYears: number
  buildingPurpose: BuildingPurpose | ''
  material: Material | ''
  countyCode: string
  steelCharge: boolean
  transactionDate: string
  aprResult: GetByAprIdResponse | undefined
  result: SetCostQuickResponse | undefined
  onTabChange: (value: number) => void
  onAprIdChange: (value: string) => void
  onAprResultChange: (value: GetByAprIdResponse) => void
  onResultChange: (value: SetCostQuickResponse | undefined) => void
  onBuildingAreaChange: (value: number) => void
  onLandAreaChange: (value: number) => void
  onGroundFloorChange: (value: number) => void
  onAgeChange: (value: number) => void
  onPriceChange: (value: number) => void
  onExtendYearsChange: (value: number) => void
  onBuildingPurposeChange: (value: BuildingPurpose) => void
  onMaterialChange: (value: Material) => void
  onCountyCodeChange: (value: string) => void
  onSteelChargeChange: (value: boolean) => void
  onTransactionDateChange: (value: string) => void
  onCalculate: () => Promise<{
    status: IStatus
    msg: string
  }>
  onAprFetch: () => Promise<{
    status: IStatus
    msg: string
  }>
}

export const MansionContext = createContext<IMansionContext>({
  tab: 0,
  aprId: '',
  buildingArea: 0,
  landArea: 0,
  groundFloor: 0,
  age: 0,
  price: 0,
  extendYears: 0,
  buildingPurpose: '',
  material: '',
  countyCode: '',
  steelCharge: false,
  transactionDate: '',
  aprResult: undefined,
  result: undefined,
  onTabChange: () => {},
  onAprIdChange: () => {},
  onAprResultChange: () => {},
  onResultChange: () => {},
  onBuildingAreaChange: () => {},
  onLandAreaChange: () => {},
  onGroundFloorChange: () => {},
  onAgeChange: () => {},
  onPriceChange: () => {},
  onExtendYearsChange: () => {},
  onBuildingPurposeChange: () => {},
  onMaterialChange: () => {},
  onCountyCodeChange: () => {},
  onSteelChargeChange: () => {},
  onTransactionDateChange: () => {},
  onCalculate: async () => {
    return {
      status: 'success',
      msg: ''
    }
  },
  onAprFetch: async () => {
    return {
      status: 'success',
      msg: ''
    }
  }
})

const MansionProvider = ({
  externalAprId,
  children
}: {
  externalAprId: string | undefined
  children: React.ReactNode
}) => {
  const [buildingArea, setbuildingArea] = useState<number>(0) // 365.18
  const [landArea, setlandArea] = useState<number>(0) // 400
  const [groundFloor, setgroudLevel] = useState<number>(0) // 4
  const [age, setage] = useState<number>(0) // 44
  const [price, setprice] = useState<number>(0) // 107200000
  const [extendYears, setextendYears] = useState<number>(0)
  const [buildingPurpose, setpurpose] = useState<BuildingPurpose | ''>('') // 'resident'
  const [material, setmaterial] = useState<Material | ''>('') // 'concrete'
  const [countyCode, setcountyCode] = useState<string>('') // '68000'
  const [steelCharge, setsteelCharge] = useState<boolean>(false)
  const [result, setresult] = useState<SetCostQuickResponse | undefined>(
    undefined
  )
  const [transactionDate, settransactionDate] = useState<string>('') // '2017-09-30'
  const [aprId, setaprId] = useState<string>(externalAprId ? externalAprId : '') //'RPTOMLSKIIGGFAD77DA'
  const [aprResult, setaprResult] = useState<GetByAprIdResponse | undefined>(
    undefined
  )
  const [tab, settab] = useState<number>(externalAprId ? 1 : 0)
  const [trigger] = useGetMansionLandAppraiseMutation()
  const [fetchApr] = useLazyGetByAprIdQuery()

  const onAprFetch = async (): Promise<{
    status: IStatus
    msg: string
  }> => {
    const response = await fetchApr({ aprId })
    if ('data' in response && response.data) {
      setaprResult(response.data)
      const countyInfo = await getCountyInfoByCoordinates({
        longitude: response.data.coordinate.coordinates.at(0),
        latitude: response.data.coordinate.coordinates.at(1)
      })
      if (!countyInfo)
        return {
          status: 'error',
          msg: '此交易紀錄的座標錯誤，請聯繫開發人員'
        }

      if (response.data.buildingType !== 6 && response.data.buildingType !== 10)
        return {
          status: 'warning',
          msg: '此交易紀錄不屬於透天厝或工廠，無法進行計算'
        }
      const isSteelCharged = validateSteelCharge(response.data.builds)
      const material = validateMaterial(response.data.builds)
      const purpose = validateUrbanLandUse(response.data)
      setcountyCode(countyInfo.countycode)
      setbuildingArea(Number(response.data.buildingTransferArea))
      setpurpose(purpose)
      setmaterial(material)
      setsteelCharge(isSteelCharged)
      setgroudLevel(Number(response.data.floor))
      setage(
        Math.abs(
          Math.ceil(
            moment(response.data.completionTime).diff(
              moment(response.data.transactionTime),
              'years',
              true
            )
          )
        )
      )
      setprice(Number(response.data.price))
      setextendYears(0)
      settransactionDate(
        moment(response.data.transactionTime).format('YYYY-MM-DD')
      )
      return {
        status: 'success',
        msg: '資料帶入成功'
      }
    }
    setaprResult(undefined)
    return {
      status: 'error',
      msg: '查無此實價登錄資料'
    }
  }

  const onCalculate = async (): Promise<{
    status: IStatus
    msg: string
  }> => {
    const isDateValid = isValidDateFormat(transactionDate)
    if (!isDateValid) {
      setresult(undefined)
      return {
        status: 'warning',
        msg: '不正確的日期格式'
      }
    }
    if (buildingPurpose === '' || material === '' || countyCode === '')
      return {
        status: 'warning',
        msg: '請完成表格，否則無法進行計算'
      }
    const response = await trigger({
      countyCode,
      buildingArea,
      buildingPurpose, //'resident' | 'office' | 'store' | 'factory'
      material, // 'concrete' | 'brick' | 'steel'
      steelCharge,
      groundFloor,
      age,
      price,
      extendYears,
      transactionDate: `${transactionDate}T00:00:00.000Z`,
      underGroundFloor: 0
    })
    if ('data' in response) {
      setresult(response.data)
      return {
        status: 'success',
        msg: '計算成功'
      }
    }

    setresult(undefined)
    return {
      status: 'error',
      msg: '計算失敗，請聯繫開發人員'
    }
  }

  return (
    <MansionContext.Provider
      value={{
        tab,
        buildingArea,
        landArea,
        groundFloor,
        age,
        price,
        extendYears,
        buildingPurpose,
        material,
        countyCode,
        steelCharge,
        transactionDate,
        aprId,
        aprResult,
        result,
        onTabChange: (value) => {
          settab(value)
        },
        onAprIdChange: (value) => {
          setaprId(value)
        },
        onAprResultChange: (value) => {
          setaprResult(value)
        },
        onResultChange: (value) => {
          setresult(value)
        },
        onCalculate,
        onAprFetch,
        onBuildingAreaChange: (value) => {
          setbuildingArea(value)
        },
        onLandAreaChange: (value) => {
          setlandArea(value)
        },
        onGroundFloorChange: (value) => {
          setgroudLevel(value)
        },
        onAgeChange: (value) => {
          setage(value)
        },
        onPriceChange: (value) => {
          setprice(value)
        },
        onExtendYearsChange: (value) => {
          setextendYears(value)
        },
        onBuildingPurposeChange: (value) => {
          setpurpose(value)
        },
        onMaterialChange: (value) => {
          setmaterial(value)
        },
        onCountyCodeChange: (value) => {
          setcountyCode(value)
        },
        onSteelChargeChange: (value) => {
          setsteelCharge(value)
        },
        onTransactionDateChange: (value) => {
          settransactionDate(value)
        }
      }}
    >
      {children}
    </MansionContext.Provider>
  )
}

export default MansionProvider
