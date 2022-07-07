
import {prisma} from '../../prisma'
import { VehicleCreateData, VehicleRepository, VehicleDeleteData, VehicleUpdateData} from '../vehicles-repositories'


export class PrismaVehicleRepositories implements VehicleRepository {
  async create({name,
  description,
  plate,
  color,
  price,
  year
  }: VehicleCreateData) {
   await prisma.vehicle.create({
      data: {
        name: name,
        description: description,
        plate: plate,
        color: color,
        price: price,
        year: year,
      }
   })  
 
  }
  async delete({id  
  }: VehicleDeleteData) {
    await prisma.vehicle.delete({
      where: {
        id: id,
      }
    })
  }
  async update({
    id,
  description,
  plate,
  price,

  }: VehicleUpdateData) {
    await prisma.vehicle.update({
      where: {
         id: id,      
      },
      data: {
         id: id,
        description: description,
        plate: plate,
        price: price,
      }
    })
  }  
  
}