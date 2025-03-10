'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation items with their paths
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];

    // Function to check if a route is active
    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image src="/logo.svg" alt="Ashanti Technologies Logo" width={150} height={40} priority />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "px-3 py-2 font-medium transition-colors relative",
                                    isActive(item.path)
                                        ? "text-[var(--ashanti-blue)] font-semibold"
                                        : "text-gray-700 hover:text-[var(--ashanti-blue)]"
                                )}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <span className="absolute bottom-0 left-0 w-full h-[var(--nav-indicator-height)] bg-[var(--ashanti-blue)]"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--ashanti-blue)] focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "block px-3 py-2 font-medium relative",
                                isActive(item.path)
                                    ? "text-[var(--ashanti-blue)] font-semibold"
                                    : "text-gray-700 hover:text-[var(--ashanti-blue)]"
                            )}
                        >
                            {item.name}
                            {isActive(item.path) && (
                                <span className="absolute left-0 w-1 h-full bg-[var(--ashanti-blue)] rounded-r-md"></span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 