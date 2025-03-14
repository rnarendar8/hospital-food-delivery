import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';
  
  @Controller('tasks')
  export class TaskController {
    constructor(private taskService: TaskService) {}
  
    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
      return this.taskService.create(createTaskDto);
    }
  
    @Get('pantry-staff/:pantryStaffId')
    findByPantryStaff(@Param('pantryStaffId') pantryStaffId: string) {
      return this.taskService.findByPantryStaff(+pantryStaffId);
    }
  
    @Put(':id/status')
    updateStatus(
      @Param('id') id: string,
      @Body() updateTaskDto: UpdateTaskDto,
    ) {
      return this.taskService.updateStatus(+id, updateTaskDto);
    }
  }