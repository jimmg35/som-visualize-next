export type BuildingPurpose = 'resident' | 'office' | 'store' | 'factory'
export type Material = 'concrete' | 'brick' | 'steel'

export type SetCostQuickParam = {
  countyCode: string
  buildingArea: number
  buildingPurpose: BuildingPurpose
  material: Material
  steelCharge: boolean
  groundFloor: number
  underGroundFloor: number
  age: number
  price: number
  extendYears: number
  transactionDate: string
}

export type SetCostQuickResponse = {
  constBudgetInterval: { min: number; max: number }
  designBudgetInterval: { min: number; max: number }
  adBudgetInterval: { min: number; max: number }
  manageBudgetInterval: { min: number; max: number }
  taxBudgetInterval: { min: number; max: number }
  totalBudgetInterval: { min: number; max: number }
  buildingCostInterval: { min: number; max: number }
  depreciatedBuildingCostInterval: { min: number; max: number }
  reversedLandCostInterval: { min: number; max: number }
  reversedPureLandPriceInterval: { min: number; max: number }
}

export type SetCostQuick = {
  ParamType: SetCostQuickParam
  ResponseType: SetCostQuickResponse
}
