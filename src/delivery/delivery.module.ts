import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [PrismaModule], // Add PrismaModule here
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}