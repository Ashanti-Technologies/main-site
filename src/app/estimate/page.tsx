"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AppEstimator from "@/components/AppEstimator";

export default function EstimatePage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/"
                className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Estimate Your App
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl">
                Get an instant estimate for your web or mobile app project.
                Select your platforms and features to see how much your app
                might cost.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Estimator */}
        <section className="py-12 bg-gray-50 flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection delay={0.2}>
              <AppEstimator />
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection delay={0.3}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                This is just an estimate. Contact us for a detailed quote
                tailored to your specific requirements.
              </p>
              <Link
                href="/contact"
                className="bg-blue-900 text-white px-8 py-4 rounded-md font-medium inline-flex items-center hover:bg-blue-800 transition-colors"
              >
                Get a Detailed Quote
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
