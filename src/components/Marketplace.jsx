import React, { useState } from 'react';
import { Search, Lock } from 'lucide-react';

const Marketplace = ({ balance, onRedeem }) => {
    const [category, setCategory] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState(null);

    const categories = ['All', 'Beauty', 'Home', 'Wellness', 'Style'];

    const brands = [
        { id: 1, name: 'Aesop', category: 'Beauty', image: 'https://images.unsplash.com/photo-1571781926291-28522f87ee23?auto=format&fit=crop&q=80&w=600', offer: 'Complimentary Hand Wash' },
        { id: 2, name: 'Parachute', category: 'Home', image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&q=80&w=600', offer: '$50 Credit' },
        { id: 3, name: 'Alo', category: 'Wellness', image: 'https://images.unsplash.com/photo-1544365519-959443597d79?auto=format&fit=crop&q=80&w=600', offer: 'Private Session' },
        { id: 4, name: 'Mejuri', category: 'Style', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb053331?auto=format&fit=crop&q=80&w=600', offer: 'Early Access' },
        { id: 5, name: 'Diptyque', category: 'Home', image: 'https://images.unsplash.com/photo-1608248599426-1d11340dc5f4?auto=format&fit=crop&q=80&w=600', offer: 'Mini Candle Set' },
        { id: 6, name: 'Glossier', category: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=600', offer: 'The Set' },
    ];

    const filteredBrands = category === 'All' ? brands : brands.filter(b => b.category === category);

    return (
        <section style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-main)', minHeight: '100vh' }}>
            <div className="container">
                {/* Header & Balance */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-lg)' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-xs)' }}>The Collection</h2>
                        <p style={{ color: 'var(--color-text-secondary)' }}>Curated privileges for the modern lifestyle.</p>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--color-text-secondary)'
                        }}>
                            Your Balance
                        </div>
                        <div style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>
                            {balance} Credits
                        </div>
                    </div>
                </div>

                {/* Zero State Banner */}
                {balance === 0 && (
                    <div className="fade-in" style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        padding: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-lg)',
                        borderLeft: '2px solid var(--color-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                    }}>
                        <Lock size={20} color="var(--color-text-secondary)" />
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                            Your balance is currently awaiting replenishment. to access this collection, please select an access tier above.
                        </p>
                    </div>
                )}

                {/* Filters */}
                <div style={{ display: 'flex', gap: '2rem', marginBottom: 'var(--spacing-lg)', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1rem',
                                color: category === cat ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                fontWeight: category === cat ? '700' : '400',
                                paddingBottom: '0.25rem',
                                borderBottom: category === cat ? '1px solid var(--color-text-primary)' : 'none',
                                opacity: category === cat ? 1 : 0.7,
                                transition: 'opacity 0.2s'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {filteredBrands.map(brand => (
                        <div
                            key={brand.id}
                            className="fade-in"
                            style={{ cursor: 'pointer', group: 'card' }}
                            onClick={() => setSelectedBrand(brand)}
                        >
                            <div style={{
                                position: 'relative',
                                paddingBottom: '120%',
                                marginBottom: '1rem',
                                overflow: 'hidden',
                                backgroundColor: '#f0f0f0'
                            }}>
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease',
                                        filter: 'grayscale(20%) contrast(90%)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.filter = 'grayscale(0%) contrast(100%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.filter = 'grayscale(20%) contrast(90%)';
                                    }}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{brand.name}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{brand.category}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Details Modal */}
            {selectedBrand && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(253, 252, 248, 0.9)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--spacing-md)'
                }} onClick={() => setSelectedBrand(null)}>
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: 'var(--spacing-lg)',
                            maxWidth: '500px',
                            width: '100%',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                            position: 'relative'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedBrand(null)}
                            style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '1.5rem', opacity: 0.5 }}
                        >
                            &times;
                        </button>

                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedBrand.name}</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-md)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                            {selectedBrand.category}
                        </p>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg-secondary)', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>
                            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                {selectedBrand.offer}
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                                Exclusive privilege for studio members.
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                onRedeem(selectedBrand);
                                setSelectedBrand(null);
                            }}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--color-text-primary)',
                                color: '#fff',
                                fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '0.9rem',
                                transition: 'opacity 0.3s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 0.9}
                            onMouseLeave={e => e.currentTarget.style.opacity = 1}
                        >
                            Reveal Privilege
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Marketplace;
