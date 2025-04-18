import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectCardWide from './ProjectCardWide';
import ProjectCardMobile from './ProjectCardMobile.js';
import styles from './projectContainer.module.css';
import { motion } from 'framer-motion';
import content from './cardContent.js';

// Import images
import decayTracker from '../../assets/images/decayTracker.png';
import decayTrackerIcon from '../../assets/images/decayTrackerIcon.png';
import krugg from '../../assets/images/krugg.png';
import kruggIcon from '../../assets/images/krugIconTwo.png';
import kruggIconTwo from '../../assets/images/kurggIcon.png';
import bloomImg from '../../assets/images/1018bloom.PNG';
import twitchImg from '../../assets/images/twitchapp.PNG';

const ProjectContainer = ({ activeIndex }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const navigate = useNavigate(); // For navigation

    const items = useMemo(() => content, []);

    // Trigger animation when activeIndex changes
    useEffect(() => {
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 100);
    }, [activeIndex]);

    // Function to handle navigation
    const handleNavigate = (id) => {
        console.log(`Navigating to project with ID: ${id}`); // Debug log
        navigate(`/project/${id}`); // Navigate to project detail page
        window.scrollTo(0, 0); // Scroll to top for better UX
    };

    return (
        <>
            <motion.div
                className={styles.projectContainer}
                key={activeIndex} // Forces re-render when activeIndex changes
                initial={{ opacity: 0, y: 30 }} // Start slightly below
                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 30 }} // Animate in
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Pass the onClick handler here */}
                <ProjectCard
                    images={{
                        decayTrackerImg: decayTracker,
                        decayTrackerIconImg: decayTrackerIcon
                    }}
                    title={items[0].header1}
                    tech={items[0].header2}
                    bgColor="#D6A2F0"
                    projectId="decay-tracker"
                    onClick={() => handleNavigate("decay-tracker")} // Pass onClick handler here
                />
                <ProjectCardWide
                    images={{
                        kruggImg: krugg,
                        kruggIcon: kruggIcon,
                        kruggIconTwo: kruggIconTwo,
                    }}
                    title={items[1].header1}
                    tech={items[1].header2}
                    bgColor="#596CAD"
                    onClick={() => handleNavigate("krugg")} // Same for other components
                />
            </motion.div>

            <motion.div
                className={styles.projectContainer}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <ProjectCardWide
                    images={{
                        kruggImg: bloomImg,
                        kruggIcon: kruggIcon,
                        kruggIconTwo: kruggIconTwo,
                    }}
                    title={items[2].header1}
                    tech={items[2].header2}
                    bgColor="#B6CFB6"
                    onClick={() => handleNavigate("bloom-shop")} // Adjust the ID if needed
                />
                <ProjectCardMobile
                    images={{
                        decayTrackerImg: twitchImg,
                        decayTrackerIconImg: decayTrackerIcon
                    }}
                    title={items[3].header1}
                    tech={items[3].header2}
                    bgColor="#FFAEA5"
                    onClick={() => handleNavigate("prediction-generator")} // Adjust the ID if needed
                />
            </motion.div>
        </>
    );
};

export default ProjectContainer;
