import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { DietChartService } from './diet-chart.service';
import { CreateDietChartDto } from './dto/create-diet-chart.dto';
import { UpdateDietChartDto } from './dto/update-diet-chart.dto';
  
  @Controller('diet-charts')
  export class DietChartController {
    constructor(private readonly dietChartService: DietChartService) {}
  
    @Post()
    create(@Body() createDietChartDto: CreateDietChartDto) {
      return this.dietChartService.create(createDietChartDto);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.dietChartService.findOne(+id);
    }
  
    @Get('patient/:patientId')
    findByPatient(@Param('patientId') patientId: string) {
      return this.dietChartService.findByPatient(+patientId);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateDietChartDto: UpdateDietChartDto,
    ) {
      return this.dietChartService.update(+id, updateDietChartDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.dietChartService.remove(+id);
    }
  }