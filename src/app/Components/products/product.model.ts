export interface Product {
  src: string;
  name: string;
  originalPrice: number; //small
  prices?: number[]; //0:originalPrice, 1:originalPrice + 10, 2:originalPrice + 15
  currentPrice?: number; //current selected price, based on sizeSelected property
  amount?: number;
  totalPrice?: number;
  sizeSelected?: number;
  isAddedToCart?: boolean;
  sugarSelected?: number;
}
