import { Product, CategoryPreview } from '../types/product';

export const products: Product[] = [
  {
    id: 'tomato-powder',
    name: 'Tomato Powder',
    category: 'vegetable-powders',
    categoryName: 'Vegetable Powders',
    description: 'Premium quality dehydrated tomato powder with natural flavor and rich color.',
    detailedDescription: 'Our tomato powder is made from carefully selected fresh tomatoes that undergo a controlled dehydration process to retain maximum nutrients and natural flavor. Perfect for instant soups, sauces, and food processing applications.',
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Red to Dark Red',
      moistureContent: '3-5%',
      shelfLife: '12 months',
      packagingType: 'HDPE bags / Customized',
    },
    applications: ['Food Processing', 'Instant Soups', 'Sauces & Ketchup', 'Ready-to-eat Meals'],
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'vegetable-powders',
    categoryName: 'Vegetable Powders',
    description: 'Natural beetroot powder rich in nutrients and vibrant color.',
    detailedDescription: 'Our beetroot powder is produced from premium quality beetroots using advanced dehydration technology. It retains the natural sweetness, vibrant color, and nutritional benefits of fresh beetroot, making it ideal for health supplements and food coloring.',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Deep Purple to Red',
      moistureContent: '4-6%',
      shelfLife: '12 months',
      packagingType: 'Food-grade bags',
    },
    applications: ['Health Supplements', 'Natural Food Coloring', 'Beverages', 'Bakery Products'],
  },
  {
    id: 'carrot-powder',
    name: 'Carrot Powder',
    category: 'vegetable-powders',
    categoryName: 'Vegetable Powders',
    description: 'High-quality carrot powder packed with beta-carotene and natural sweetness.',
    detailedDescription: 'Our carrot powder is manufactured from fresh, carefully selected carrots. The dehydration process preserves the natural beta-carotene content, making it an excellent ingredient for nutritional supplements, baby foods, and various food products.',
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Orange',
      moistureContent: '3-5%',
      shelfLife: '12 months',
      packagingType: 'Aluminum pouches / Bulk packaging',
    },
    applications: ['Baby Food', 'Nutraceuticals', 'Soup Mixes', 'Bakery & Confectionery'],
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'fruit-powders',
    categoryName: 'Fruit Powders',
    description: 'Pure banana powder with natural sweetness and aroma.',
    detailedDescription: 'Our premium banana powder is made from ripe bananas that are carefully processed to maintain natural flavor and nutritional value. Rich in potassium and dietary fiber, it is perfect for baby foods, smoothies, and health drinks.',
    image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5945829/pexels-photo-5945829.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Light Yellow to Cream',
      moistureContent: '3-4%',
      shelfLife: '12 months',
      packagingType: 'Moisture-proof packaging',
    },
    applications: ['Baby Food', 'Health Drinks', 'Smoothies', 'Ice Cream & Desserts'],
  },
  {
    id: 'papaya-powder',
    name: 'Papaya Powder',
    category: 'fruit-powders',
    categoryName: 'Fruit Powders',
    description: 'Enzyme-rich papaya powder with natural digestive benefits.',
    detailedDescription: 'Our papaya powder is manufactured from premium quality papayas, rich in papain enzyme. It offers excellent digestive benefits and is widely used in pharmaceutical, cosmetic, and food industries.',
    image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5945665/pexels-photo-5945665.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Light Orange',
      moistureContent: '4-5%',
      shelfLife: '12 months',
      packagingType: 'HDPE bags',
    },
    applications: ['Digestive Supplements', 'Cosmetics', 'Meat Tenderizers', 'Health Foods'],
  },
  {
    id: 'mango-powder',
    name: 'Mango Powder',
    category: 'fruit-powders',
    categoryName: 'Fruit Powders',
    description: 'Tangy mango powder with authentic flavor and aroma.',
    detailedDescription: 'Our mango powder is prepared from selected varieties of mangoes, offering a perfect balance of sweetness and tanginess. It is an excellent flavoring agent for beverages, confectionery, and culinary applications.',
    image: 'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Yellow to Light Brown',
      moistureContent: '3-5%',
      shelfLife: '12 months',
      packagingType: 'Food-grade packaging',
    },
    applications: ['Beverages', 'Confectionery', 'Culinary Mixes', 'Ice Cream Flavoring'],
  },
  {
    id: 'rose-petals',
    name: 'Dried Rose Petals',
    category: 'dried-petals',
    categoryName: 'Dried Petals',
    description: 'Premium quality dried rose petals with natural fragrance.',
    detailedDescription: 'Our dried rose petals are carefully sourced and processed to retain their natural color, aroma, and beneficial properties. Perfect for cosmetics, herbal teas, and decorative purposes.',
    image: 'https://images.pexels.com/photos/1266166/pexels-photo-1266166.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1266166/pexels-photo-1266166.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Pink to Deep Red',
      moistureContent: '8-10%',
      shelfLife: '12 months',
      packagingType: 'Air-tight containers',
    },
    applications: ['Cosmetics', 'Herbal Teas', 'Aromatherapy', 'Decorative Purposes'],
  },
  {
    id: 'marigold-petals',
    name: 'Dried Marigold Petals',
    category: 'dried-petals',
    categoryName: 'Dried Petals',
    description: 'Vibrant dried marigold petals for various applications.',
    detailedDescription: 'Our marigold petals are harvested at peak freshness and carefully dried to preserve their vibrant color and beneficial compounds. Widely used in natural dyes, herbal preparations, and decorative applications.',
    image: 'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=600',
    images: [
      'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/56866/garden-flowers-butterflies-summer-yellow-56866.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    specifications: {
      color: 'Golden Yellow to Orange',
      moistureContent: '8-12%',
      shelfLife: '12 months',
      packagingType: 'Moisture-proof bags',
    },
    applications: ['Natural Dyes', 'Herbal Medicines', 'Food Coloring', 'Religious Ceremonies'],
  },
];

export const categoryPreviews: CategoryPreview[] = [
  {
    id: 'vegetable-powders',
    name: 'Vegetable Powders',
    description: 'Premium dehydrated vegetable powders for diverse applications',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/products?category=vegetable-powders',
  },
  {
    id: 'fruit-powders',
    name: 'Fruit Powders',
    description: 'Natural fruit powders with authentic flavor and nutrients',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/products?category=fruit-powders',
  },
  {
    id: 'dried-petals',
    name: 'Dried Petals',
    description: 'Carefully dried flower petals for multiple uses',
    image: 'https://images.pexels.com/photos/1266166/pexels-photo-1266166.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/products?category=dried-petals',
  },
  {
    id: 'herbal-powders',
    name: 'Herbal Powders',
    description: 'Pure herbal powders for wellness and traditional medicine',
    image: 'https://images.pexels.com/photos/4198840/pexels-photo-4198840.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/products?category=herbal-powders',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
