export class CreateTaskDto {
    pantryStaffId: number;
    dietChartId: number;
    status: string; // "PENDING", "IN_PROGRESS", "COMPLETED"
  }