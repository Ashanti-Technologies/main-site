import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--ashanti-blue-dark)] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ashanti Technologies</h3>
                        <p className="mb-4">Innovative IT Solutions for a Digital Future</p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-[var(--ashanti-blue-light)]">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-[var(--ashanti-blue-light)]">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-[var(--ashanti-blue-light)]">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-[var(--ashanti-blue-light)]">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-[var(--ashanti-blue-light)]">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[var(--ashanti-blue-light)]">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[var(--ashanti-blue-light)]">Services</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[var(--ashanti-blue-light)]">Contact</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-[var(--ashanti-blue-light)]">Blog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services#software" className="hover:text-[var(--ashanti-blue-light)]">Software Development</Link>
                            </li>
                            <li>
                                <Link href="/services#hardware" className="hover:text-[var(--ashanti-blue-light)]">Hardware & Networking</Link>
                            </li>
                            <li>
                                <Link href="/services#cloud" className="hover:text-[var(--ashanti-blue-light)]">Cloud Computing</Link>
                            </li>
                            <li>
                                <Link href="/services#consulting" className="hover:text-[var(--ashanti-blue-light)]">IT Consulting</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                <span>Amrahia, Greater Accra, Ghana</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                <span>Digital Address: GM-241-4206</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <a href="tel:+233559627280" className="hover:text-[var(--ashanti-blue-light)]">+233 559 627 280</a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <a href="mailto:admin@ashantitech.com" className="hover:text-[var(--ashanti-blue-light)]">admin@ashantitech.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[var(--ashanti-blue)] mt-8 pt-8 text-center">
                    <p>&copy; {currentYear} Ashanti Technologies LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 