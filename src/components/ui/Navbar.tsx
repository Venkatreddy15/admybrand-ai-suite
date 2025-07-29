import Link from "next/link";
import { Button } from "./Button";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div style={{
            width: 'clamp(40px, 8vw, 50px)',
            height: 'clamp(40px, 8vw, 50px)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3), 4px 4px 8px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            transform: 'rotate(-5deg)',
            transition: 'all 0.3s ease'
          }} className="group-hover:shadow-purple-500/25 group-hover:scale-105">
            <div style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: '900',
              color: 'white',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-1px',
              fontStyle: 'italic',
              transform: 'skew(-10deg)'
            }}>
              MY
            </div>
            {/* Shimmer Effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              animation: 'shimmer 3s ease-in-out infinite'
            }}></div>
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            ADmyBRAND
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white font-medium transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            size="sm" 
            variant="glass" 
            className="backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium"
          >
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 