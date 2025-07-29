import { testimonials } from "@/data/testimonials";
import { Carousel } from "@/components/ui/Carousel";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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
            Customer Success
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            items={testimonials.map((t) => (
              <div key={t.name} className="card-premium hover-lift-premium testimonial-card-hover flex flex-col items-center text-center p-8 rounded-2xl hover:scale-105 hover:brightness-110 transition-all duration-500 group">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-6 object-cover border-4 border-purple-500/30 shadow-lg"
                />
                <div className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{t.name}</div>
                <div className="text-purple-300 font-medium mb-4 group-hover:text-purple-200 transition-colors duration-300">{t.title}</div>
                <div className="text-gray-300 text-lg italic leading-relaxed group-hover:text-white group-hover:scale-105 transition-all duration-300">"{t.quote}"</div>
                
                {/* Star Rating */}
                <div className="flex items-center justify-center mt-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white font-semibold">5.0</span>
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
} 