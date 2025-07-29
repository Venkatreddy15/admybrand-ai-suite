import { useState } from "react";

export function HeroSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="glass" style={{ padding: '40px', marginBottom: '30px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            padding: '8px 16px', 
            borderRadius: '20px', 
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', 
            color: 'white', 
            fontSize: '14px', 
            fontWeight: '500', 
            marginBottom: '20px' 
          }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              background: 'white', 
              borderRadius: '50%', 
              marginRight: '8px',
              animation: 'pulse 2s infinite'
            }}></span>
            AI-Powered Marketing Suite
          </div>

          <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
            Supercharge Your Brand with AI
          </h1>

          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
            Transform your marketing with cutting-edge AI. Create, optimize, and scale campaigns 
            that convert in minutes—not weeks.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">
              Start Free Trial
            </button>
            <button className="btn btn-glass" onClick={() => setShowVideoModal(true)}>
              Watch Demo
            </button>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px', 
          marginTop: '40px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>10x</div>
            <div style={{ opacity: '0.7' }}>Faster Campaign Creation</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>95%</div>
            <div style={{ opacity: '0.7' }}>Higher Conversion Rate</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px' }}>24/7</div>
            <div style={{ opacity: '0.7' }}>AI-Powered Support</div>
          </div>
        </div>
      </div>

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
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              ADmyBRAND AI Suite Demo
            </h3>
            
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <video 
                controls 
                preload="metadata"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  borderRadius: '10px',
                  objectFit: 'contain',
                  display: 'block'
                }}
                onError={(e) => {
                  console.log('Video error:', e);
                }}
              >
                <source src="/videos/admybrand-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 