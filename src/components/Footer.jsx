function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>
                    {/* Left: CTA */}
                    <div style={{ maxWidth: '500px' }}>
                        <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'rgba(255,255,255,0.4)',
                            marginBottom: '0.75rem'
                        }}>
                            Get in Touch
                        </div>
                        <a
                            href="mailto:devankkansal15@gmail.com"
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                                lineHeight: 1.3,
                                display: 'inline-block',
                                transition: 'color 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-light)'}
                            onMouseLeave={(e) => e.target.style.color = 'white'}
                        >
                            devankkansal15@gmail.com <span style={{ fontSize: '1.5rem' }}>↗</span>
                        </a>
                    </div>

                    {/* Right: Quick Links */}
                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'rgba(255,255,255,0.4)',
                                marginBottom: '1rem'
                            }}>
                                Navigation
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                <a href="#about">About</a>
                                <a href="#skills">Skills</a>
                                <a href="#experience">Experience</a>
                                <a href="#projects">Projects</a>
                                <a href="#achievements">Achievements</a>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'rgba(255,255,255,0.4)',
                                marginBottom: '1rem'
                            }}>
                                Connect
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                <a href="https://github.com/Devank3226" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="mailto:devankkansal15@gmail.com">Email</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '3rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.35)'
                }}>
                    <span>© 2026 Devank Kansal. All rights reserved.</span>
                    <button
                        onClick={scrollToTop}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            cursor: 'pointer',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.2)';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(255,255,255,0.1)';
                            e.target.style.color = 'rgba(255,255,255,0.7)';
                        }}
                    >
                        ↑ Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
