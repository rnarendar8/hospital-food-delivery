export class CreateDeliveryDto {
    taskId: number;
    deliveryPersonnelId: number;
    status: string; // "PENDING", "DELIVERED"
    deliveryTime?: Date;
    notes?: string;
  }