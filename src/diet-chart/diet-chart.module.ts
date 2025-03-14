import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule
import { DietChartController } from './diet-chart.controller';
import { DietChartService } from './diet-chart.service';

@Module({
  imports: [PrismaModule], // Add PrismaModule here
  controllers: [DietChartController],
  providers: [DietChartService],
})
export class DietChartModule {}