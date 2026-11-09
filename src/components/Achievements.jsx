function AchievementIcon({ type }) {
    const iconProps = {
        width: 18,
        height: 18,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "achievement-svg"
    };

    switch (type) {
        case "patent":
            return (
                <svg {...iconProps}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-4" />
                    <path d="m9 15 3-3 3 3" />
                </svg>
            );
        case "leadership":
            return (
                <svg {...iconProps}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            );
        case "robotics":
        default:
            return (
                <svg {...iconProps}>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <circle cx="9" cy="9" r="1.5" />
                    <circle cx="15" cy="9" r="1.5" />
                    <path d="M9 15h6" />
                    <path d="M12 2v2" />
                </svg>
            );
    }
}

const credentials = {
    patents: [
        {
            title: "Voice Activated AI Digital Photo Frame",
            status: "Patent Filed",
            type: "Utility Patent",
            domain: "Edge AI & Speech Recognition",
            description: "Filed patent application for a voice-interactive smart display leveraging on-device accelerated natural language processing, automated query parsing, and hands-free multimedia navigation.",
        },
        {
            title: "Intelligent Drone-Based FSM Deployment & Retrieval",
            status: "Patent Filed",
            type: "Utility Patent",
            domain: "Autonomous Aerial Robotics",
            description: "Autonomous aerial mechanism and visual servoing control system utilizing LiDAR, depth perception, and real-time YOLOv8 object detection for precision agricultural field sensor deployment.",
        },
    ],
    leadership: [
        {
            title: "Chairperson — IEEE Student Branch",
            status: "Elected Term",
            tenure: "2026–27",
            domain: "Institutional Governance",
            description: "Directing the executive board, overseeing research symposiums, regional hackathons, and fostering technical mentorship initiatives across engineering departments.",
        },
        {
            title: "Innovation Head — Drobotics Lab",
            status: "Executive Lead",
            tenure: "2026–27",
            domain: "Robotics R&D",
            description: "Driving research methodology, rapid prototyping workflows, and strategic robotics innovation roadmaps across autonomous systems divisions.",
        },
        {
            title: "Technical Head — Enkindle Club",
            status: "Appointed Lead",
            tenure: "2026–27",
            domain: "Developer Relations",
            description: "Curating technical bootcamps, administering developer infrastructure, and directing full-stack student development projects.",
        },
    ],
    technical: [
        {
            title: "Head of Quadruped Robotics — Drobotics Lab",
            status: "Division Lead",
            tenure: "2025–26",
            domain: "Quadrupedal Locomotion",
            description: "Led mechanical design, gait simulation, and kinematics development for autonomous four-legged robots, focusing on terrain adaptability and motor control.",
        },
        {
            title: "IoT Team Lead — IEEE",
            status: "Project Lead",
            tenure: "2025–26",
            domain: "Sensor Networks",
            description: "Architected distributed microcontroller sensor nodes, long-range LoRa networks, and cloud telemetry ingestion pipelines for real-time field deployments.",
        },
    ],
};

function PatentCard({ item }) {
    return (
        <div className="credential-card credential-card-patent">
            <div className="credential-top-bar">
                <div className="credential-icon-wrap credential-icon-patent">
                    <AchievementIcon type="patent" />
                </div>
                <div className="credential-badge-patent">
                    <span className="credential-pulse-dot" />
                    {item.status}
                </div>
            </div>

            <div className="credential-meta-label">{item.domain}</div>
            <h3 className="credential-title">{item.title}</h3>
            <p className="credential-desc">{item.description}</p>

            <div className="credential-footer">
                <span className="credential-type-tag">{item.type}</span>
                <span className="credential-verified-tag">Intellectual Property</span>
            </div>
        </div>
    );
}

function RoleCard({ item, iconType }) {
    return (
        <div className="credential-card">
            <div className="credential-top-bar">
                <div className="credential-icon-wrap">
                    <AchievementIcon type={iconType} />
                </div>
                <div className="credential-badge-tenure">{item.tenure}</div>
            </div>

            <div className="credential-meta-label">{item.domain}</div>
            <h3 className="credential-title">{item.title}</h3>
            <p className="credential-desc">{item.description}</p>

            <div className="credential-footer">
                <span className="credential-type-tag">{item.status}</span>
            </div>
        </div>
    );
}

function Achievements() {
    return (
        <section id="achievements" className="section">
            <div>
                <h2 className="section-header">Patents & Leadership</h2>
                <p className="achievements-section-subtitle">
                    Official intellectual property filings, institutional leadership appointments, and research divisions.
                </p>
            </div>

            <div className="achievements-content">
                {/* Patents Group */}
                <div className="credential-group">
                    <div className="credential-group-header">
                        <span className="credential-group-num">01</span>
                        <h3 className="credential-group-title">Patents & Intellectual Property</h3>
                    </div>
                    <div className="credential-grid">
                        {credentials.patents.map((item) => (
                            <PatentCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>

                {/* Leadership Group */}
                <div className="credential-group">
                    <div className="credential-group-header">
                        <span className="credential-group-num">02</span>
                        <h3 className="credential-group-title">Executive & Institutional Leadership</h3>
                    </div>
                    <div className="credential-grid">
                        {credentials.leadership.map((item) => (
                            <RoleCard key={item.title} item={item} iconType="leadership" />
                        ))}
                    </div>
                </div>

                {/* Technical Roles Group */}
                <div className="credential-group">
                    <div className="credential-group-header">
                        <span className="credential-group-num">03</span>
                        <h3 className="credential-group-title">Technical & Research Appointments</h3>
                    </div>
                    <div className="credential-grid">
                        {credentials.technical.map((item) => (
                            <RoleCard key={item.title} item={item} iconType="robotics" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
