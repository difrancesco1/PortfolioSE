import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardWide from './ProjectCardWide';
import styles from './projectContainer.module.css';
import decayTracker from '../../assets/images/decayTracker.png';
import decayTrackerIcon from '../../assets/images/decayTrackerIcon.png'
import krugg from '../../assets/images/krugg.png'
import { motion } from 'framer-motion';

const ProjectContainer = ({ activeIndex }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    // Trigger animation when activeIndex changes
    useEffect(() => {
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 100);
    }, [activeIndex]);

    return (
        <motion.div
            className={styles.projectContainer}
            key={activeIndex} // Forces re-render when activeIndex changes
            initial={{ opacity: 0, y: 30 }} // Start slightly below
            animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 30 }} // Animate in
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <ProjectCard images={{
                decayTrackerImg: decayTracker,
                decayTrackerIconImg: decayTrackerIcon
            }} />
            <ProjectCardWide images={{
                kruggImg: krugg
            }} />
        </motion.div>
    );
};

export default ProjectContainer;
