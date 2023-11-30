export interface IAprBuild {
  id: string
  aprId: string
  usage: string
  material: string
  buildingLayer: string
  buildingTransferArea: number
}
export interface IAprLand {
  id: string
  aprId: string
  landTransferArea: number
  rightDenumerate: number
  rightNumerate: number
  address: string
  landUse: string
  parcelNumber: string
  transferStatus: number
}
export interface IAprPark {
  id: string
  locateLevel: string
  parkingSpaceType: number
  parkingSpacePrice: number
  parkingSpaceTransferArea: number
}
export interface ITransferFloor {
  id: string
  floor: number
}

export type GetByAprIdParam = {
  aprId: string
}

export type GetByAprIdResponse = {
  id: string
  aprId: string
  transactionTime: Date
  completionTime: Date
  floor: number
  hasElevator: number
  hasCommittee: number
  hasCompartment: number
  buildingTransferArea: number
  price: number
  unitPrice: number
  parkingSpaceTransferArea: number
  parkingSpacePrice: number
  landTransferArea: number
  roomNumber: number
  hallNumber: number
  bathNumber: number
  buildingArea: number
  subBuildingArea: number
  belconyArea: number
  landAmount: number
  buildingAmount: number
  parkAmount: number
  urbanLandUse: number
  nonUrbanLandUse: number
  nonUrbanLandUsePlanning: number
  buildingType: number
  parkingSpaceType: number
  priceWithoutParking: number
  address: string
  coordinate: {
    type: string
    coordinates: number[]
  }

  builds: IAprBuild[]
  lands: IAprLand[]
  parks: IAprPark[]
  transferFloors: ITransferFloor[]
}

export type GetByAprId = {
  ParamType: GetByAprIdParam
  ResponseType: GetByAprIdResponse
}
