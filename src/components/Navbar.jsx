import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import DarkModeToggle from './DarkModeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const observerRef = useRef(null);
  const navRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active link detection
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50px 0px -40% 0px', // Adjust for navbar height
        threshold: 0.5
      }
    );

    // Observe all sections with IDs
    document.querySelectorAll('section[id]').forEach(section => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Calculate navbar height for scroll offset
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--nav-height', `${height}px`);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'skills', name: 'Skills' },
    { id: 'services', name: 'Services' },
    { id: 'work', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
    
    // Scroll to section after a small delay to allow menu to close
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = navRef.current?.offsetHeight || 0;
        const offsetPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <>
      {/* Add global CSS for scroll padding */}
      <style>
        {`
          html {
            scroll-padding-top: var(--nav-height, 4rem);
          }
        `}
      </style>
      
      <motion.nav 
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
              >
                <AnchorLink 
                  href="#home" 
                  onClick={() => handleLinkClick('home')}
                  offset={() => navRef.current?.offsetHeight || 0}
                >
                  Fahad Khan
                </AnchorLink>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navLinks.map((link) => (
                  <AnchorLink 
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    offset={() => navRef.current?.offsetHeight || 0}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                      activeLink === link.id 
                        ? 'text-blue-600 dark:text-cyan-400' 
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                    {activeLink === link.id && (
                      <motion.div 
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-cyan-500"
                        layoutId="navbar-underline"
                      />
                    )}
                  </AnchorLink>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <DarkModeToggle />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <AnchorLink 
                  href="#contact"
                  onClick={() => handleLinkClick('contact')}
                  offset={() => navRef.current?.offsetHeight || 0}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-md"
                >
                  Hire Me
                </AnchorLink>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <DarkModeToggle />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                      activeLink === link.id 
                        ? 'text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-gray-800' 
                        : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;