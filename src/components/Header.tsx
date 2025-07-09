import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className="absolute w-full z-50 transition-all duration-300"
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20">

        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-3 ml-10">
            D
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            VatVannaden
          </span>
        </motion.div>

        {/* Middle: Desktop nav */}
        <nav className="hidden lg:flex space-x-8 mr-10">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
                duration: 1,
              }}
              className="relative text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 group"
              href={`#${item.toLowerCase()}`}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right: Mobile toggle */}
        <div className="lg:hidden flex items-center mr-10">
          <motion.button
            whileTap={{ scale: 0.5 }}
            onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden flex flex-col items-center gap-4 bg-white dark:bg-gray-900 w-full py-5 rounded-b-lg"
          >
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                onClick={toggleMenu}
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
