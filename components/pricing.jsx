import { useIntersectionObserver } from "@/hooks/use-landing-hooks";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import { Button } from "./ui/button";

const PricingCard = ({
  id,
  plan,
  price,
  features,
  featured = false,
  planId,
  buttonText,
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  const [isHovered, setIsHovered] = useState(false);
  const { has } = useAuth();

  const isCurrentPlan = id ? has?.({ plan: id }) : false;

  const handlePopup = async () => {
    if (isCurrentPlan) return;

    try {
      if (window.Clerk && window.Clerk.__internal_openCheckout) {
        await window.Clerk.__internal_openCheckout({
          planId: planId,
          planPeriod: "month",
          subscriberType: "user",
        });
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div
      ref={ref}
      className={`relative backdrop-blur-2xl border rounded-3xl p-8 cursor-pointer
        transition-all duration-700 ease-out
        ${
          featured
            ? "bg-gradient-to-b from-yellow-600/30 to-orange-600/30 border-yellow-500/70 scale-105 shadow-lg shadow-yellow-600/40"
            : "bg-white/5 border-white/10 shadow-white/10"
        }
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${isHovered ? "scale-[1.12] rotate-[1deg] shadow-yellow-500/60 z-20" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {featured && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-md shadow-yellow-400/50">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center relative z-10">
        <h3
          className={`text-2xl font-extrabold mb-2 ${
            featured
              ? "text-yellow-400 drop-shadow-lg"
              : "text-white drop-shadow-md"
          }`}
        >
          {plan}
        </h3>
        <div
          className={`text-5xl font-extrabold bg-gradient-to-r ${
            featured
              ? "from-yellow-400 via-orange-400 to-yellow-300"
              : "from-cyan-400 to-blue-500"
          } bg-clip-text text-transparent mb-6 drop-shadow-lg`}
        >
          ${price}
          {price > 0 && (
            <span className="text-lg text-gray-400 font-medium">/month</span>
          )}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-center ${
                featured ? "text-yellow-300" : "text-gray-300"
              }`}
            >
              <span
                className={`mr-3 ${
                  featured ? "text-yellow-400" : "text-green-400"
                }`}
              >
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <Button
          variant={featured ? "primary" : "glass"}
          size="xl"
          className="w-full tracking-wide font-semibold"
          onClick={handlePopup}
          disabled={isCurrentPlan || !planId}
        >
          {isCurrentPlan ? "Current Plan" : buttonText}
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      id: "free_user",
      plan: "Free",
      price: 0,
      features: [
        "3 projects maximum",
        "20 exports per month",
        "Basic crop & resize",
        "Color adjustments",
        "Text Tool",
      ],
      buttonText: "Get Started Free",
    },
    {
      id: "pro",
      plan: "Pro",
      price: 12,
      features: [
        "Unlimited projects",
        "Unlimited exports",
        "All Editing Tools",
        "AI Background Remover",
        "AI Image Extender",
        "AI Retouch, Upscaler and more",
      ],
      featured: true,
      planId: "cplan_2ywZwXjYQQipWYxjCmFZCgCgsTZ",
      buttonText: "Upgrade to Pro",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" id="pricing">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Simple{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-yellow-300 max-w-3xl mx-auto">
            Start free and upgrade when you need more power. No hidden fees,
            cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
