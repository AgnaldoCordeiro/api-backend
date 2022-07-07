import { Request, Response } from 'express';
import { prisma } from '../prisma';

export class FindVehiclesUseCase {
  async executeFind(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);   
    const vehicles = await prisma.vehicle.findUnique({
      where: { 
        id      
      },
    })     
    return res.json(vehicles)
  }
   async executeFindAll(req: Request, res: Response) {     
    const vehiclesAll = await prisma.vehicle.findMany()         
    return res.json(vehiclesAll)
  }
   
 }
