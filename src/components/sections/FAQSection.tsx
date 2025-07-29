import { faq } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Get Answers
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can&apos;t find the answer you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faq.map((item) => (
            <div key={item.question} className="card-premium hover-lift-premium rounded-2xl">
              <Accordion title={item.question}>
                {item.answer}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="mr-2">💬</span>
            Still Have Questions?
          </div>
        </div>
      </div>
    </section>
  );
}