import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const JOKES = [
  "Why did the scarecrow win an award? Because he was outstanding in his field... aur padosi kisaan jal rahe the.",
  "What do you call a cow that plays an instrument? A moo-sician... bilkul besuri!",
  "How do farmers party? They turnip the beet... aur fir 'shava shava' shuru!",
  "Tomato laal kyun hua? Salad dressing dekh kar... bechara sharam se paani-paani ho gaya.",
  "Kisaan ka favorite computer brand? Dell? Nahi, 'Khet' (Get it? No? Thik hai.)"
];

const WISDOM = [
  "the early bird gets the worm, par early kisaan gets 'tractor stuck in keechad'.",
  "soil is not dirt, beta. dirt toh startup ideas mein hai. soil toh sona hai.",
  "green thumb matlab farm mastery... ya fir haldi wala haath jo dhoya nahi.",
  "farming is gambling with dirt... par jackpot hamesha kudrat ka hota hai."
];

const Home = () => {
  const featured = PRODUCTS.slice(0, 3);
  const [jokeIndex, setJokeIndex] = useState(0);

  const nextJoke = () => setJokeIndex((prev) => (prev + 1) % JOKES.length);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-sprout text-harvest-green text-[10px] font-black uppercase tracking-widest mb-10 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-harvest-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-harvest-green"></span>
            </span>
            Direct Bharat Harvest
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tightest leading-none md:leading-[0.8] mb-10 md:mb-12 lowercase text-zinc-900">
            pure <br /> <span className="text-harvest-green italic font-medium">prasad</span> <br /> harvest.
          </h1>
          <p className="text-lg md:text-2xl text-zinc-500 font-medium lowercase leading-relaxed mb-16 max-w-2xl">
            unadulterated farm staples. no middlemen. no chemicals. just the honesty of the indian soil, delivered directly from our family farm to your kitchen.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/shop"
              className="bg-harvest-green text-white px-10 md:px-12 py-5 md:py-6 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-[8px_8px_0px_0px_rgba(45,74,58,0.2)]"
            >
              browse the khet
            </Link>
            <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-400">
              <span className="w-6 md:w-8 h-px bg-zinc-200" />
              100% natural traceability
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-4 hidden lg:block relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="aspect-[4/5] bg-field-mist relative group"
           >
              <img 
                src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Farmer" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
              />
              <div className="absolute -bottom-8 lg:-left-8 left-0 lg:right-auto right-0 bg-zinc-900 text-white p-6 lg:p-8 max-w-full lg:max-w-[200px]">
                <p className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-2">Farmer's Note</p>
                <p className="text-xs font-medium lowercase leading-relaxed">"hum beej ko legacy mante hain. This is not business, it's sustenance... samajh rahe ho?"</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Trust Badges - Crucial for Indian Market */}
      <section className="mb-24 md:mb-40 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {[
          { label: "zero chemicals", sub: "because we actually like our soil" },
          { label: "stone ground", sub: "chakki milling, not industrial dust" },
          { label: "zero middlemen", sub: "they were blocking our tractor" },
          { label: "bharat grown", sub: "supporting soil, not silicon valley" }
        ].map((badge, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="border border-zinc-100 p-6 md:p-8 flex flex-col items-center text-center group bg-white hover:bg-field-mist transition-colors"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 border border-harvest-green/20 rotate-45 mb-6 flex items-center justify-center group-hover:bg-harvest-green group-hover:text-white transition-all">
              <span className="text-xs font-black rotate-[-45deg]">{i+1}</span>
            </div>
            <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">{badge.label}</h3>
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest lowercase">{badge.sub}</p>
          </motion.div>
        ))}
      </section>

      {/* Interactive Joke Section */}
      <section className="mb-24 md:mb-40 bg-field-mist p-8 md:p-20 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-sprout -mr-12 -mt-12 rotate-12 transition-transform group-hover:rotate-45" />
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🚜</span>
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-harvest-green">the farmer's break time.</h2>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={jokeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tightest leading-tight lowercase mb-12 text-harvest-green"
            >
              "{JOKES[jokeIndex]}"
            </motion.p>
          </AnimatePresence>
          <button 
            onClick={nextJoke}
            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-harvest-green"
          >
            <span className="border-b-2 border-harvest-green pb-1">Ek aur sunao? (Another one?)</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Seasonal Grid */}
      <section className="mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 border-b border-zinc-100 pb-12 gap-8">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-harvest-green mb-4">Summer 2026 Batch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tightest lowercase italic">the farm's best.</h3>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-harvest-green transition-colors flex items-center gap-3">
             [view entire bag]
             <span className="w-8 h-px bg-zinc-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Section - Building Trust (Indian Mindset) */}
      <section className="bg-zinc-900 text-white p-8 md:p-32 mb-24 md:mb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000&h=1000" alt="Fields" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl relative z-10">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-12 text-sprout opacity-60">our story // hamari kahani</h3>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tightest leading-tight lowercase mb-12">
            we are <span className="text-sprout italic font-medium">farmers</span> first, dalals later.
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 font-medium lowercase leading-relaxed mb-16">
            for three generations, our family has tilled the soil of the gangetic plains. 
            dalal.io was born out of frustration—watching industrial processing kill the soul of our crops. 
            by shipping directly to you, we ensure that the wheat you eat actually tastes like wheat.
          </p>
          <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-zinc-800 pt-16">
            <div>
              <p className="text-3xl md:text-4xl font-mono text-sprout mb-2">350+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 lowercase">acres of chemical-free soil</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-mono text-sprout mb-2">12k+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 lowercase">healthy households served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Values Table */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 py-24 border-t border-zinc-100 text-zinc-400">
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-harvest-green transition-opacity">01 / traceable</h3>
          <p className="text-lg leading-relaxed lowercase font-medium">scan the batch code. see the plot. see the farmer. see everything except a middleman.</p>
        </div>
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-harvest-green">02 / pure</h3>
          <p className="text-lg leading-relaxed lowercase font-medium">cold-pressed. stone-milled. basically, we did it the slow way because your health isn't a race.</p>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="space-y-6 bg-sprout p-8 text-harvest-green border-2 border-harvest-green/10"
        >
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-harvest-green mb-4"># farm sass</h3>
          <p className="text-lg leading-relaxed lowercase font-bold">"{WISDOM[Math.floor(Math.random() * WISDOM.length)]}"</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
