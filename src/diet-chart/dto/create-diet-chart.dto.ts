export class CreateDietChartDto {
    patientId: number;
    morningMeal: string;
    afternoonMeal: string;
    nightMeal: string;
    ingredients: string;
    specialInstructions: string;
  }