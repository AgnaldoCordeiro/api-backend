import express from 'express'
import {PrismaVehicleRepositories} from './repositories/prisma/prisma-vehicles-repository'
import { DeleteVehicleUseCase } from './use-cases/delete-vehicles-use-case';
import { FindVehiclesUseCase } from './use-cases/findVehicles-use-case';
import { SubmitVehicleUseCase } from './use-cases/submit-vehicles-use-case';
import { UpdateVehicleUseCase } from './use-cases/update-vehicles-use-case';

export const routes = express.Router()

routes.post('/vehicles', async (req, res) => {
  const { name, description, plate, color, price, year } = req.body;

  const prismaVehicleRepository = new PrismaVehicleRepositories()
  const submitVehicleUseCase = new SubmitVehicleUseCase(prismaVehicleRepository)

  await submitVehicleUseCase.execute({
    name, description, plate, color, price, year
  })

  return res.status(201).send()

})

routes.put('/vehicles', async (req, res) => {
  const { id, description, plate, price } = req.body;

  const prismaVehicleRepository = new PrismaVehicleRepositories()
  const  updateVehicleUseCase = new UpdateVehicleUseCase(prismaVehicleRepository)

  await updateVehicleUseCase.executeUpdate({
  id,
  description,
  plate,
  price,
  })

  return res.status(201).send()

})

routes.delete('/vehicles', async (req, res) => {
  const { id } = req.body;

  const prismaVehicleRepository = new PrismaVehicleRepositories()
  const  deleteVehicleUseCase = new DeleteVehicleUseCase(prismaVehicleRepository)

  await deleteVehicleUseCase.executeDelete({
  id, 
  })

  return res.status(201).send()

})

const findVehicleUseCase = new FindVehiclesUseCase()
routes.get('/vehicles/', findVehicleUseCase.executeFindAll)
routes.get('/vehicles/:id', findVehicleUseCase.executeFind)

