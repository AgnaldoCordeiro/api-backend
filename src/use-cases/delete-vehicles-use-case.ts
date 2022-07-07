import { VehicleRepository } from '../repositories/vehicles-repositories'

interface DeleteVehicleUseCaseRequest {
  id: number
}

export class DeleteVehicleUseCase{
  constructor(
    private vehicleRepository: VehicleRepository
  ) { }
  
  async executeDelete(request: DeleteVehicleUseCaseRequest) {
    const { id } = request;

    if (!id) {
      throw new Error('id is required.')
    }

    await this.vehicleRepository.delete({id})

  }
}