'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StaggeredContainer, { StaggeredItem } from '@/components/ui/StaggeredContainer';
import HoverCard from '@/components/ui/HoverCard';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        // Simulate form submission
        try {
            // Replace with actual form submission logic
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.log(error)
            setSubmitError('There was an error submitting your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="bg-blue-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                            <p className="text-xl max-w-3xl mx-auto">
                                Get in touch with our team to discuss how we can help with your IT needs.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We&apos;re here to answer any questions you may have about our services.
                            </p>
                        </AnimatedSection>

                        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg text-center h-full">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <Phone className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Phone</h3>
                                    <p className="text-gray-700 mb-2">+233 559 627 280</p>
                                    <p className="text-gray-700">Monday - Friday, 9am - 5pm</p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg text-center h-full">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <Mail className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Email</h3>
                                    <p className="text-gray-700 mb-2">admin@ashantitech.com</p>
                                    <p className="text-gray-700">We&apos;ll respond as soon as possible</p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg text-center h-full">
                                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <MapPin className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Location</h3>
                                    <p className="text-gray-700 mb-2">Amrahia, Greater Accra, Ghana</p>
                                    <p className="text-gray-700">Digital Address: GM-241-4206</p>
                                </HoverCard>
                            </StaggeredItem>
                        </StaggeredContainer>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <AnimatedSection delay={0.2}>
                                <div className="bg-gray-100 rounded-lg overflow-hidden h-full min-h-[400px]">
                                    {/* Replace with actual Google Maps embed */}
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <p className="text-gray-600">Google Maps Embed (Digital Address: GM-241-4206)</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.4}>
                                <div className="bg-white p-8 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>

                                    {submitSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                                        >
                                            <p>Thank you for your message! We&apos;ll get back to you as soon as possible.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {submitError && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                                                    <p>{submitError}</p>
                                                </div>
                                            )}

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Your Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Subject *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Your Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                ></textarea>
                                            </div>

                                            <div>
                                                <motion.button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-blue-700 transition-colors disabled:opacity-70"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {isSubmitting ? (
                                                        <>Processing...</>
                                                    ) : (
                                                        <>
                                                            Send Message <Send className="ml-2 h-5 w-5" />
                                                        </>
                                                    )}
                                                </motion.button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
} 