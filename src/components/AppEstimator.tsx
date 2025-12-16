"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  FileText,
  MapPin,
  MessageCircle,
  CreditCard,
  LayoutDashboard,
  Plug,
  Shield,
  Globe,
  Smartphone,
  Check,
  Calculator,
} from "lucide-react";
import {
  platforms,
  featureCategories,
  calculateEstimate,
  DAILY_RATE,
} from "@/lib/estimatorData";

// Icon mapping for dynamic rendering
const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
  Plug: <Plug className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
};

// Platform icon mapping
const platformIcons: Record<string, React.ReactNode> = {
  web: <Globe className="w-6 h-6" />,
  ios: <Smartphone className="w-6 h-6" />,
  android: <Smartphone className="w-6 h-6" />,
};

export default function AppEstimator() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<string>>(
    new Set(["web"])
  );
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set()
  );

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(platformId)) {
        next.delete(platformId);
      } else {
        next.add(platformId);
      }
      return next;
    });
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) => {
      const next = new Set(prev);
      if (next.has(featureId)) {
        next.delete(featureId);
      } else {
        next.add(featureId);
      }
      return next;
    });
  };

  const estimate = useMemo(
    () => calculateEstimate(selectedFeatures, selectedPlatforms),
    [selectedFeatures, selectedPlatforms]
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Platform Selection */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Select Your Platforms
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              onClick={() => togglePlatform(platform.id)}
              className={`relative p-4 rounded-xl border-2 transition-all ${
                selectedPlatforms.has(platform.id)
                  ? "bg-white text-blue-900 border-white"
                  : "bg-white/10 text-white border-white/30 hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                {platformIcons[platform.id]}
                <div className="text-left">
                  <div className="font-semibold">{platform.name}</div>
                  <div
                    className={`text-sm ${
                      selectedPlatforms.has(platform.id)
                        ? "text-gray-600"
                        : "text-white/70"
                    }`}
                  >
                    {platform.description}
                  </div>
                </div>
              </div>
              {selectedPlatforms.has(platform.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 bg-green-500 rounded-full p-1"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Feature Selection */}
        <div className="lg:col-span-2 p-6 max-h-[600px] overflow-y-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Select Features
          </h3>
          <div className="space-y-6">
            {featureCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50 px-4 py-3 flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    {iconMap[category.icon]}
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {category.name}
                  </h4>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.features.map((feature) => (
                    <motion.label
                      key={feature.id}
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                        selectedFeatures.has(feature.id)
                          ? "bg-blue-50 border-2 border-blue-500"
                          : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.has(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          selectedFeatures.has(feature.id)
                            ? "bg-blue-500"
                            : "bg-white border-2 border-gray-300"
                        }`}
                      >
                        {selectedFeatures.has(feature.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {feature.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {feature.description}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          +{feature.devDays} days
                        </div>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estimate Summary */}
        <div className="bg-gray-50 p-6 border-l border-gray-200">
          <div className="sticky top-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Your Estimate
            </h3>

            {selectedPlatforms.size === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Smartphone className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Select at least one platform to see your estimate</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${estimate.totalCost}-${selectedPlatforms.size}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {/* Platform breakdown */}
                  <div className="space-y-3">
                    {estimate.platformBreakdown.map(
                      ({ platform, devDays, cost }) => (
                        <div
                          key={platform.id}
                          className="bg-white p-4 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            {platformIcons[platform.id]}
                            <span className="font-semibold">
                              {platform.name}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex justify-between">
                              <span>Developer Days:</span>
                              <span className="font-medium">
                                {devDays} days
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span>Development Cost:</span>
                              <span className="font-medium">
                                {formatCurrency(cost)}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Design time */}
                  {estimate.totalDesignDays > 0 && (
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">UX/UI Design</span>
                        <span className="font-medium">
                          {estimate.totalDesignDays} days (
                          {formatCurrency(
                            estimate.totalDesignDays * DAILY_RATE
                          )}
                          )
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Total */}
                  <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl text-white">
                    <div className="text-sm opacity-80 mb-1">
                      Estimated Total
                    </div>
                    <div className="text-4xl font-bold mb-2">
                      {formatCurrency(estimate.totalCost)}
                    </div>
                    <div className="text-sm opacity-80">
                      {estimate.totalDevDays + estimate.totalDesignDays} total
                      days
                      <span className="mx-2">•</span>~
                      {Math.ceil(
                        (estimate.totalDevDays + estimate.totalDesignDays) / 5
                      )}{" "}
                      weeks
                    </div>
                  </div>

                  {/* Rate info */}
                  <p className="text-xs text-gray-500 text-center">
                    Based on {formatCurrency(DAILY_RATE)}/day rate.
                    <br />
                    Contact us for a detailed quote.
                  </p>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
