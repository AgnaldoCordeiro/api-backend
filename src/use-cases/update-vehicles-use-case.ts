import { VehicleRepository } from '../repositories/vehicles-repositories'

interface UpdateVehicleUseCaseRequest {
  id: number;
  description: string,
  plate: string,
  price: number,
}

export class UpdateVehicleUseCase{
  constructor(
    private vehicleRepository: VehicleRepository,
  ) { }
  
  async executeUpdate(request: UpdateVehicleUseCaseRequest) {
    const { id, description, plate, price } = request;

     if (!id) {
      throw new Error('description is required.')
    }

     if (!description) {
      throw new Error('description is required.')
    }
     if (!plate) {
      throw new Error('plate is required.')
    }
    if (!price) {
      throw new Error('prince is required.')
    }

    await this.vehicleRepository.update({ id, description,plate, price})
  }
}