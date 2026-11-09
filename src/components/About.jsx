function About() {
    return (
        <section id="about" className="section">
            <h2 className="section-header">About Me</h2>
            <div style={{ marginTop: '2.5rem', maxWidth: '720px' }}>
                <p style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: 'var(--color-text-muted)',
                    textAlign: 'left'
                }}>
                    Hello! I'm <strong style={{ color: 'var(--color-text)' }}>Devank Kansal</strong>, 
                    pursuing B.Tech in Computer Science Engineering with a specialization in 
                    Full Stack Software Development.
                </p>
                <p style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: 'var(--color-text-muted)',
                    textAlign: 'left',
                    marginTop: '1.25rem'
                }}>
                    I build websites with the <strong style={{ color: 'var(--color-text)' }}>MERN Stack</strong> — focusing 
                    on clean, reliable interfaces and well-structured code. I'm equally passionate about 
                    building <strong style={{ color: 'var(--color-text)' }}>autonomous robots using ROS</strong> that 
                    can perform real-world tasks and be deployed in practical scenarios.
                </p>
            </div>
        </section>
    );
}

export default About;
