import HeroImg from './hero_img.webp'
import logo from './logo.png'
import productImage from './product-image.webp'
import salesNumImage from './salesImage.png'

import productDesign1 from './product-design1.jpg'
import productDesign2 from './product-design2.jpg'
import productDesign3 from './product-design3.jpg'
import type { BestSellingType } from './interface'
import { Info, Mail, MessageSquare, Package, type LucideIcon } from 'lucide-react'

export const assets = {
  HeroImg, logo, productImage, productDesign1, productDesign2, productDesign3, salesNumImage
}

// data/navigation.ts

export interface LinkType {
  id: string;
  path: string;
  icon: LucideIcon; // Correct type for Lucide components
}

export const navLinks: LinkType[] = [
  { id: 'About', path: 'about', icon: Info },
  { id: 'Products', path: 'products', icon: Package },
  { id: 'Reviews', path: 'reviews', icon: MessageSquare },
  { id: 'Contact', path: 'contact', icon: Mail },
];

export const webLink = 'https://beneathyourmask.com/';

export const bestSelling: BestSellingType = {
  'en': [
    {
      name: 'Beauty monthly set',
      rating: 4.5,
      currentPrice: 24.99,
      price: 34.99,
      description: 'A monthly subscription of premium beauty products',
      orderCount: 1250,
      image: productDesign1
    },
    {
      name: 'Mauve Lip balm',
      rating: 4.2,
      currentPrice: 6.99,
      price: 11.99,
      description: 'Moisturizing lip balm with a subtle mauve tint',
      orderCount: 890,
      image: productDesign2
    },
    {
      name: 'Crescent Lip stick',
      rating: 4.7,
      currentPrice: 11.99,
      price: 19.99,
      description: 'Long-lasting lipstick with a creamy crescent-shaped applicator',
      orderCount: 2100,
      image: productDesign3
    }
  ],
  'fr': [
    {
      name: 'Kit mensuel beauté',
      rating: 4.5,
      currentPrice: 24.99,
      price: 34.99,
      description: 'Un abonnement mensuel de produits de beauté premium',
      orderCount: 1250,
      image: productDesign1
    },
    {
      name: 'Baume à lèvres mauve',
      rating: 4.2,
      currentPrice: 6.99,
      price: 11.99,
      description: 'Baume à lèvres hydratant avec une teinte mauve subtile',
      orderCount: 890,
      image: productDesign2
    },
    {
      name: 'Rouge à lèvres Croissant',
      rating: 4.7,
      currentPrice: 11.99,
      price: 19.99,
      description: 'Rouge à lèvres longue durée avec applicateur en forme de croissant',
      orderCount: 2100,
      image: productDesign3
    }
  ],
  'es': [
    {
      name: 'Kit mensual de belleza',
      rating: 4.5,
      currentPrice: 24.99,
      price: 34.99,
      description: 'Una suscripción mensual de productos de belleza premium',
      orderCount: 1250,
      image: productDesign1
    },
    {
      name: 'Bálsamo labial malva',
      rating: 4.2,
      currentPrice: 6.99,
      price: 11.99,
      description: 'Bálsamo labial hidratante con un tono malva sutil',
      orderCount: 890,
      image: productDesign2
    },
    {
      name: 'Lápiz labial Media luna',
      rating: 4.7,
      currentPrice: 11.99,
      price: 19.99,
      description: 'Lápiz labial de larga duración con aplicador en forma de media luna',
      orderCount: 2100,
      image: productDesign3
    }
  ]
}