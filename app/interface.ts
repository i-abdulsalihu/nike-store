export interface productTypes {
  _id: string;
  images: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

export interface simplifiedProductTypes {
  _id: string;
  imageUrl: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface CartTypes {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}
