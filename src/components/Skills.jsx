function TechIcon({ type }) {
    const iconProps = {
        width: 16,
        height: 16,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "skill-svg-icon"
    };

    switch (type) {
        case "ros":
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="19" cy="8" r="2" />
                    <circle cx="5" cy="8" r="2" />
                    <circle cx="19" cy="16" r="2" />
                    <circle cx="5" cy="16" r="2" />
                    <line x1="12" y1="9" x2="12" y2="3" />
                    <line x1="14.5" y1="13.5" x2="17.5" y2="15" />
                    <line x1="9.5" y1="13.5" x2="6.5" y2="15" />
                </svg>
            );
        case "cpp":
            return (
                <svg {...iconProps}>
                    <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6" />
                    <line x1="19" y1="9" x2="19" y2="15" />
                    <line x1="16" y1="12" x2="22" y2="12" />
                </svg>
            );
        case "python":
            return (
                <svg {...iconProps}>
                    <path d="M12 2C7.5 2 7 4 7 4v3h5v1H5S2 7.5 2 12s2 5 2 5h2v-3a2 2 0 0 1 2-2h5a2 2 0 0 0 2-2V4s-.5-2-3-2z" />
                    <path d="M12 22c4.5 0 5-2 5-2v-3h-5v-1h7s3 .5 3-4-2-5-2-5h-2v3a2 2 0 0 1-2 2h-5a2 2 0 0 0-2 2v5s.5 2 3 2z" />
                </svg>
            );
        case "vision":
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                </svg>
            );
        case "lidar":
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 2a10 10 0 0 1 10 10" />
                    <path d="M12 6a6 6 0 0 1 6 6" />
                    <path d="M2 12h2" />
                    <path d="M12 20v2" />
                </svg>
            );
        case "microchip":
            return (
                <svg {...iconProps}>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <rect x="9" y="9" width="6" height="6" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="15" x2="23" y2="15" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="15" x2="4" y2="15" />
                </svg>
            );
        case "wifi":
            return (
                <svg {...iconProps}>
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
            );
        case "cpu":
            return (
                <svg {...iconProps}>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M15 2v2" />
                    <path d="M15 20v2" />
                    <path d="M2 15h2" />
                    <path d="M2 9h2" />
                    <path d="M20 15h2" />
                    <path d="M20 9h2" />
                    <path d="M9 2v2" />
                    <path d="M9 20v2" />
                </svg>
            );
        case "radio":
            return (
                <svg {...iconProps}>
                    <circle cx="12" cy="12" r="2" />
                    <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M7.76 7.76a6 6 0 0 0 0 8.48" />
                    <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
                </svg>
            );
        case "cube":
            return (
                <svg {...iconProps}>
                    <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
                    <path d="m3.27 6.96 8.73 4.89 8.73-4.89" />
                    <path d="M12 22V12" />
                </svg>
            );
        case "react":
            return (
                <svg {...iconProps}>
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                    <circle cx="12" cy="12" r="1.5" />
                </svg>
            );
        case "node":
            return (
                <svg {...iconProps}>
                    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
                    <path d="M12 12 3 7" />
                    <path d="M12 12v10" />
                    <path d="M12 12l9-5" />
                </svg>
            );
        case "server":
            return (
                <svg {...iconProps}>
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
            );
        case "database":
            return (
                <svg {...iconProps}>
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
            );
        case "layout":
            return (
                <svg {...iconProps}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                </svg>
            );
        case "code":
        default:
            return (
                <svg {...iconProps}>
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            );
    }
}

const skillClusters = [
    {
        number: "01",
        title: "Autonomous Systems & Robotics",
        tagline: "Perception, localization, and motion control stacks",
        skills: [
            { name: "ROS2", type: "ros", tag: "Nav2 / Nodes" },
            { name: "C++", type: "cpp", tag: "Modern C++" },
            { name: "Python", type: "python", tag: "Automation / AI" },
            { name: "YOLOv8", type: "vision", tag: "Detection" },
            { name: "LiDAR & SLAM", type: "lidar", tag: "Mapping" },
        ],
    },
    {
        number: "02",
        title: "Embedded Hardware & IoT",
        tagline: "Firmware, sensor bus telemetry, and mechanical prototyping",
        skills: [
            { name: "STM32", type: "microchip", tag: "Embedded C" },
            { name: "ESP32", type: "wifi", tag: "IoT / Wireless" },
            { name: "Arduino IDE", type: "cpu", tag: "Hardware" },
            { name: "LoRa & Telemetry", type: "radio", tag: "Long-Range" },
            { name: "3D CAD & Modeling", type: "cube", tag: "Rapid Prototyping" },
        ],
    },
    {
        number: "03",
        title: "Full Stack & Web Systems",
        tagline: "Responsive web architectures, database design, and REST APIs",
        skills: [
            { name: "React", type: "react", tag: "UI Engineering" },
            { name: "Node.js", type: "node", tag: "Runtime" },
            { name: "Express.js", type: "server", tag: "REST APIs" },
            { name: "MongoDB", type: "database", tag: "NoSQL" },
            { name: "MySQL", type: "database", tag: "Relational" },
            { name: "TailwindCSS", type: "layout", tag: "Styling" },
            { name: "JavaScript", type: "code", tag: "ES6+" },
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="section">
            <div>
                <h2 className="section-header">Technical Competencies</h2>
                <p className="skills-section-subtitle">
                    Core proficiencies spanning robotics systems, embedded firmware, and full stack software.
                </p>
            </div>

            <div className="skills-cluster-grid">
                {skillClusters.map((cluster) => (
                    <div key={cluster.number} className="skills-domain-card">
                        <div className="skills-domain-header">
                            <div className="skills-domain-number">{cluster.number}</div>
                            <div>
                                <h3 className="skills-domain-title">{cluster.title}</h3>
                                <p className="skills-domain-tagline">{cluster.tagline}</p>
                            </div>
                        </div>

                        <div className="skills-pill-group">
                            {cluster.skills.map((skill) => (
                                <div key={skill.name} className="skill-tech-badge">
                                    <TechIcon type={skill.type} />
                                    <span className="skill-tech-name">{skill.name}</span>
                                    <span className="skill-tech-tag">{skill.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
