import { features } from "@/data/features";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Powerful Features
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Marketing Tools
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your marketing campaigns with the power of AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'slideInFromBottom 1.2s ease-out both'
              }}
            >
              {/* Premium Glassmorphism Card */}
              <div className="card-premium hover-lift-premium feature-card-hover p-8 rounded-2xl group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 hover:brightness-110" style={{
                animation: 'bounceIn 1.5s ease-out, float 6s ease-in-out infinite 1.5s'
              }}>
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300">
                    <FeatureIcon icon={feature.icon} title={feature.title} description={feature.description} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 group-hover:scale-105 transition-all duration-300 cursor-pointer">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 group-hover:scale-102 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="mr-2">🚀</span>
            Explore All Features
          </div>
        </div>
      </div>
    </section>
  );
} 