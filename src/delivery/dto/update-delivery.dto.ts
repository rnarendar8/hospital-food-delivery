export class UpdateDeliveryDto {
    status: string; // "PENDING", "DELIVERED"
    deliveryTime?: Date;
    notes?: string;
  }