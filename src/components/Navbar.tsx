import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="border-b border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-lg md:text-xl font-extrabold tracking-tightest lowercase flex items-center gap-2 group shrink-0">
            <span className="text-zinc-900 group-hover:text-harvest-green transition-colors">dalal.io</span>
            <div className="w-1.5 h-1.5 bg-harvest-green rounded-full animate-pulse" />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Shop', 'Cart', 'Home'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-xs font-semibold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-harvest-green underline underline-offset-4 decoration-2' : 'text-zinc-400 hover:text-harvest-green'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/cart" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-900 group">
            <span className="opacity-40 group-hover:opacity-100 transition-opacity">Bag</span>
            <span className="w-5 h-5 bg-harvest-green text-white text-[10px] flex items-center justify-center">
              {totalItems}
            </span>
          </Link>
          
          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black bg-white overflow-hidden"
          >
            <div className="p-8 flex flex-col space-y-8 lowercase">
              {['Shop', 'Cart', 'Home'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-extrabold tracking-tightest leading-none"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
