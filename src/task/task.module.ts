import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [PrismaModule], // Add PrismaModule here
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}