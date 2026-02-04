import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const AccessPass = ({ onSelect, selectedTier }) => {
    const tiers = [
        { name: "The Introduction", credits: 5, description: "Essential access for the curious." },
        { name: "The Collection", credits: 10, description: "Extended privileges for daily rituals." },
        { name: "The Signature", credits: 20, description: "Complete studio access without limits." }
    ];

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>Choose Your Access</h2>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Select a tier to unlock the collection.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {tiers.map((tier) => {
                        const isSelected = selectedTier && selectedTier.name === tier.name;
                        return (
                            <div
                                key={tier.name}
                                onClick={() => onSelect(tier)}
                                style={{
                                    padding: 'var(--spacing-md)',
                                    backgroundColor: isSelected ? '#fff' : 'rgba(255,255,255,0.6)',
                                    border: `1px solid ${isSelected ? 'var(--color-text-primary)' : 'transparent'}`,
                                    borderRadius: '2px', // Slightly rounded but mostly sharp for elegance
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    boxShadow: isSelected ? '0 10px 30px -10px rgba(0,0,0,0.05)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = '#fff';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isSelected) {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.6)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    <span style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.5rem',
                                        fontStyle: 'italic'
                                    }}>
                                        {tier.name}
                                    </span>
                                    {isSelected && <Check size={20} color="var(--color-success)" />}
                                </div>

                                <div style={{ fontSize: '3rem', fontWeight: '300', marginBottom: 'var(--spacing-xs)' }}>
                                    {tier.credits}
                                </div>
                                <div style={{
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: 'var(--spacing-md)'
                                }}>
                                    Credits
                                </div>

                                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)' }}>
                                    {tier.description}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    opacity: isSelected ? 1 : 0.5,
                                    fontSize: '0.9rem',
                                    fontWeight: '700'
                                }}>
                                    SELECT ACCESS <ArrowRight size={16} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AccessPass;
