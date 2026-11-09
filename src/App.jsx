import './App.css'
import Navbar from './Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'
import Achievements from './components/Achievements'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <Navbar />

            {/* Spacer for fixed navbar */}
            <div style={{ paddingTop: '5rem' }}>

                {/* Hero Section */}
                <section id="hero" className="section" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
                            Hi, I'm
                        </div>
                        <h1 className="hero-name">
                            DEVANK<br />
                            <span className="hero-accent">KANSAL</span>
                        </h1>
                        <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '1.25rem',
                            color: 'var(--color-text-muted)',
                            lineHeight: 1.7,
                            marginTop: '2rem',
                            maxWidth: '600px'
                        }}>
                            Full Stack Developer & Robotics Engineer — building reliable web applications 
                            with MERN Stack and autonomous robots with ROS2.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                            <a href="#projects" className="contact-btn" style={{ background: 'var(--color-accent)', color: 'var(--color-text)' }}>
                                View Projects ↓
                            </a>
                            <a href="mailto:devankkansal15@gmail.com" className="contact-btn">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>

                <About />
                <Skills />
                <Experience />
                <Project />
                <Achievements />
                <Footer />
            </div>
        </div>
    );
}

export default App;