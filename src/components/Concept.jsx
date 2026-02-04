import React, { useEffect, useRef, useState } from 'react';

const Concept = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} style={{ padding: 'var(--spacing-xl) 0', backgroundColor: 'var(--color-bg-main)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-lg)' }}>

                <div style={{
                    maxWidth: '800px',
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--color-text-primary)'
                    }}>
                        The Concept
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-secondary)'
                    }}>
                        We believe in small moments of joy. Access a collection of lifestyle privileges designed to enhance your daily rituals. From wellness essentials to curated home goods, The Studio invites you to explore what resonates with you.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 'var(--spacing-md)',
                    width: '100%',
                    marginTop: 'var(--spacing-md)'
                }}>
                    {['Curated', 'Private', 'Exclusive'].map((item, index) => (
                        <div key={item} style={{
                            padding: 'var(--spacing-lg) var(--spacing-sm)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            textAlign: 'center',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: `opacity 0.8s ease-out ${index * 0.2 + 0.5}s, transform 0.8s ease-out ${index * 0.2 + 0.5}s`
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-xs)' }}>{item}</h3>
                            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-border)', margin: '0 auto' }}></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Concept;
