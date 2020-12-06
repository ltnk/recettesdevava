export interface Recipe {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
  ingredients: string[];
  utensils: string[];
  steps: string[];
}
