import { useIntersectionObserver } from "@/hooks/use-landing-hooks";
import { useState } from "react";

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`relative backdrop-blur-lg bg-gray-900/40 border border-yellow-600/40 rounded-2xl p-8 cursor-pointer
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isHovered ? "scale-[1.05] rotate-[2deg] shadow-[0_0_15px_5px_rgba(252,211,77,0.75)] z-10" : "shadow-yellow-600/20"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon glow border */}
      <div
        className={`absolute -inset-0.5 rounded-2xl opacity-0 pointer-events-none
          bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 blur-2xl
          ${isHovered ? "opacity-80" : ""} transition-opacity duration-300 ease-in-out`}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* Icon Container with Neon Gradient */}
        <div
          className={`text-5xl p-4 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 shadow-[0_0_10px_3px_rgba(252,211,77,0.7)] 
            ${isHovered ? "scale-110" : "scale-100"} transition-transform duration-300`}
        >
          {icon}
        </div>

        {/* Title with gradient text */}
        <h3
          className={`text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-wider
            ${isHovered ? "drop-shadow-[0_0_10px_rgba(252,211,77,0.9)]" : "drop-shadow-[0_0_5px_rgba(252,211,77,0.7)]"}
            transition-shadow duration-300`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed max-w-xs">{description}</p>
      </div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: "✂️",
      title: "Smart Crop & Resize",
      description:
        "Interactive cropping with aspect ratio constraints and intelligent resizing that preserves image quality across any dimension.",
    },
    {
      icon: "🎨",
      title: "Color & Light Adjustment",
      description:
        "Professional-grade brightness, contrast, saturation controls with real-time preview and auto-enhance capabilities.",
    },
    {
      icon: "🤖",
      title: "AI Background Removal",
      description:
        "Remove or replace backgrounds instantly using advanced AI that detects complex edges and fine details with precision.",
    },
    {
      icon: "🔧",
      title: "AI Content Editor",
      description:
        "Edit images with natural language prompts. Remove objects, change elements, or add new content using generative AI.",
    },
    {
      icon: "📏",
      title: "Image Extender",
      description:
        "Expand your canvas in any direction with AI-powered generative fill that seamlessly blends new content with existing images.",
    },
    {
      icon: "⬆️",
      title: "AI Upscaler",
      description:
        "Enhance image resolution up to 4x using AI upscaling technology that preserves details and reduces artifacts.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      id="features"
    >
      {/* Optional subtle particle/light streak background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* You can add particle/light streak components here */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-wide">
            Powerful AI Features
          </h2>
          <p className="text-xl text-yellow-300 max-w-3xl mx-auto">
            Everything you need to create, edit, and enhance images with
            professional-grade tools powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
