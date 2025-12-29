export interface Product {
  id: string;
  name: string;
  category: 'vegetable-powders' | 'fruit-powders' | 'dried-petals' | 'herbal-powders';
  categoryName: string;
  description: string;
  detailedDescription: string;
  image: string;
  specifications: {
    color: string;
    moistureContent: string;
    shelfLife: string;
    packagingType: string;
  };
  applications: string[];
  images: string[];
}

export interface CategoryPreview {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}
