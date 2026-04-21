import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-6 opacity-10">Jhola Khaali Hai</h1>
        <p className="text-lg md:text-xl font-medium mb-10 text-zinc-500 lowercase px-4">your bag is empty. your kitchen is judging you. thoda order karlo, mummy khush ho jayengi.</p>
        <Link
          to="/shop"
          className="inline-block bg-harvest-green text-white px-10 md:px-12 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-[6px_6px_0px_0px_rgba(45,74,58,0.2)]"
        >
          Khet se mangao
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tightest leading-none mb-12 md:mb-20 lowercase">your haul [0{cart.length}].</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-start space-x-6 md:space-x-8 py-8 md:py-10 border-b border-zinc-100 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-zinc-50 grayscale group-hover:grayscale-0 transition-all overflow-hidden mb-auto">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-start justify-between gap-4 md:gap-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tightest leading-none lowercase mb-2">{item.name}</h3>
                    <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.category}</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end space-x-0 sm:space-x-12 mt-4 sm:mt-0">
                    <div className="flex items-center space-x-4">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 -m-2 text-zinc-400 hover:text-harvest-green transition-colors"><Minus className="w-3 h-3" /></button>
                      <span className="font-mono text-xs w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 -m-2 text-zinc-400 hover:text-harvest-green transition-colors"><Plus className="w-3 h-3" /></button>
                    </div>

                    <p className="text-base font-bold tracking-tightest min-w-[80px] text-right">₹{(item.price * item.quantity * 80).toFixed(0)}</p>

                    <button onClick={() => removeFromCart(item.id)} className="p-2 -m-2 text-zinc-300 hover:text-red-500 transition-colors"><X className="w-4 h-4" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <div className="py-20">
             <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-harvest-green transition-colors">← continue browsing</Link>
          </div>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-32 h-fit bg-field-mist p-12 border border-zinc-100">
          <h2 className="text-xs font-black uppercase tracking-widest mb-10 text-harvest-green leading-none">Order Digest</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between text-sm lowercase font-medium text-zinc-500">
              <span>Subtotal</span>
              <span className="font-mono text-black">₹{(totalPrice * 80).toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm lowercase font-medium text-zinc-500">
              <span>Delivery</span>
              <span className="font-mono text-harvest-green">free</span>
            </div>
            <div className="h-px bg-zinc-200 my-8" />
            <div className="flex justify-between text-2xl font-extrabold tracking-tightest lowercase">
              <span>Total</span>
              <span className="font-mono text-harvest-green">₹{(totalPrice * 80).toFixed(0)}</span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="flex items-center justify-center w-full bg-harvest-green text-white px-8 h-16 text-sm font-bold uppercase tracking-widest mt-12 hover:bg-zinc-900 transition-all shadow-[8px_8px_0px_0px_rgba(45,74,58,0.2)]"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
