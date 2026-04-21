import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Long-Grain Aged Basmati',
    price: 18,
    description: 'Aromatic, extra-long grain rice harvested from our foothills farm. Aged for 12 months for peak texture.',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Grains',
    details: [
      '12-month aged',
      'Low Glycemic Index',
      'Naturally Aromatic',
      'Sustainably Farmed'
    ]
  },
  {
    id: '2',
    name: 'Stone-Ground Khapli Wheat',
    price: 12,
    description: 'Heirloom Emmer wheat variety, slow-milled on traditional stone chakkis to preserve nutrients.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Flour',
    details: [
      'Stone-ground (Chakki)',
      'High Fiber content',
      'Heirloom variety',
      'Zero Preservatives'
    ]
  },
  {
    id: '3',
    name: 'Lakadong Turmeric Powder',
    price: 15,
    description: 'Potent turmeric with 7-9% curcumin content, sourced from the hills and sun-dried.',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Spices',
    details: [
      'High Curcumin content',
      'Deep Saffron color',
      'Single-origin harvest',
      'No added fillers'
    ]
  },
  {
    id: '4',
    name: 'A2 Desi Cow Ghee',
    price: 45,
    description: 'Traditional Bilona process ghee made from the milk of grass-fed indigenous cows.',
    image: 'https://images.unsplash.com/photo-1631709497146-a239ef573ae5?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Dairy',
    details: [
      'Bilona method',
      'Grass-fed A2 milk',
      'Golden granular texture',
      'Glass jar packaging'
    ]
  },
  {
    id: '5',
    name: 'Cold-Pressed Mustard Oil',
    price: 22,
    description: 'Kachi Ghani mustard oil extracted at low temperatures to retain its bold, pungent flavor.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacabc88c5?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Staples',
    details: [
      'Cold-pressed (Kachi Ghani)',
      'Pure Mustard seed extract',
      'Bold pungency',
      'Heart-healthy fats'
    ]
  },
  {
    id: '6',
    name: 'Unpolished Arhar Dal',
    price: 10,
    description: 'Protein-rich Pigeon Peas, naturally dried and left unpolished to maintain the outer husk benefits.',
    image: 'https://images.unsplash.com/photo-1585994098868-3c35157d648a?auto=format&fit=crop&q=80&w=800&h=800',
    category: 'Pulses',
    details: [
      'Unpolished/Natural',
      'Protein rich',
      'Pesticide-free growth',
      'Easy to cook'
    ]
  }
];
