import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('deliveries')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.create(createDeliveryDto);
  }

  @Get('delivery-personnel/:deliveryPersonnelId')
  findByDeliveryPersonnel(@Param('deliveryPersonnelId') deliveryPersonnelId: string) {
    return this.deliveryService.findByDeliveryPersonnel(+deliveryPersonnelId);
  }

  @Put(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveryService.updateStatus(+id, updateDeliveryDto);
  }
}