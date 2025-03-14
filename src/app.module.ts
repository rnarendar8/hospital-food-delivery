import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // Import AppController
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';
import { DietChartModule } from './diet-chart/diet-chart.module';
import { TaskModule } from './task/task.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [AuthModule, PrismaModule, PatientModule, DietChartModule, TaskModule, DeliveryModule],
  controllers: [AppController], // Add AppController here
})
export class AppModule {}