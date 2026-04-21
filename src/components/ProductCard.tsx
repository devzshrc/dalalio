import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion } from 'motion/react';

const ProductCard = ({ product }: { product: Product, key?: string }) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="aspect-square bg-zinc-50 mb-6 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="text-xl font-bold tracking-tightest lowercase line-clamp-1">{product.name}</h3>
          <span className="text-sm font-mono tracking-tighter shrink-0">₹{product.price * 80}</span>
        </div>
        <p className="text-sm text-zinc-400 lowercase leading-relaxed flex justify-between items-center">
          <span>{product.category}</span>
          <span className="text-[10px] uppercase font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-harvest-green">add to bag +</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
