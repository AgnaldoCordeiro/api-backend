import { VehicleRepository } from '../repositories/vehicles-repositories'

interface SubmitVehicleUseCaseRequest {
  name: string,
  description: string,
  plate: string,
  color: string,
  price: number,
  year: number
}
 
export class SubmitVehicleUseCase{
  constructor(
    private vehicleRepository: VehicleRepository,
  ) { }
  
  async execute(request: SubmitVehicleUseCaseRequest) {
    const { name, description, plate, color, price, year } = request;

    if (!name) {
      throw new Error('Name is required.')
    }
    if (!description) {
      throw new Error('description is required.')
    }
    if (!plate) {
      throw new Error('plate is required.')
    }
    if (!color) {
      throw new Error('color is required.')
    }
    if (!price) {
      throw new Error('prince is required.')
    }
    if (!year) {
      throw new Error('year is required.')
    }

    await this.vehicleRepository.create({
      name,
      description,
      color,
      plate,
      price,
      year
    })
  }
}
