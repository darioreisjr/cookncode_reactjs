export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  category: string;
  author: string;
  createdAt: string;
  price: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CartItem {
  id: string;
  recipe: Recipe;
  quantity: number;
}
