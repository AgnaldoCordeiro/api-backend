export interface VehicleCreateData {
  name: string,
  description: string,
  plate: string,
  color: string,
  price: number,
  year: number
}
export interface VehicleDeleteData {
  id: number, 
}
export interface VehicleUpdateData {
  id: number,
  description: string,
  plate: string,
  price: number,
}

export interface VehicleRepository{
  create: (data: VehicleCreateData) => Promise<void>
  delete: (where: VehicleDeleteData) => Promise<void>
  update: (data: VehicleUpdateData) => Promise<void>
}