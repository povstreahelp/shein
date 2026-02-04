import React, { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';

const VerificationOverlay = ({ isOpen, onClose, onComplete }) => {
    const [step, setStep] = useState(1);
    const [isVerifying, setIsVerifying] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsVerifying(false);
        }
    }, [isOpen]);

    const handleVerify = () => {
        setIsVerifying(true);
        // Simulate verification delay
        setTimeout(() => {
            setStep(2); // Success state
            setTimeout(() => {
                onComplete();
            }, 1500);
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(253, 252, 248, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'all' : 'none',
            transition: 'opacity 0.5s ease'
        }}>
            <div className="fade-in" style={{
                maxWidth: '500px',
                width: '100%',
                padding: 'var(--spacing-lg)',
                textAlign: 'center'
            }}>
                {step === 1 ? (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-text-secondary)' }}>
                            <Shield size={48} strokeWidth={1} />
                        </div>

                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>
                            Secure Access
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                            For your security, we ask for a brief verification. This ensures the integrity of our community.
                        </p>

                        <div style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'left' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', color: 'var(--color-text-secondary)' }}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Ex: jane@studio.com"
                                style={{
                                    width: '100%',
                                    border: 'none',
                                    borderBottom: '1px solid var(--color-text-primary)',
                                    backgroundColor: 'transparent',
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.5rem',
                                    padding: '0.5rem 0',
                                    outline: 'none',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                        </div>

                        <button
                            onClick={handleVerify}
                            disabled={isVerifying}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--color-text-primary)',
                                color: '#fff',
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.9rem',
                                opacity: isVerifying ? 0.7 : 1,
                                cursor: isVerifying ? 'wait' : 'pointer',
                                transition: 'opacity 0.3s'
                            }}
                        >
                            {isVerifying ? 'Confirming...' : 'Confirm Access'}
                        </button>

                        <button
                            onClick={onClose}
                            style={{
                                marginTop: '1rem',
                                color: 'var(--color-text-secondary)',
                                fontSize: '0.9rem',
                                textDecoration: 'underline',
                                opacity: 0.7
                            }}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <div className="fade-in">
                        <div style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            border: '2px solid var(--color-success)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto var(--spacing-md)'
                        }}>
                            <Check size={40} color="var(--color-success)" />
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-sm)' }}>
                            Welcome to The Studio.
                        </h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>
                            Your access has been unlocked.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VerificationOverlay;
