export type BestSellingType = {
  en: Products[];
  fr: Products[];
  es: Products[];
};

export interface Products {
  name: string;
  rating: number;
  currentPrice: number;
  description: string;
  orderCount: number;
  price: number;

  image: string; // Added image property
} 