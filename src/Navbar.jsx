import { useEffect, useState, useCallback } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
];

function NavFlipButton({ label, href, isActive }) {
    return (
        <div className="nav-flip-btn">
            <a href={href}>
                <div className={`nav-flip-inner ${isActive ? 'active' : ''}`}>
                    <div className={`nav-flip-front ${isActive ? 'active' : ''}`}>
                        {label}
                    </div>
                </div>
            </a>
        </div>
    );
}

const Navbar = () => {
    const [scroll, setScroll] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    const handleScroll = useCallback(() => {
        const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / totalHeight) * 100;
        setScroll(progress);

        // Scroll-spy: find which section is currently in view
        const sections = navLinks.map(link => link.href.replace("#", ""));
        let current = "";
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 150) {
                    current = id;
                }
            }
        }
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <div className="navbar-wrapper">
            {/* Progress Bar */}
            <div className="progress-bar-track">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${scroll}%` }}
                />
            </div>

            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-inner">
                    <a href="#hero" className="navbar-logo">
                        Devank<span>.</span>
                    </a>

                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <NavFlipButton
                                key={link.href}
                                label={link.label}
                                href={link.href}
                                isActive={activeSection === link.href.replace("#", "")}
                            />
                        ))}
                    </div>

                    <div className="navbar-contact">
                        <a href="mailto:devankkansal15@gmail.com" className="contact-btn">
                            <span>✉</span> Get in Touch
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
