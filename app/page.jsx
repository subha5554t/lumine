"use client";

import FeaturesSection from "@/components/features";
import InteractiveStats from "@/components/interactive-stats";
import PricingSection from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Hero Section Component
const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [demoHovered, setDemoHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 px-6">
        <div
          className={`transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >

        <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tight text-center">
  {/* Transform with vibrant neon gradient */}
  <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent animate-pulse">
    Transform
  </span>
  <br />
  {/* Pixels Into Magic with glowing white effect */}
  <span className="text-white tracking-wider italic drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
    Pixels Into Magic
  </span>
</h1>



<p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Lumine offers a complete suite of AI-driven image editing capabilities that help you bring your vision to life. Crop and resize images with intelligent aspect ratio support, adjust colors and lighting like a pro, remove backgrounds instantly, and enhance the overall quality using state-of-the-art technology seamlessly integrated into one platform.
          </p>


          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/dashboard">
              <Button
  className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-white font-bold shadow-lg shadow-pink-500/50 
             hover:scale-105 hover:brightness-110 transform transition-all duration-300"
  size="xl"
>
  Elevate Your Images
</Button>

            </Link>
            <Button variant="glass" size="xl">
              Try the Demo Now
            </Button>
          </div>
        </div>

        {/* 3D Demo Interface */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            textVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          } ${demoHovered ? "transform scale-105 rotate-y-6" : ""}`}
          onMouseEnter={() => setDemoHovered(true)}
          onMouseLeave={() => setDemoHovered(false)}
          style={{ perspective: "1000px" }}
        >
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 transform-gpu">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 min-h-96">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm">Lumine Pro</div>
              </div>


              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  {[
    { 
      icon: "✂️", 
      label: "Smart Crop", 
      description: "Intelligent cropping",
      gradient: "from-orange-400 to-red-500",
      glowColor: "orange-500/30"
    },
    { 
      icon: "📐", 
      label: "Auto Resize", 
      description: "Perfect dimensions",
      gradient: "from-blue-400 to-cyan-500",
      glowColor: "blue-500/30"
    },
    { 
      icon: "🎨", 
      label: "Color Adjust", 
      description: "Professional editing",
      gradient: "from-purple-400 to-pink-500",
      glowColor: "purple-500/30"
    },
    { 
      icon: "🤖", 
      label: "AI Magic", 
      description: "Next-gen tools",
      gradient: "from-green-400 to-emerald-500",
      glowColor: "green-500/30"
    },
  ].map((tool, index) => (
    <div
      key={index}
      className={`group relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
        border border-white/20 rounded-2xl p-6 text-center 
        hover:from-white/20 hover:to-white/10 hover:border-white/30
        transform hover:scale-105 hover:-translate-y-2
        transition-all duration-500 cursor-pointer
        shadow-xl hover:shadow-2xl hover:shadow-${tool.glowColor}
        before:absolute before:inset-0 before:rounded-2xl 
        before:bg-gradient-to-br before:${tool.gradient} before:opacity-0 
        hover:before:opacity-10 before:transition-opacity before:duration-500`}
      title={tool.description}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} 
        opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      
      {/* Icon Container */}
      <div className={`relative mb-4 mx-auto w-16 h-16 rounded-full 
        bg-gradient-to-br ${tool.gradient} p-0.5 
        shadow-lg group-hover:shadow-xl group-hover:shadow-${tool.glowColor}
        transform group-hover:rotate-12 transition-all duration-500`}>
        <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm 
          flex items-center justify-center">
          <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
            {tool.icon}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative space-y-2">
        <h3 className="font-bold text-white text-sm group-hover:text-transparent 
          group-hover:bg-gradient-to-r group-hover:bg-clip-text 
          group-hover:from-white group-hover:to-gray-200
          transition-all duration-300">
          {tool.label}
        </h3>
        <p className="text-xs text-gray-400 group-hover:text-gray-300 
          transition-colors duration-300 opacity-0 group-hover:opacity-100 
          transform translate-y-2 group-hover:translate-y-0">
          {tool.description}
        </p>
      </div>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.gradient} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
        blur-sm scale-105`}></div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute top-0 -left-4 w-6 h-full bg-white/20 
          transform -skew-x-12 translate-x-full group-hover:-translate-x-full 
          transition-transform duration-1000 ease-in-out"></div>
      </div>
      
      {/* Click Ripple Effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} 
          opacity-0 group-active:opacity-20 transition-opacity duration-150`}></div>
      </div>
    </div>
  ))}
</div>

{/* Optional: Floating Action Hint */}
<div className="text-center mb-6">
  <p className="text-sm text-gray-500 animate-pulse">
    ✨ Hover over tools to see magic happen
  </p>
</div>





              <div className="flex items-center justify-center">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/50 flex items-center justify-center">
                  <div className="text-white font-bold">Your Canvas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="pt-36">
      <HeroSection />
      <InteractiveStats />
      <FeaturesSection />
      <PricingSection />

      {/* Final CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Create Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who are already using AI to transform
            their images and bring their vision to life.
          </p>
          <Link href="/dashboard">
            <Button variant="primary" size="xl">
              🌟 Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default App;
