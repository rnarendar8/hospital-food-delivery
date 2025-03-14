import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDietChartDto } from './dto/create-diet-chart.dto';
import { UpdateDietChartDto } from './dto/update-diet-chart.dto';

@Injectable()
export class DietChartService {
  constructor(private prisma: PrismaService) {}

  async create(createDietChartDto: CreateDietChartDto) {
    return this.prisma.dietChart.create({
      data: createDietChartDto,
    });
  }

  async findOne(id: number) {
    return this.prisma.dietChart.findUnique({
      where: { id },
    });
  }

  async findByPatient(patientId: number) {
    return this.prisma.dietChart.findMany({
      where: { patientId },
    });
  }

  async update(id: number, updateDietChartDto: UpdateDietChartDto) {
    return this.prisma.dietChart.update({
      where: { id },
      data: updateDietChartDto,
    });
  }

  async remove(id: number) {
    return this.prisma.dietChart.delete({
      where: { id },
    });
  }
}