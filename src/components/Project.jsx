import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import byows from '../assets/BYOWS.png';
import encryption from '../assets/encryption.png';
import photoframe from '../assets/photoframe.png';
import career from '../assets/career.png';
import weather from '../assets/weather.png';
import missionplanner from '../assets/missionplanner.jpg';
import embeddedTraining from '../assets/embedded_training.jpeg';
import objectDetection from '../assets/object_detection.jpeg';
import autonavigation from '../assets/autonavigation.jpg';

const projects = [
    {
        number: "01",
        category: "IoT & Embedded Systems",
        title: "Real-Time Weather Station using Raspberry Pi",
        description: "Engineered an autonomous outdoor meteorological station using Raspberry Pi and BME280 sensors for atmospheric telemetry, coupled with calibrated magnetic reed switches for wind speed and rainfall metrics. Automated real-time logging into an SQL database with a live dashboard for historical climate analysis.",
        image: byows,
        tags: ["Raspberry Pi", "Python", "BME280", "Anemometer", "SQL Database"],
    },
    {
        number: "02",
        category: "Systems & Security",
        title: "File Encryption Utility Using C++",
        description: "Built a high-performance command-line file security tool in C++ utilizing bitwise XOR stream transformations and custom key schedules. Engineered with zero external dependencies to deliver fast, deterministic local encryption and decryption for arbitrary text and binary files.",
        image: encryption,
        tags: ["C++", "Cryptography", "XOR Cipher", "Binary I/O", "CLI"],
    },
    {
        number: "03",
        category: "Edge AI & Hardware",
        title: "Voice-Activated AI Digital Photo Frame",
        description: "Architected a voice-interactive smart display powered by Nvidia Jetson Nano with CUDA and cuDNN hardware acceleration. Implemented real-time on-device speech recognition models for hands-free album navigation, photo queries, and automated voice control.",
        image: photoframe,
        tags: ["Jetson Nano", "Speech Recognition", "CUDA", "cuDNN", "Python"],
    },
    {
        number: "04",
        category: "Web & Machine Learning",
        title: "Career Recommendation System",
        description: "Designed a full-stack career advisory platform leveraging React and predictive scoring models to assess candidate skill proficiencies, interests, and academic background against dynamic industry hiring benchmarks and skill taxonomy.",
        image: career,
        tags: ["React", "Machine Learning", "TailwindCSS", "REST API"],
    },
    {
        number: "05",
        category: "Full Stack Web",
        title: "Real-Time Atmospheric Tracking App",
        description: "Created a responsive meteorology web application delivering hyper-local forecasts, air quality indices, and hourly wind vectors with real-time OpenWeather API integrations, geolocation-based updates, and adaptive weather condition theming.",
        image: weather,
        tags: ["React", "TailwindCSS", "OpenWeather API", "Geolocation"],
    },
    {
        number: "06",
        category: "Aerial Robotics",
        title: "Autonomous Drone Navigation with Mission Planner",
        description: "Configured autonomous waypoint navigation and fail-safe return protocols on a PixHawk flight controller using Mission Planner and MAVLink telemetry, enabling precision aerial surveying and waypoint-guided flight routes.",
        image: missionplanner,
        tags: ["PixHawk", "Mission Planner", "GPS & Telemetry", "MAVLink"],
    },
    {
        number: "07",
        category: "Biomedical & AI",
        title: "AI Health Risk Assessment for Lung Cancer",
        description: "Implemented a clinical risk scoring web tool that correlates patient demographic data, lifestyle indicators, and symptom patterns to predict pulmonary health risk profiles with actionable diagnostic recommendations.",
        image: embeddedTraining,
        tags: ["React", "Machine Learning", "Health Analytics", "TailwindCSS"],
    },
    {
        number: "08",
        category: "Robotics & Computer Vision",
        title: "Module Detection & Grabbing Mechanism",
        description: "Architected a vision-guided robotic manipulation system on Jetson Orin Nano. Utilized fine-tuned YOLOv8 bounding boxes combined with depth camera point clouds for real-time 3D pose estimation and precision gripper actuation.",
        image: objectDetection,
        tags: ["Jetson Orin Nano", "YOLOv8", "ROS2", "Depth Camera", "Actuators"],
    },
    {
        number: "09",
        category: "Autonomous Systems",
        title: "Autonomous Robot Navigation using ROS2",
        description: "Deployed an autonomous mobile robot (AMR) utilizing the ROS2 Nav2 stack, 2D LiDAR SLAM for real-time occupancy grid mapping, and adaptive Monte Carlo localization (AMCL) with closed-loop motor encoder feedback.",
        image: autonavigation,
        tags: ["Jetson Nano", "LiDAR", "ROS2", "Nav2 Stack", "Motor Encoders"],
    },
];

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-overlay" />
            <div className="project-content">
                <div>
                    <div className="project-meta-row">
                        <span className="project-number-badge">{project.number}</span>
                        <span className="project-category-badge">{project.category}</span>
                    </div>
                    <h3 className="project-card-title">
                        {project.title}
                    </h3>
                    <p className="project-card-description">
                        {project.description}
                    </p>
                </div>
                <div className="project-tag-container">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Project() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const [scrollDistance, setScrollDistance] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateScrollDistance = useCallback(() => {
        if (trackRef.current) {
            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            // Calculate exact travel distance needed for the last card to fully reveal
            const extraPadding = 80;
            const maxTravel = Math.max(0, trackWidth - viewportWidth + extraPadding);
            setScrollDistance(maxTravel);
        }
    }, []);

    useEffect(() => {
        updateScrollDistance();
        window.addEventListener('resize', updateScrollDistance);
        const timer = setTimeout(updateScrollDistance, 250);
        return () => {
            window.removeEventListener('resize', updateScrollDistance);
            clearTimeout(timer);
        };
    }, [updateScrollDistance]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            const idx = Math.min(
                projects.length - 1,
                Math.max(0, Math.floor(v * projects.length))
            );
            setActiveIndex(idx);
        });
    }, [scrollYProgress]);

    return (
        <section
            id="projects"
            ref={containerRef}
            style={{
                height: `${projects.length * 75}vh`,
                position: 'relative'
            }}
        >
            <div className="project-sticky-wrapper">
                {/* Header with live project counter */}
                <div className="project-header-container">
                    <div>
                        <h2 className="section-header">Projects</h2>
                        <p className="project-section-subtitle">
                            Autonomous systems, embedded computing, and full-stack software
                        </p>
                    </div>

                    {/* Minimalist Index Indicator */}
                    <div className="project-tracker">
                        <div className="project-tracker-text">
                            <span className="project-tracker-current">
                                {String(activeIndex + 1).padStart(2, '0')}
                            </span>
                            <span className="project-tracker-slash">/</span>
                            <span className="project-tracker-total">
                                {String(projects.length).padStart(2, '0')}
                            </span>
                        </div>
                        <div className="project-tracker-track">
                            <motion.div
                                className="project-tracker-thumb"
                                style={{ scaleX: scrollYProgress }}
                            />
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrolling Track */}
                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="project-track"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.number} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Project;
