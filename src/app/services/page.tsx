"use client"

import Link from "next/link";
import { ArrowRight, Code, Server, Cloud, LineChart, CheckCircle } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggeredContainer, { StaggeredItem } from "@/components/ui/StaggeredContainer";
import HoverCard from "@/components/ui/HoverCard";


export default function ServicesPage() {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="bg-blue-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                            <p className="text-xl max-w-3xl mx-auto">
                                Comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What We Offer</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                At Ashanti Technologies, we provide a comprehensive range of IT services to help your business thrive in the digital age.
                            </p>
                        </AnimatedSection>

                        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <Code className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-900">Software Development</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Custom software solutions designed to address your specific business challenges and requirements.
                                    </p>
                                    <Link
                                        href="#software"
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <Server className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-900">Hardware & Networking</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Comprehensive hardware solutions and network infrastructure services to keep your business running smoothly.
                                    </p>
                                    <Link
                                        href="#hardware"
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <Cloud className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-900">Cloud Computing</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Secure and scalable cloud solutions to enhance your business operations and enable remote work capabilities.
                                    </p>
                                    <Link
                                        href="#cloud"
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-blue-50 p-8 rounded-lg h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                                            <LineChart className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-900">IT Consulting</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Expert advice and strategic planning for your IT infrastructure to align with your business goals.
                                    </p>
                                    <Link
                                        href="#consulting"
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                                    >
                                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </HoverCard>
                            </StaggeredItem>
                        </StaggeredContainer>
                    </div>
                </section>

                {/* Software Development Section */}
                <section id="software" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Software Development</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                                <div>
                                    <p className="text-lg text-gray-700 mb-6">
                                        Our software development services are designed to create custom solutions that address your unique business challenges and requirements.
                                    </p>
                                    <p className="text-lg text-gray-700 mb-6">
                                        We follow industry best practices and agile methodologies to deliver high-quality software that is scalable, secure, and user-friendly.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-blue-900 mb-4">Our Approach</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Requirements analysis and planning</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Agile development methodology</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Regular client communication and feedback</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Comprehensive testing and quality assurance</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                            <span className="text-gray-700">Ongoing support and maintenance</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Software Development Services</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <HoverCard className="bg-white p-6 rounded-lg shadow-md h-full">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3">Custom Software Development</h4>
                                    <p className="text-gray-700">
                                        Tailored software solutions designed specifically for your business needs and workflows.
                                    </p>
                                </HoverCard>

                                <HoverCard className="bg-white p-6 rounded-lg shadow-md h-full">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3">Web Application Development</h4>
                                    <p className="text-gray-700">
                                        Responsive and user-friendly web applications that work across all devices and platforms.
                                    </p>
                                </HoverCard>

                                <HoverCard className="bg-white p-6 rounded-lg shadow-md h-full">
                                    <h4 className="text-xl font-bold text-blue-900 mb-3">Mobile App Development</h4>
                                    <p className="text-gray-700">
                                        Native and cross-platform mobile applications for iOS and Android devices.
                                    </p>
                                </HoverCard>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Hardware & Networking Section */}
                <section id="hardware" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-last md:order-first">
                                {/* Replace with relevant image */}
                                <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
                                    <Server className="h-32 w-32 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                    <Server className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Hardware & Networking Services</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    We provide comprehensive hardware and networking solutions to ensure your IT infrastructure
                                    is reliable, secure, and optimized for performance. Our team handles everything from setup to maintenance.
                                </p>

                                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Hardware & Networking Services Include:</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">IT Infrastructure Design & Setup</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Network Design & Implementation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Server Installation & Configuration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Hardware Procurement & Installation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">IT Maintenance & Support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Network Security Solutions</span>
                                    </li>
                                </ul>

                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-blue-700 transition-colors"
                                >
                                    Get Hardware Support <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cloud Computing Section */}
                <section id="cloud" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                    <Cloud className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">Cloud Computing & Data Solutions</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Our cloud computing services help businesses leverage the power of cloud technology to improve
                                    scalability, reduce costs, and enhance collaboration. We provide end-to-end cloud solutions.
                                </p>

                                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Cloud & Data Services Include:</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Cloud Migration & Strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Cloud Infrastructure Setup</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Data Backup & Recovery Solutions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Cloud Hosting Services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Data Management & Analytics</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Cloud Security Solutions</span>
                                    </li>
                                </ul>

                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-blue-700 transition-colors"
                                >
                                    Explore Cloud Solutions <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                            <div className="order-first md:order-last">
                                {/* Replace with relevant image */}
                                <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
                                    <Cloud className="h-32 w-32 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* IT Consulting Section */}
                <section id="consulting" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-last md:order-first">
                                {/* Replace with relevant image */}
                                <div className="bg-blue-100 rounded-lg p-8 h-96 flex items-center justify-center">
                                    <LineChart className="h-32 w-32 text-blue-600" />
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                    <LineChart className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-900 mb-6">IT Consulting & Digital Transformation</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Our IT consulting services help businesses develop and implement technology strategies that align with
                                    their business objectives. We guide organizations through digital transformation journeys.
                                </p>

                                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Consulting Services Include:</h3>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">IT Strategy Development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Digital Transformation Planning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Business Process Optimization</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Technology Assessment & Recommendations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">IT Project Management</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                                        <span className="text-gray-700">Technology Training & Knowledge Transfer</span>
                                    </li>
                                </ul>

                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center hover:bg-blue-700 transition-colors"
                                >
                                    Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Contact us today to discuss how our services can help your business thrive in the digital age.
                            </p>
                            <HoverCard>
                                <Link
                                    href="/contact"
                                    className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-blue-100 transition-colors"
                                >
                                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </HoverCard>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
} 