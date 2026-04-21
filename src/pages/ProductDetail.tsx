import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import { useCart } from '../CartContext';
import { ArrowLeft, Check, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, updateQuantity, cart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);
  const cartItem = cart.find(item => item.id === id);

  if (!product) return <div className="p-20 text-center font-bold uppercase tracking-widest text-zinc-400">Crop not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
      <Link to="/shop" className="inline-flex items-center space-x-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 md:mb-16 hover:text-harvest-green transition-colors">
        <ArrowLeft className="w-4 h-4" />
        <span>back to harvest list</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
        {/* Visual Column */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square bg-field-mist flex items-center justify-center grayscale overflow-hidden group border border-zinc-100"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2">
            <span className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-widest lowercase">honest labor</span>
            <span className="px-3 py-1 bg-harvest-green text-white text-[10px] font-black uppercase tracking-widest lowercase">actual food</span>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="flex flex-col">
          <header className="mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-harvest-green mb-6 block leading-none">
              {product.category} // batch #0{product.id}
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tightest lowercase mb-8 leading-[0.85] text-zinc-900">
              {product.name}
            </h1>
            <p className="text-3xl md:text-4xl font-mono tracking-tighter text-harvest-green">₹{product.price * 80}</p>
          </header>

          <p className="text-lg md:text-xl text-zinc-500 font-medium lowercase leading-relaxed mb-12 md:mb-16 max-w-lg">
            {product.description} definitely better than that plastic-wrapped stuff from the supermarket that doesn't rot for three years.
          </p>

          <div className="space-y-10 md:space-y-12 mb-16 md:mb-20">
            {/* Farmer's Insight */}
            <div className="bg-sprout p-8 md:p-10 border-l-4 border-harvest-green">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-harvest-green mb-6 flex items-center gap-2">
                <span className="text-lg">🌿</span> Farmer's Wisdom
              </h3>
              <p className="text-sm font-medium leading-relaxed italic text-harvest-green/80 lowercase">
                "we stone-grind this crop at dawn because machines have no soul. the low temperature ensures the natural oils stay intact. your body will thank you, eventually."
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-8 text-zinc-900 border-b border-zinc-100 pb-4">Ancestral Specs</h3>
              <ul className="grid grid-cols-2 gap-x-12 gap-y-6">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm lowercase font-medium text-zinc-500">
                    <Check className="w-4 h-4 text-harvest-green shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-auto">
            {cartItem ? (
              <div className="flex items-center border-2 border-harvest-green h-20 w-full sm:w-64 bg-white">
                <button onClick={() => updateQuantity(product.id, cartItem.quantity - 1)} className="flex-1 h-full flex items-center justify-center hover:bg-sprout transition-colors"><Minus className="w-5 h-5 text-harvest-green" /></button>
                <span className="flex-1 text-center font-mono text-xl text-harvest-green">{cartItem.quantity}</span>
                <button onClick={() => updateQuantity(product.id, cartItem.quantity + 1)} className="flex-1 h-full flex items-center justify-center hover:bg-sprout transition-colors"><Plus className="w-5 h-5 text-harvest-green" /></button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(product)}
                className="bg-harvest-green text-white px-12 h-20 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all flex-1 shadow-[8px_8px_0px_0px_rgba(45,74,58,0.2)]"
              >
                Reserve the Harvest
              </button>
            )}
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-300 ml-8 max-w-[120px] leading-tight">
              harvested mar '26 limited batch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
