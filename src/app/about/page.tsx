
"use client"

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggeredContainer, { StaggeredItem } from "@/components/ui/StaggeredContainer";
import HoverCard from "@/components/ui/HoverCard";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="bg-blue-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ashanti Technologies</h1>
                            <p className="text-xl max-w-3xl mx-auto">
                                We are a premier IT solutions company dedicated to delivering innovative technology services to businesses across Ghana.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <AnimatedSection>
                                <div className="bg-blue-50 p-8 rounded-lg h-full">
                                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        We are committed to delivering high-quality IT services that meet the unique needs of each client, helping them navigate the digital landscape with confidence.
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection delay={0.2}>
                                <div className="bg-blue-50 p-8 rounded-lg h-full">
                                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        To be the leading IT solutions provider in Ghana, recognized for our technical excellence, innovative approach, and exceptional customer service.
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        We aspire to be at the forefront of technological advancement, helping businesses harness the power of technology to achieve their goals.
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                These principles guide everything we do at Ashanti Technologies
                            </p>
                        </AnimatedSection>

                        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Excellence</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We strive for excellence in every project we undertake, ensuring the highest quality of service and solutions.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Innovation</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We embrace innovation and continuously seek new ways to leverage technology for our clients&apos; benefit.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Integrity</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We conduct our business with the highest level of integrity, honesty, and transparency.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Client Focus</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We put our clients at the center of everything we do, focusing on their needs and delivering solutions that add value.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Collaboration</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We believe in the power of collaboration, working closely with our clients and partners to achieve shared goals.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>

                            <StaggeredItem>
                                <HoverCard className="bg-white p-8 rounded-lg shadow-md h-full">
                                    <div className="flex items-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                                        <h3 className="text-xl font-bold text-blue-900">Continuous Learning</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        We are committed to continuous learning and professional development to stay at the forefront of technology.
                                    </p>
                                </HoverCard>
                            </StaggeredItem>
                        </StaggeredContainer>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Contact us today to discuss how Ashanti Technologies can help you achieve your technology goals.
                            </p>
                            <HoverCard>
                                <Link
                                    href="/contact"
                                    className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-blue-100 transition-colors"
                                >
                                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </HoverCard>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
} 