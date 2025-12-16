"use client";

import Link from "next/link";
import { ArrowRight, Code, Server, Cloud, LineChart } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StaggeredContainer, {
  StaggeredItem,
} from "@/components/ui/StaggeredContainer";
import HoverCard from "@/components/ui/HoverCard";
import Image from "next/image";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Innovative IT Solutions for a Digital Future
                </h1>
                <p className="text-xl mb-8">
                  Ashanti Technologies provides cutting-edge IT services to help
                  your business thrive in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <HoverCard>
                    <Link
                      href="/services"
                      className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      Our Services <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </HoverCard>
                  <HoverCard>
                    <Link
                      href="/contact"
                      className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </HoverCard>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white/10 rounded-xl backdrop-blur-sm">
                  <Image
                    src="/images/hero.jpg"
                    alt="IT Solutions"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trusted By / Clients Section */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {[
                  { name: "Booksie", src: "/clients/booksie.svg" },
                  { name: "Locale NLP", src: "/clients/locale_nlp.svg" },
                  { name: "M4C", src: "/clients/m4c.svg" },
                  { name: "Neesta", src: "/clients/neesta.svg" },
                  {
                    name: "Sourced Estates",
                    src: "/clients/sourced_estates.svg",
                  },
                  {
                    name: "DAI Africa",
                    src: "/clients/dai_africa.svg",
                  },
                ].map((client) => (
                  <div
                    key={client.name}
                    className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  >
                    <Image
                      src={client.src}
                      alt={client.name}
                      width={160}
                      height={80}
                      className="h-14 md:h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                About Ashanti Technologies
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Ashanti Technologies LTD is a premier IT solutions company
                  based in Amrahia, Greater Accra. We specialize in providing
                  comprehensive technology services to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of experienced professionals is dedicated to
                  delivering innovative solutions that help our clients achieve
                  their business objectives through technology.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    Our Location
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Amrahia, Greater Accra, Ghana
                  </p>
                  <p className="text-gray-700 mb-2">
                    Digital Address: GM-241-4206
                  </p>
                  <p className="text-gray-700 mb-2">Phone: +233 559 627 280</p>
                  <p className="text-gray-700">Email: admin@ashantitech.com</p>
                </div>
              </div>
              <div className="order-first md:order-last">
                {/* Replace with your about image */}
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <Image
                    src="/images/meeting.jpg"
                    alt="IT Solutions"
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of IT services to meet your
                business needs.
              </p>
            </AnimatedSection>

            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StaggeredItem>
                <HoverCard className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Software Development
                  </h3>
                  <p className="text-gray-600">
                    Custom software solutions tailored to your specific business
                    requirements.
                  </p>
                </HoverCard>
              </StaggeredItem>

              <StaggeredItem>
                <HoverCard className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Server className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Hardware & Networking
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive hardware solutions and network infrastructure
                    services.
                  </p>
                </HoverCard>
              </StaggeredItem>

              <StaggeredItem>
                <HoverCard className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Cloud className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
                  <p className="text-gray-600">
                    Secure and scalable cloud solutions to enhance your business
                    operations.
                  </p>
                </HoverCard>
              </StaggeredItem>

              <StaggeredItem>
                <HoverCard className="bg-white p-6 rounded-xl shadow-md h-full">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <LineChart className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">IT Consulting</h3>
                  <p className="text-gray-600">
                    Expert advice and strategic planning for your IT
                    infrastructure.
                  </p>
                </HoverCard>
              </StaggeredItem>
            </StaggeredContainer>

            <AnimatedSection className="text-center mt-12" delay={0.4}>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* App Estimator CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LineChart className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Estimate Your App Cost
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Curious about how much your app might cost? Use our free
                  estimator to get an instant quote based on your requirements.
                </p>
                <HoverCard>
                  <Link
                    href="/estimate"
                    className="bg-blue-900 text-white px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-blue-800 transition-colors"
                  >
                    Get Your Free Estimate{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </HoverCard>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how Ashanti Technologies can help you
              achieve your technology goals.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-blue-100 transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
