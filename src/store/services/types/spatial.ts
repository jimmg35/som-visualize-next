export type GetCountyInfoByCoordinateParam = {
  longitude: number | undefined
  latitude: number | undefined
}

export type GetCountyInfoByCoordinateResponse = {
  countycode: string
  towncode: string
  villcode: string
  countyname: string
  townname: string
  villname: string
}

export type GetCountyInfoByCoordinate = {
  ParamType: GetCountyInfoByCoordinateParam
  ResponseType: GetCountyInfoByCoordinateResponse
}
