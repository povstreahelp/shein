import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(253, 252, 248, 0.2)', // Very subtle overlay to ensure text contrast if needed, but keeping it light
                zIndex: 0
            }} />

            {/* Content */}
            <div className="container fade-in" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                color: 'var(--color-text-primary)',
                animationDelay: '0.2s'
            }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: 'var(--spacing-sm)',
                    textShadow: '0 2px 10px rgba(255,255,255,0.5)'
                }}>
                    The Sanctuary
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Curated for you. A space to pause, discover, and receive.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite'
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
          40% {transform: translateX(-50%) translateY(-10px);}
          60% {transform: translateX(-50%) translateY(-5px);}
        }
      `}</style>
        </section>
    );
};

export default Hero;
