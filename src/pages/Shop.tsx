import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const categories = ['all', ...Array.from(new Set(PRODUCTS.map(p => p.category.toLowerCase())))];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.toLowerCase() === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 min-h-screen">
      <div className="mb-24">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-harvest-green mb-4 leading-none">The 2026 Batch</p>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tightest leading-[0.85] mb-12 lowercase">the <span className="text-harvest-green italic font-medium">pantry.</span></h1>
        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] md:text-sm font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'text-harvest-green border-b-2 border-harvest-green pb-2' : 'text-zinc-400 hover:text-harvest-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-24">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="py-40 text-center text-zinc-400 font-medium lowercase px-6">
          <p className="text-4xl md:text-6xl font-black mb-8 opacity-10">Empty Fields.</p>
          <p className="text-lg">hum asli khana ugate hain, sapne nahi. (we grow real food, not concepts). Try searching for something that actually grows in dirt.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
