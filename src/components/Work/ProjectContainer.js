import React, { useState, useEffect, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardWide from './ProjectCardWide';
import ProjectCardMobile from './ProjectCardMobile.js'
import styles from './projectContainer.module.css';
import decayTracker from '../../assets/images/decayTracker.png';
import decayTrackerIcon from '../../assets/images/decayTrackerIcon.png'
import krugg from '../../assets/images/krugg.png'
import kruggIcon from '../../assets/images/krugIconTwo.png'
import kruggIconTwo from '../../assets/images/kurggIcon.png'
import { motion } from 'framer-motion';
import content from './cardContent.js'
import bloomImg from '../../assets/images/1018bloom.PNG'
import twitchImg from '../../assets/images/twitchapp.PNG'


const ProjectContainer = ({ activeIndex }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    const items = useMemo(() => content, []);
    // Trigger animation when activeIndex changes
    useEffect(() => {
        setTriggerAnimation(false);
        setTimeout(() => setTriggerAnimation(true), 100);
    }, [activeIndex]);

    return (
        <>
            <motion.div
                className={styles.projectContainer}
                key={activeIndex} // Forces re-render when activeIndex changes
                initial={{ opacity: 0, y: 30 }} // Start slightly below
                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 30 }} // Animate in
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <ProjectCard
                    images={{
                        decayTrackerImg: decayTracker,
                        decayTrackerIconImg: decayTrackerIcon
                    }}
                    title={items[0].header1}
                    tech={items[0].header2}
                />
                <ProjectCardWide
                    images={{
                        kruggImg: krugg,
                        kruggIcon: kruggIcon,
                        kruggIconTwo: kruggIconTwo,
                    }}
                    title={items[1].header1}
                    tech={items[1].header2} />
            </motion.div>
            <motion.div
                className={styles.projectContainer}
                initial={{ opacity: 0, y: 30 }} // Start slightly below
                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 30 }} // Animate in
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <ProjectCardWide
                    images={{
                        kruggImg: bloomImg,
                        kruggIcon: kruggIcon,
                        kruggIconTwo: kruggIconTwo,
                    }}
                    title={items[2].header1}
                    tech={items[2].header2} />
                <ProjectCardMobile
                    images={{
                        decayTrackerImg: twitchImg,
                        decayTrackerIconImg: decayTrackerIcon
                    }}
                    title={items[3].header1}
                    tech={items[3].header2}
                />

            </motion.div>
        </>
    );
};

export default ProjectContainer;
