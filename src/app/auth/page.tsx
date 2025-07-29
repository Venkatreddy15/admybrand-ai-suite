'use client';

import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0a0a0a 100%)',
      backgroundSize: '100% 400%',
      animation: 'gradientShift 20s ease-in-out infinite',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Background Pattern */}
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
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            background: `linear-gradient(135deg, rgba(139, 92, 246, ${0.06 - i * 0.005}), rgba(236, 72, 153, ${0.04 - i * 0.005}))`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `morphing ${12 + i * 3}s ease-in-out infinite, blob ${15 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            filter: 'blur(1px)',
            opacity: 0.4
          }}></div>
        ))}
      </div>

      {/* Main Auth Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '900px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(25px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        animation: 'slideInUp 0.8s ease-out'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '600px'
        }}>
          {/* Left Side - Brand Info */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Brand Logo */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)',
              marginBottom: '2rem',
              animation: 'float 4s ease-in-out infinite'
            }}>
              A
            </div>

            {/* Brand Text */}
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '1rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #00d4ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                ADmyBRAND
              </span>
              <br />
              <span style={{ color: 'white' }}>AI Suite</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              opacity: '0.8',
              lineHeight: '1.6',
              maxWidth: '300px',
              marginBottom: '2rem'
            }}>
              Transform your marketing with cutting-edge AI technology. Join thousands of successful businesses.
            </p>

            {/* Key Benefits */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '100%',
              maxWidth: '280px'
            }}>
              {[
                { icon: '🚀', text: '99% Accuracy Rate' },
                { icon: '⚡', text: '50K+ Active Users' },
                { icon: '📈', text: '300% ROI Increase' }
              ].map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{benefit.icon}</span>
                  <span style={{ 
                    color: 'white', 
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div style={{
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            {/* Tab Switcher */}
            <div style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '0.25rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                onClick={() => setIsLogin(true)}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: isLogin ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' : 'transparent',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                style={{
                  flex: 1,
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: !isLogin ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' : 'transparent',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              {!isLogin && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      placeholder="John"
                      required={!isLogin}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: '10px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      placeholder="Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    placeholder="Your Company"
                    required={!isLogin}
                  />
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  placeholder="••••••••"
                  required
                />
              </div>

              {!isLogin && (
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                    placeholder="••••••••"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  color: 'white',
                  border: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)',
                  marginBottom: '1.5rem'
                }}
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              {/* Additional Options */}
              <div style={{
                textAlign: 'center',
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                {isLogin ? (
                  <>
                    <span>Don't have an account? </span>
                    <button
                      type="button"
                      onClick={() => setIsLogin(false)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#00d4ff',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: '0.9rem'
                      }}
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    <span>Already have an account? </span>
                    <button
                      type="button"
                      onClick={() => setIsLogin(true)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#00d4ff',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: '0.9rem'
                      }}
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>

              {isLogin && (
                <div style={{
                  textAlign: 'center',
                  marginTop: '1rem'
                }}>
                  <button
                    type="button"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00d4ff',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '0.9rem'
                    }}
                  >
                    Forgot password?
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 