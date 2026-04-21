import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSuccess(true);
      clearCart();
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-40 text-center">
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="mb-12 inline-block w-full"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-900 flex items-center justify-center text-white mb-8 mx-auto">
            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tightest leading-none mb-6 lowercase">Order Book ho gaya!</h1>
          <p className="text-lg md:text-xl text-zinc-500 font-medium lowercase mb-12 max-w-md mx-auto">we've received your request. One small click for you, one giant leap for your gut health. We're packing now. Ab thoda sabar rakho.</p>
          <Link to="/" className="inline-block bg-zinc-900 text-white px-10 md:px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">Ghar Chalo (Home)</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Progress Display */}
        <div className="mb-8 lg:mb-16">
          <div className="flex items-center gap-6 md:gap-12 mb-12 md:mb-20 text-[10px] md:text-xs font-black uppercase tracking-widest leading-none overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <span className={`whitespace-nowrap ${step === 1 ? 'text-harvest-green border-b-2 border-harvest-green pb-1' : 'text-zinc-300'}`}>01 Shipping</span>
            <span className={`whitespace-nowrap ${step === 2 ? 'text-harvest-green border-b-2 border-harvest-green pb-1' : 'text-zinc-300'}`}>02 Payment</span>
            <span className={`whitespace-nowrap ${step === 3 ? 'text-harvest-green border-b-2 border-harvest-green pb-1' : 'text-zinc-300'}`}>03 Confirm</span>
          </div>

          <form onSubmit={handleNextStep}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest leading-none lowercase mb-10 md:mb-12">shipping records.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <input type="text" placeholder="First name" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
                    <input type="text" placeholder="Last name" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
                  </div>
                  <input type="email" placeholder="Email address" required className="w-full border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input type="text" placeholder="Address" required className="w-full border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, address: e.target.value})} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <input type="text" placeholder="City" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, city: e.target.value})} />
                    <input type="text" placeholder="ZIP code" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" onChange={(e) => setFormData({...formData, zipCode: e.target.value})} />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest leading-none lowercase mb-10 md:mb-12">payment details.</h2>
                  <input type="text" placeholder="Card number" required className="w-full border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <input type="text" placeholder="MM/YY" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" />
                    <input type="text" placeholder="CVC" required className="border-b border-zinc-200 py-4 focus:border-zinc-900 outline-none text-sm font-medium lowercase bg-transparent" />
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                   <h2 className="text-3xl font-extrabold tracking-tightest leading-none lowercase mb-12">verify order.</h2>
                   <div className="bg-zinc-50 p-12 text-sm leading-relaxed lowercase font-medium text-zinc-500">
                     <p>{formData.firstName} {formData.lastName}</p>
                     <p>{formData.address}</p>
                     <p>{formData.city}, {formData.zipCode}</p>
                     <p>{formData.email}</p>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-20">
              <button
                type="submit"
                className="w-full bg-harvest-green text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-[8px_8px_0px_0px_rgba(45,74,58,0.2)]"
              >
                {step === 3 ? 'place order' : 'next step'}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar Mini Cart */}
        <div className="lg:sticky lg:top-32 h-fit space-y-12 bg-field-mist p-10 border border-zinc-100">
          <h2 className="text-xs font-black uppercase tracking-widest text-harvest-green leading-none">Order Capsule</h2>
          <div className="space-y-8 max-h-[300px] overflow-auto px-1">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm font-medium lowercase">
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">x{item.quantity}</span>
                  <span className="text-zinc-600 truncate max-w-[150px] font-bold">{item.name}</span>
                </div>
                <span className="font-mono text-zinc-900">₹{(item.price * item.quantity * 80).toFixed(0)}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-zinc-100 space-y-4 text-zinc-500">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
              <span>Subtotal</span>
              <span className="font-mono text-zinc-900">₹{(totalPrice * 80).toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
              <span>Shipping</span>
              <span className="font-mono text-harvest-green">₹0</span>
            </div>
            <div className="flex justify-between text-2xl font-extrabold tracking-tightest lowercase pt-6 border-t border-zinc-100 text-zinc-900">
              <span>Total</span>
              <span className="font-mono text-harvest-green">₹{(totalPrice * 80).toFixed(0)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
