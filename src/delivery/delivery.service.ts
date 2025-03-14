import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveryService {
  constructor(private prisma: PrismaService) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    return this.prisma.delivery.create({
      data: createDeliveryDto,
    });
  }

  async findByDeliveryPersonnel(deliveryPersonnelId: number) {
    return this.prisma.delivery.findMany({
      where: { deliveryPersonnelId },
    });
  }

  async updateStatus(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return this.prisma.delivery.update({
      where: { id },
      data: { status: updateDeliveryDto.status },
    });
  }
}