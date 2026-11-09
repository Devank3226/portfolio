import embeddedTraining from '../assets/embedded_training.jpeg';
import esp32Testing from '../assets/esp32_testing.jpeg';

const experiences = [
    {
        num: "01",
        title: "Summer Intern — DST Project",
        period: "June 2026 — July 2026",
        org: "IoT for Smart Technology and Farming",
        description: `Completed an internship on microcontrollers like STM32 and ESP32. Worked on real-world applications using Gateway Modules, LoRa module, ESP32, and NPK sensor to measure and receive NPK values of farming land soil. Researched components and measurements required for building a rover-like robot with integrated farming machines for automated sowing and harvesting. Received training on embedded boards for STM32 to understand industrial-level working.`,
        images: [embeddedTraining, esp32Testing],
        tags: ["STM32", "ESP32", "IoT Deployment", "LoRa", "Real-Time Data", "Robotics"],
        zIndex: 10,
    },
    {
        num: "02",
        title: "Internship at KFCL",
        period: "March 2025 — August 2025",
        org: "FSM Deployment and Retrieval System",
        description: `Applied automated methods in farming as part of the Field Sensor Module Deployment and Retrieval team. Designed and implemented a mechanism attachable to a drone to deploy and retrieve sensor modules autonomously. The mechanism involved Actuators, Lidar, and Depth Camera with a custom-trained YOLOv8 model running on Jetson Orin Nano for detecting and ranging distance and angle of the module.`,
        images: [embeddedTraining, esp32Testing],
        tags: ["ROS2", "Lidar", "Depth Camera", "YOLOv8", "Actuator", "3D Printing", "Jetson Orin Nano"],
        zIndex: 20,
    },
];

function Experience() {
    return (
        <section id="experience" className="section">
            <h2 className="section-header">Experience</h2>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {experiences.map((exp) => (
                    <div key={exp.num} className="exp-card" style={{ zIndex: exp.zIndex }}>
                        <div style={{ display: 'flex', gap: '2.5rem' }}>
                            {/* Left: Details */}
                            <div style={{ flex: 1 }}>
                                <div className="exp-number">{exp.num}</div>
                                <h3 style={{
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 700,
                                    fontSize: '1.5rem',
                                    marginTop: '1rem',
                                    letterSpacing: '-0.02em'
                                }}>
                                    {exp.title}
                                </h3>
                                <div style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.875rem',
                                    color: 'var(--color-text-muted)',
                                    marginTop: '0.375rem'
                                }}>
                                    {exp.period}
                                </div>
                                <div style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.875rem',
                                    color: 'var(--color-accent-dark)',
                                    fontWeight: 600,
                                    marginTop: '0.25rem'
                                }}>
                                    {exp.org}
                                </div>
                                <p style={{
                                    fontSize: '0.9rem',
                                    lineHeight: 1.7,
                                    color: 'var(--color-text-muted)',
                                    marginTop: '1.25rem',
                                    textAlign: 'justify'
                                }}>
                                    {exp.description}
                                </p>
                            </div>

                            {/* Right: Images + Tags */}
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: '0.5rem', borderRadius: '1rem', overflow: 'hidden' }}>
                                    {exp.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${exp.title} photo ${i + 1}`}
                                            style={{
                                                width: '50%',
                                                height: '220px',
                                                objectFit: 'cover',
                                                borderRadius: '0.75rem'
                                            }}
                                        />
                                    ))}
                                </div>
                                <div style={{ marginTop: '1.25rem' }}>
                                    <div style={{
                                        fontWeight: 600,
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--color-text-muted)',
                                        marginBottom: '0.625rem'
                                    }}>
                                        Domains
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="exp-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
