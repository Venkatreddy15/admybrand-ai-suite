import { pricingTiers } from "@/data/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Simple Pricing
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative group ${
                tier.highlighted ? 'md:transform md:scale-105 md:-translate-y-4' : ''
              }`}
            >
              {/* Premium Glassmorphism Card */}
              <div className={`card-premium hover-lift-premium rounded-3xl p-8 ${
                tier.highlighted ? 'border-purple-500/50' : ''
              }`}>
                
                {/* Popular Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    tier.highlighted ? 'text-white' : 'text-gray-300'
                  }`}>
                    {tier.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-2xl'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-xl'
                  }`}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}