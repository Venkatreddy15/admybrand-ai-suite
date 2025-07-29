'use client';

import React, { useState, useEffect } from 'react';
import { motion, } from 'framer-motion';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Scroll animation handler
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Removed auto-scroll for click-based navigation
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%)',
      backgroundSize: '100% 400%',
      animation: 'gradientShift 20s ease-in-out infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Unified Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(0, 212, 255, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
        `,
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {/* Morphing Background Elements */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${150 + i * 20}px`,
            height: `${150 + i * 20}px`,
            background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.08 - i * 0.005}), rgba(236, 72, 153, ${0.06 - i * 0.005}))`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            top: `${10 + i * 10}%`,
            left: `${10 + i * 10}%`,
            animation: `morphing ${12 + i * 3}s ease-in-out infinite, blob ${15 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            filter: 'blur(1px)',
            opacity: 0.6
          }}></div>
        ))}
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div key={`particle-${i}`} style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            top: `${5 + i * 5}%`,
            left: `${5 + i * 5}%`,
            animation: `float ${8 + i * 0.2}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`
          }}></div>
        ))}
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(25px) saturate(200%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1rem 0',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
              animation: 'float 4s ease-in-out infinite'
            }}>
              A
            </div>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}>
              ADmyBRAND
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem'
          }}>
            {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                position: 'relative',
                cursor: 'pointer'
              }}>
                {link}
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  transition: 'width 0.3s ease'
                }}></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setShowAuthModal(true)}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              color: 'white',
              border: 'none',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Hero Section - Split Layout */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
        zIndex: 2,
        flexDirection: 'row',
        gap: 'clamp(2rem, 6vw, 4rem)',
        padding: 'clamp(2rem, 6vw, 4rem)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Left Side - Hero Content */}
        <div style={{
          flex: '1',
          padding: 'clamp(1rem, 4vw, 4rem)',
          maxWidth: '600px',
          minWidth: '300px'
        }}>


          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4rem)',
            fontWeight: '900',
            marginBottom: '2rem',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            animation: 'slideInLeft 1.2s ease-out',
            userSelect: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }} 
          className="text-gradient-premium text-glow clickable-heading"
          onClick={() => window.open('/auth', '_blank')}
          >

            
            <span style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
              animation: 'textGlow 3s ease-in-out infinite 1.5s'
            }}>
              ADmyBRAND
            </span>
            <br />
            <span style={{ 
              color: 'white', 
              textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
              fontWeight: '800',
              animation: 'textGlow 3s ease-in-out infinite 1.8s'
            }} className="text-glow-pink">
              AI Suite
            </span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
            marginBottom: '3rem',
            opacity: '0.9',
            lineHeight: '1.6',
            maxWidth: '500px',
            userSelect: 'none',
            animation: 'slideInLeft 1.2s ease-out 0.3s both'
          }}>
            Transform your marketing with cutting-edge AI technology. Create, optimize, and scale campaigns that convert with unprecedented precision.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '4rem',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            animation: 'slideInLeft 1.2s ease-out 0.6s both'
          }}>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="btn-premium"
              style={{
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
              }}
            >
              Start Free Trial
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="glass-premium gradient-overlay"
              style={{
                padding: '1rem 2rem',
                borderRadius: '15px',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              Watch Demo
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4v16l13-8z"/>
              </svg>
            </button>
          </div>

          {/* Key Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '3rem',
            marginTop: '3rem',
            userSelect: 'none',
            animation: 'slideInFromBottom 1.2s ease-out 0.9s both'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none'
              }}>99%</div>
              <div style={{ opacity: '0.7', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', userSelect: 'none' }}>Accuracy Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none'
              }}>50K+</div>
              <div style={{ opacity: '0.7', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', userSelect: 'none' }}>Active Users</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #8b5cf6, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                userSelect: 'none'
              }}>300%</div>
              <div style={{ opacity: '0.7', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', userSelect: 'none' }}>ROI Increase</div>
            </div>
          </div>
        </div>

        {/* Right Side - AI Dashboard Visualization */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 'clamp(1rem, 3vw, 2rem)',
          position: 'relative',
          minHeight: '400px',
          minWidth: '300px',
          animation: 'slideInRight 1.2s ease-out 0.3s both'
        }}>
          {/* Main Dashboard Panel */}
          <div style={{
            width: '100%',
            maxWidth: '500px',
            minHeight: '400px',
            borderRadius: '20px',
            padding: 'clamp(1rem, 4vw, 2rem)',
            position: 'relative',
            animation: 'bounceIn 1.5s ease-out, float 6s ease-in-out infinite 1.5s'
          }} className="glass-ultra card-premium">
            {/* Dashboard Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              userSelect: 'none'
            }}>
              <h3 style={{ 
                color: '#00d4ff', 
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
                fontWeight: '600',
                userSelect: 'none'
              }}>
                AI Analytics Dashboard
              </h3>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#00ff88',
                borderRadius: '50%',
                animation: 'pulse 2s infinite'
              }}></div>
            </div>

            {/* Central Data Visualization */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 'clamp(1rem, 3vw, 2rem)',
              animation: 'scaleIn 1.2s ease-out 0.6s both'
            }}>
              <div style={{
                width: 'clamp(120px, 20vw, 150px)',
                height: 'clamp(120px, 20vw, 150px)',
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #00d4ff, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <div style={{ 
                    fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
                    fontWeight: 'bold', 
                    color: '#00d4ff',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    userSelect: 'none'
                  }}>803,000</div>
                  <div style={{ 
                    fontSize: 'clamp(0.6rem, 2vw, 0.8rem)', 
                    opacity: '0.7',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    userSelect: 'none'
                  }}>Active Campaigns</div>
                </div>
              </div>
            </div>

            {/* Analytics Data Box */}
            <div style={{
              borderRadius: '15px',
              paddingTop: 'clamp(1rem, 3vw, 1.5rem)',
              paddingRight: 'clamp(1rem, 3vw, 1.5rem)',
              paddingBottom: 'clamp(1rem, 3vw, 1.5rem)',
              paddingLeft: 'clamp(1rem, 3vw, 1.5rem)',
              marginTop: '1rem',
              animation: 'slideInFromBottom 1.2s ease-out 0.9s both'
            }} className="glass-premium">
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0',
                alignItems: 'stretch'
              }}>
                {[
                  { value: '7153,300', label: 'IMPRESSIONS', color: '#ec4899' },
                  { value: '351800', label: 'CLICKS', color: '#8b5cf6' },
                  { value: '28.31%', label: 'CLICK THROUGH RATE', color: '#00d4ff' },
                  { value: '290.30', label: 'COST PER CLICK', color: '#00ff88' },
                  { value: '16:12.22', label: 'TIME', color: '#ff6b6b' },
                  { value: '194.00', label: 'SCORE', color: '#feca57' }
                ].map((item, index) => (
                  <div key={index} style={{
                    textAlign: 'center',
                    padding: 'clamp(0.5rem, 2vw, 1rem) clamp(0.25rem, 1vw, 0.5rem)',
                    borderRight: index % 3 !== 2 ? `1px solid rgba(255, 255, 255, 0.15)` : 'none',
                    borderBottom: index < 3 ? 'none' : `1px solid rgba(255, 255, 255, 0.15)`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'clamp(50px, 10vw, 70px)',
                    aspectRatio: '1'
                  }}>
                    <div style={{ 
                      fontSize: 'clamp(0.8rem, 2.5vw, 1.2rem)', 
                      fontWeight: 'bold', 
                      color: item.color,
                      marginBottom: 'clamp(0.25rem, 1vw, 0.5rem)',
                      lineHeight: '1',
                      textShadow: `0 0 10px ${item.color}40`,
                      wordBreak: 'break-word',
                      userSelect: 'none'
                    }}>
                      {item.value}
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(0.5rem, 1.5vw, 0.65rem)', 
                      opacity: '0.8',
                      textTransform: 'uppercase',
                      letterSpacing: 'clamp(0.5px, 0.5vw, 1px)',
                      lineHeight: '1',
                      fontWeight: '500',
                      wordBreak: 'break-word',
                      userSelect: 'none'
                    }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '6rem 0',
        position: 'relative',
        zIndex: 2
      }} className="scroll-fade-in">

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              lineHeight: '1.1'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Powerful Features
              </span>
              <br />
              <span style={{ color: 'white' }}>
                Built for Growth
              </span>
            </h2>
            <p style={{
              fontSize: '1.25rem',
              opacity: '0.8',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Everything you need to create, manage, and optimize world-class marketing campaigns with the power of AI.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'AI Content Generation',
                description: 'Create compelling copy, visuals, and campaigns with advanced AI that understands your brand voice.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4"/>
                    <path d="M9 3v18"/>
                    <path d="m13 7 4 4-4 4"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                delay: '0s'
              },
              {
                title: 'Smart Targeting',
                description: 'Identify and reach your ideal customers with precision targeting powered by machine learning.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #ec4899, #00d4ff)',
                delay: '0.1s'
              },
              {
                title: 'Real-time Analytics',
                description: 'Track performance with beautiful dashboards and get actionable insights in real-time.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m9 9 3 3 3-3"/>
                    <path d="M9 15h6"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
                delay: '0.2s'
              },
              {
                title: 'Automation Engine',
                description: 'Automate your entire marketing funnel from lead generation to conversion optimization.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                delay: '0.3s'
              },
              {
                title: 'Audience Intelligence',
                description: 'Deep dive into customer behavior and preferences with AI-powered audience analysis.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-2-2"/>
                    <path d="M16 16h.01"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #10b981, #8b5cf6)',
                delay: '0.4s'
              },
              {
                title: 'Brand Protection',
                description: 'Monitor and protect your brand reputation across all digital channels automatically.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)',
                delay: '0.5s'
              },
              {
                title: 'Creative Assistant',
                description: 'Generate unlimited creative variations and test what resonates with your audience.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #8b5cf6, #00d4ff)',
                delay: '0.6s'
              },
              {
                title: 'Performance Optimization',
                description: 'Continuously optimize campaigns for maximum ROI with adaptive AI algorithms.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="M9 9h.01"/>
                    <path d="M9 15h.01"/>
                    <path d="M9 12h.01"/>
                    <path d="M15 9h.01"/>
                    <path d="M15 15h.01"/>
                    <path d="M15 12h.01"/>
                  </svg>
                ),
                gradient: 'linear-gradient(135deg, #10b981, #ec4899)',
                delay: '0.7s'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(25px) saturate(200%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2.5rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                animation: `slideInUp 0.6s ease-out ${feature.delay} both`,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(139, 92, 246, 0.25), 0 0 30px rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                
                // Highlight the glow effect
                const glow = e.currentTarget.querySelector('.feature-glow') as HTMLElement;
                if (glow) {
                  glow.style.opacity = '0.15';
                }
                
                // Scale up the icon
                const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                if (icon) {
                  icon.style.transform = 'scale(1.1)';
                  icon.style.boxShadow = '0 12px 25px rgba(139, 92, 246, 0.4)';
                }
                
                // Brighten the title
                const title = e.currentTarget.querySelector('.feature-title') as HTMLElement;
                if (title) {
                  title.style.color = 'rgba(255, 255, 255, 1)';
                  title.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.5)';
                }
                
                // Brighten the description
                const desc = e.currentTarget.querySelector('.feature-desc') as HTMLElement;
                if (desc) {
                  desc.style.opacity = '0.95';
                  desc.style.color = 'rgba(255, 255, 255, 0.9)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                
                // Reset glow effect
                const glow = e.currentTarget.querySelector('.feature-glow') as HTMLElement;
                if (glow) {
                  glow.style.opacity = '0';
                }
                
                // Reset icon
                const icon = e.currentTarget.querySelector('.feature-icon') as HTMLElement;
                if (icon) {
                  icon.style.transform = 'scale(1)';
                  icon.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.2)';
                }
                
                // Reset title
                const title = e.currentTarget.querySelector('.feature-title') as HTMLElement;
                if (title) {
                  title.style.color = 'rgba(255, 255, 255, 1)';
                  title.style.textShadow = 'none';
                }
                
                // Reset description
                const desc = e.currentTarget.querySelector('.feature-desc') as HTMLElement;
                if (desc) {
                  desc.style.opacity = '0.8';
                  desc.style.color = 'rgba(255, 255, 255, 0.8)';
                }
              }}
              >
                {/* Subtle Glow Effect */}
                <div 
                  className="feature-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    background: feature.gradient,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: -1
                  }}
                ></div>

                {/* Icon */}
                <div 
                  className="feature-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.2)',
                    animation: 'float 4s ease-in-out infinite',
                    animationDelay: feature.delay,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 
                  className="feature-title"
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'white',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="feature-desc"
                  style={{
                    opacity: '0.8',
                    lineHeight: '1.6',
                    fontSize: '0.95rem',
                    fontWeight: '400',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {feature.description}
                </p>

                {/* Subtle Hover Indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '0%',
                  height: '2px',
                  background: feature.gradient,
                  transition: 'width 0.3s ease',
                  borderRadius: '0 0 20px 20px'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

                  {/* Pricing Section */}
            <section id="pricing" style={{
              padding: '6rem 0',
              position: 'relative',
              zIndex: 2
            }}>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2
        }}>
                          {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2 style={{
                    fontSize: '3.5rem',
                    fontWeight: '900',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Simple Transparent Pricing
                    </span>
                  </h2>
            <p style={{
              fontSize: '1.25rem',
              opacity: '0.8',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Starter',
                description: 'Perfect for small businesses and startups',
                price: '$29',
                period: 'per month',
                features: [
                  '5 AI-generated campaigns per month',
                  'Basic analytics dashboard',
                  'Email support',
                  '1 team member',
                  'Standard templates'
                ],
                buttonText: 'Start Free Trial',
                buttonStyle: 'secondary',
                popular: false
              },
              {
                title: 'Professional',
                description: 'Ideal for growing marketing teams',
                price: '$99',
                period: 'per month',
                features: [
                  'Unlimited AI campaigns',
                  'Advanced analytics & insights',
                  'Priority support',
                  '5 team members',
                  'Custom templates',
                  'A/B testing suite',
                  'API access'
                ],
                buttonText: 'Get Started',
                buttonStyle: 'primary',
                popular: true
              },
              {
                title: 'Enterprise',
                description: 'For large organizations and agencies',
                price: '$299',
                period: 'per month',
                features: [
                  'Everything in Professional',
                  'Unlimited team members',
                  'White-label solution',
                  'Dedicated account manager',
                  'Custom integrations',
                  'Advanced security',
                  '24/7 phone support',
                  'Custom AI training'
                ],
                buttonText: 'Contact Sales',
                buttonStyle: 'enterprise',
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: plan.popular ? '1px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '2.5rem',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                boxShadow: plan.popular ? '0 20px 40px rgba(139, 92, 246, 0.15)' : '0 8px 25px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(139, 92, 246, 0.25), 0 0 30px rgba(236, 72, 153, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                
                // Highlight the glow effect
                const glow = e.currentTarget.querySelector('.pricing-glow') as HTMLElement;
                if (glow) {
                  glow.style.opacity = '0.15';
                }
                
                // Brighten the title
                const title = e.currentTarget.querySelector('.pricing-title') as HTMLElement;
                if (title) {
                  title.style.color = 'rgba(255, 255, 255, 1)';
                  title.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.5)';
                }
                
                // Brighten the description
                const desc = e.currentTarget.querySelector('.pricing-desc') as HTMLElement;
                if (desc) {
                  desc.style.opacity = '0.9';
                  desc.style.color = 'rgba(255, 255, 255, 0.8)';
                }
                
                // Enhance the price
                const price = e.currentTarget.querySelector('.pricing-price') as HTMLElement;
                if (price) {
                  price.style.textShadow = '0 0 20px rgba(139, 92, 246, 0.6)';
                  price.style.transform = 'scale(1.05)';
                }
                
                // Brighten the features
                const features = e.currentTarget.querySelectorAll('.pricing-feature');
                features.forEach((feature) => {
                  (feature as HTMLElement).style.opacity = '1';
                  (feature as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';
                });
                
                // Enhance the button
                const button = e.currentTarget.querySelector('.pricing-button') as HTMLElement;
                if (button) {
                  button.style.transform = 'scale(1.05)';
                  button.style.boxShadow = '0 12px 25px rgba(139, 92, 246, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = plan.popular ? '0 20px 40px rgba(139, 92, 246, 0.15)' : '0 8px 25px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = plan.popular ? 'rgba(139, 92, 246, 0.3)' : 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                
                // Reset glow effect
                const glow = e.currentTarget.querySelector('.pricing-glow') as HTMLElement;
                if (glow) {
                  glow.style.opacity = '0';
                }
                
                // Reset title
                const title = e.currentTarget.querySelector('.pricing-title') as HTMLElement;
                if (title) {
                  title.style.color = 'rgba(255, 255, 255, 1)';
                  title.style.textShadow = 'none';
                }
                
                // Reset description
                const desc = e.currentTarget.querySelector('.pricing-desc') as HTMLElement;
                if (desc) {
                  desc.style.opacity = '0.6';
                  desc.style.color = 'rgba(255, 255, 255, 0.6)';
                }
                
                // Reset price
                const price = e.currentTarget.querySelector('.pricing-price') as HTMLElement;
                if (price) {
                  price.style.textShadow = 'none';
                  price.style.transform = 'scale(1)';
                }
                
                // Reset features
                const features = e.currentTarget.querySelectorAll('.pricing-feature');
                features.forEach((feature) => {
                  (feature as HTMLElement).style.opacity = '0.85';
                  (feature as HTMLElement).style.color = 'rgba(255, 255, 255, 0.85)';
                });
                
                // Reset button
                const button = e.currentTarget.querySelector('.pricing-button') as HTMLElement;
                if (button) {
                  button.style.transform = 'scale(1)';
                  button.style.boxShadow = plan.buttonStyle === 'primary' 
                    ? '0 8px 25px rgba(139, 92, 246, 0.25)'
                    : plan.buttonStyle === 'enterprise'
                    ? '0 8px 25px rgba(0, 212, 255, 0.25)'
                    : 'none';
                }
              }}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    padding: '0.4rem 1.2rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.25)',
                    zIndex: 10
                  }}>
                    <span style={{ fontSize: '0.9rem' }}>⭐</span>
                    Most Popular
                  </div>
                )}

                {/* Subtle Glow Effect */}
                <div 
                  className="pricing-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    background: plan.popular ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))' : 'transparent',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: -1
                  }}
                ></div>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h3 
                    className="pricing-title"
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      marginBottom: '0.5rem',
                      color: 'white',
                      letterSpacing: '-0.02em',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {plan.title}
                  </h3>
                  <p 
                    className="pricing-desc"
                    style={{
                      opacity: '0.6',
                      fontSize: '0.95rem',
                      marginBottom: '1.5rem',
                      lineHeight: '1.5',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {plan.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span 
                      className="pricing-price"
                      style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.02em',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {plan.price}
                    </span>
                    <div style={{
                      opacity: '0.6',
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      fontWeight: '500'
                    }}>
                      {plan.period}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div style={{ marginBottom: '2rem' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.875rem',
                      fontSize: '0.95rem',
                      lineHeight: '1.4'
                    }}>
                      <span style={{
                        color: '#00d4ff',
                        marginRight: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: 'bold'
                      }}>✓</span>
                      <span 
                        className="pricing-feature"
                        style={{ 
                          opacity: '0.85', 
                          fontWeight: '400',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  className="pricing-button"
                  onClick={() => setShowAuthModal(true)}
                  style={{
                    width: '100%',
                    padding: '0.875rem 2rem',
                    borderRadius: '12px',
                    border: plan.buttonStyle === 'secondary' ? '1px solid rgba(255, 255, 255, 0.15)' : 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    background: plan.buttonStyle === 'primary' 
                      ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                      : plan.buttonStyle === 'enterprise'
                      ? 'linear-gradient(135deg, #00d4ff, #8b5cf6)'
                      : 'rgba(255, 255, 255, 0.08)',
                    color: 'white',
                    backdropFilter: plan.buttonStyle === 'secondary' ? 'blur(10px)' : 'none',
                    boxShadow: plan.buttonStyle === 'primary' 
                      ? '0 8px 25px rgba(139, 92, 246, 0.25)'
                      : plan.buttonStyle === 'enterprise'
                      ? '0 8px 25px rgba(0, 212, 255, 0.25)'
                      : 'none',
                    letterSpacing: '0.01em'
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

                  {/* Testimonials Section */}
            <section id="testimonials" style={{
              padding: '6rem 0',
              position: 'relative',
              zIndex: 2
            }}>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 2
        }}>
                          {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2 style={{
                    fontSize: '3.5rem',
                    fontWeight: '900',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Trusted by
                    </span>
                    <br />
                    <span style={{
                      color: 'white',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                    }}>
                      Marketing Leaders
                    </span>
                  </h2>
            <p style={{
              opacity: '0.8',
              fontSize: '1.25rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Join thousands of companies that have transformed their marketing with ADmyBRAND AI Suite.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            overflow: 'hidden',
            padding: '0 2rem'
          }}>
            {/* Testimonials Container */}
            <motion.div 
              style={{
                display: 'flex',
                gap: '0',
                padding: '1rem 0',
                width: '100%'
              }}
              animate={{ x: `-${currentTestimonial * 100}%` }}
              transition={{ 
                type: "tween", 
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {[
                {
                  name: 'David Kim',
                  role: 'CEO at StartupBoost',
                  quote: 'ADmyBRAND helped us scale from $10K to $1M ARR. The smart targeting feature is absolutely game-changing.',
                  rating: 5,
                  avatar: '👨‍💼'
                },
                {
                  name: 'Lisa Thompson',
                  role: 'Head of Growth at ScaleUp Inc',
                  quote: 'The real-time analytics and AI insights have revolutionized how we approach campaign optimization. Incredible results!',
                  rating: 5,
                  avatar: '👩‍💼'
                },
                {
                  name: 'Alex Johnson',
                  role: 'Marketing Manager at FastTrack',
                  quote: 'Easy to use, powerful features, and outstanding support. Our team productivity increased by 300% since switching.',
                  rating: 5,
                  avatar: '👨‍💻'
                },
                {
                  name: 'Sarah Chen',
                  role: 'VP of Marketing at TechFlow',
                  quote: 'The AI content generation is mind-blowing. We went from spending hours on copy to generating high-converting content in minutes.',
                  rating: 5,
                  avatar: '👩‍💻'
                },
                {
                  name: 'Michael Rodriguez',
                  role: 'Founder at GrowthLabs',
                  quote: 'ADmyBRAND\'s automation engine saved us 40 hours per week. The ROI tracking and optimization features are pure gold.',
                  rating: 5,
                  avatar: '👨‍💼'
                },
                {
                  name: 'Emma Wilson',
                  role: 'Digital Marketing Director at InnovateCorp',
                  quote: 'The audience intelligence feature helped us discover new customer segments we never knew existed. Game-changing insights!',
                  rating: 5,
                  avatar: '👩‍💼'
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                >
                  {/* Subtle Glow Effect */}
                  <motion.div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                      zIndex: -1
                    }}
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Quote Icon */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      fontSize: '2rem',
                      opacity: '0.1',
                      color: '#8b5cf6'
                    }}
                  >
                    &ldquo;
                  </div>

                  {/* Rating Stars */}
                  <div 
                    style={{
                      display: 'flex',
                      gap: '0.25rem',
                      marginBottom: '1.5rem',
                      justifyContent: 'center'
                    }}
                  >
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <span 
                        key={starIndex} 
                        style={{
                          color: '#00d4ff',
                          fontSize: '1.2rem',
                          filter: 'drop-shadow(0 0 5px rgba(0, 212, 255, 0.5))'
                        }}
                      >
                        ⭐
                      </span>
                    ))}
                    <span style={{
                      marginLeft: '0.5rem',
                      fontSize: '0.9rem',
                      opacity: '0.8',
                      fontWeight: '600',
                      color: '#00d4ff'
                    }}>
                      {testimonial.rating}/5
                    </span>
                  </div>

                  {/* Quote Text */}
                  <p 
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      marginBottom: '2rem',
                      color: 'white',
                      opacity: '0.9',
                      fontStyle: 'italic',
                      fontWeight: '400',
                      textAlign: 'center'
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Avatar */}
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        boxShadow: '0 8px 20px rgba(139, 92, 246, 0.2)'
                      }}
                    >
                      {testimonial.avatar}
                    </div>

                    {/* Name and Role */}
                    <div>
                      <h4 
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: 'white',
                          marginBottom: '0.25rem',
                          letterSpacing: '-0.01em'
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p 
                        style={{
                          fontSize: '0.9rem',
                          opacity: '0.7',
                          fontWeight: '500'
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '0%',
                      height: '2px',
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      borderRadius: '0 0 20px 20px',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Carousel Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '3rem'
          }}>
            {/* Previous Button */}
            <motion.button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 6) % 6)}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(139, 92, 246, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              ←
            </motion.button>

            {/* Enhanced Dots */}
            <div style={{
              display: 'flex',
              gap: '0.75rem'
            }}>
              {[0, 1, 2, 3, 4, 5].map((dotIndex) => (
                <motion.div 
                  key={dotIndex} 
                  onClick={() => setCurrentTestimonial(dotIndex)}
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    background: dotIndex === currentTestimonial 
                      ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' 
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    background: dotIndex === currentTestimonial 
                      ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' 
                      : 'rgba(255, 255, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={dotIndex === currentTestimonial ? {
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ 
                    duration: 1.5, 
                    repeat: dotIndex === currentTestimonial ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 6)}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(139, 92, 246, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.button>
          </div>
        </div>
      </section>

                  {/* FAQ Section */}
            <section id="faq" style={{
              padding: '6rem 0',
              position: 'relative',
              zIndex: 2
            }}>
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem',
                position: 'relative',
                zIndex: 2
              }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                  <h2 style={{
                    fontSize: '3.5rem',
                    fontWeight: '900',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1'
                  }}>
                    <span style={{
                      color: 'white',
                      textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
                    }}>
                      Frequently Asked
                    </span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Questions
                    </span>
                  </h2>
                  <p style={{
                    opacity: '0.8',
                    fontSize: '1.25rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Got questions? We have answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our support team.
                  </p>
                </div>

                {/* FAQ Accordion */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  maxWidth: '100%'
                }}>
                  {[
                    {
                      question: 'How does ADmyBRAND AI Suite work?',
                      answer: 'ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, target audience, and market trends. It then generates personalized marketing campaigns, content, and strategies that resonate with your specific audience, all while maintaining your brand voice and identity.'
                    },
                    {
                      question: 'Can I integrate ADmyBRAND with my existing tools?',
                      answer: 'Absolutely! ADmyBRAND integrates seamlessly with popular marketing tools like Google Analytics, Facebook Ads, Mailchimp, HubSpot, and many more. Our API allows for custom integrations with any platform you use.'
                    },
                    {
                      question: 'Is my data secure?',
                      answer: 'Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and regular security audits. Your data is never shared with third parties and is stored in secure, redundant cloud infrastructure.'
                    },
                    {
                      question: 'How quickly will I see results?',
                      answer: 'Most customers see measurable improvements within 2-4 weeks. However, optimal results typically come after 2-3 months as our AI learns your specific audience patterns and optimizes campaigns accordingly.'
                    },
                    {
                      question: 'What kind of support do you offer?',
                      answer: 'We provide 24/7 customer support through live chat, email, and phone. Enterprise customers get a dedicated account manager and priority support. We also offer comprehensive documentation, video tutorials, and regular training sessions.'
                    },
                    {
                      question: 'Can I cancel my subscription anytime?',
                      answer: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your current billing period, and you can reactivate anytime.'
                    },
                    {
                      question: 'Do you offer custom AI training?',
                      answer: 'Yes! Enterprise customers can request custom AI training on their specific industry, brand guidelines, and historical data. This ensures the AI understands your unique business context and generates even more relevant content.'
                    },
                    {
                      question: 'Is there a free trial available?',
                      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features and see the results for yourself.'
                    }
                  ].map((faq, index) => (
                    <div key={index} 
                      onClick={() => toggleFaq(index)}
                                      style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(139, 92, 246, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      }}
                      >
                      {/* Question Header */}
                      <div style={{
                        padding: '2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}>
                        <h3 style={{
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: 'white',
                          margin: 0,
                          lineHeight: '1.4',
                          flex: 1
                        }}>
                          {faq.question}
                        </h3>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                          marginLeft: '1rem',
                          flexShrink: 0
                        }}>
                                                  <span style={{
                          color: 'white',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease'
                        }}>
                          {openFaq === index ? '×' : '+'}
                        </span>
                        </div>
                      </div>

                      {/* Answer Content - Hidden by default */}
                      <div style={{
                        padding: '0 2rem 2rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        marginTop: '0',
                        display: openFaq === index ? 'block' : 'none',
                        animation: openFaq === index ? 'slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                        opacity: openFaq === index ? 1 : 0,
                        transform: openFaq === index ? 'translateY(0)' : 'translateY(-10px)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: 'white',
                          opacity: '0.8',
                          margin: 0,
                          fontWeight: '400'
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                          {/* CTA Section */}
                <div style={{
                  textAlign: 'center',
                  marginTop: '3rem',
                  padding: '2.5rem',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)'
                }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem'
            }}>
              Still have questions?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              opacity: '0.8',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Our support team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <button 
              onClick={() => setShowAuthModal(true)}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                color: 'white',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)',
                letterSpacing: '0.01em'
              }}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

            {/* Footer */}
            <footer style={{
              padding: '3rem 0 2rem',
              position: 'relative',
              zIndex: 2,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem'
              }}>
                {/* Main Footer Content */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                  gap: '3rem',
                  marginBottom: '3rem',
                  paddingBottom: '3rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {/* Brand Information */}
                  <div>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      marginBottom: '1rem',
                      lineHeight: '1.2'
                    }}>
                      <span style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        ADmyBRAND
                      </span>
                      <span style={{ color: 'white' }}> AI Suite</span>
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      opacity: '0.7',
                      marginBottom: '1.5rem',
                      maxWidth: '300px'
                    }}>
                      Transform your marketing with cutting-edge AI technology. Create, optimize, and scale campaigns that convert.
                    </p>
                    {/* Social Media Icons */}
                    <div style={{
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      {[
                        <svg key="twitter" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>,
                        <svg key="linkedin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>,
                        <svg key="facebook" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      ].map((icon, index) => (
                        <div key={index} style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Links */}
                  {[
                    {
                      title: 'Product',
                      links: ['Features', 'Pricing', 'API', 'Integrations']
                    },
                    {
                      title: 'Company',
                      links: ['About', 'Blog', 'Careers', 'Press']
                    },
                    {
                      title: 'Resources',
                      links: ['Documentation', 'Help Center', 'Tutorials', 'Community']
                    },
                    {
                      title: 'Legal',
                      links: ['Privacy', 'Terms', 'Security', 'GDPR']
                    }
                  ].map((column, index) => (
                    <div key={index}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'white',
                        marginBottom: '1rem'
                      }}>
                        {column.title}
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                      }}>
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex} style={{ marginBottom: '0.75rem' }}>
                            <a href="#" style={{
                              fontSize: '0.9rem',
                              color: 'rgba(255, 255, 255, 0.7)',
                              textDecoration: 'none',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer'
                            }}>
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  {/* Contact Details */}
                  <div style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span>📧</span>
                      <span>hello@admybrand.ai</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span>📞</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      <span>📍</span>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>

                  {/* Copyright */}
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    © 2024 ADmyBRAND AI Suite. All rights reserved.
                  </div>
                </div>
              </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '800px',
            width: '100%',
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              ×
            </button>
            
            {/* Video Title */}
            <h3 style={{
              color: 'white',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              ADmyBRAND AI Suite Demo
            </h3>
            
            {/* Video Container */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden'
            }}>
              <video
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              >
                <source src="/videos/admybrand-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.9)',
            borderRadius: '20px',
            padding: '2.5rem',
            maxWidth: '500px',
            width: '100%',
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setShowAuthModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              ×
            </button>
            
            {/* Modal Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                color: 'white',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Get Started
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                Join thousands of marketers using ADmyBRAND AI Suite
              </p>
            </div>
            
            {/* Auth Form */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="password"
                  placeholder="Create a password"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
              <button
                onClick={() => setShowAuthModal(false)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)'
                }}
              >
                Start Free Trial
              </button>
            </div>
            
            {/* Social Login */}
            <div style={{ textAlign: 'center' }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                Or continue with
              </p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <button style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Google
                </button>
                <button style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  GitHub
                </button>
              </div>
            </div>
            
            {/* Terms */}
            <div style={{
              textAlign: 'center',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.8rem',
                lineHeight: '1.5'
              }}>
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
