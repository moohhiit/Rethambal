import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { WebName } from '../../info';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
                }`}
            style={{backgroundColor:
                "black"
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                        style={{height:40 , width:40 , alignSelf:'center'}}
                            src='https://res.cloudinary.com/doytvgisa/image/upload/v1761199685/Frame_2_2_eizq6p.png'
                        ></img>
                        <div style={{fontSize:30 , color:'white'}} >

                       {WebName}
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-md transition-colors relative ${location.pathname === link.path
                                        ? 'text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"

                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="md:hidden bg-white border-t"
                        style={{backgroundColor:'black'}}
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block px-4 py-2 rounded-md ${location.pathname === link.path
                                                ? 'bg-indigo-50 text-indigo-600'
                                                : 'text-white-700 hover:bg-gray-50'
                                            }`}

                                        style={{color:location.pathname === link.path?"Black" : 'white'}}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}