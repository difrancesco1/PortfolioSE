import React, { useState } from 'react';
import styles from './projectCardMobile.module.css';
import { motion } from 'framer-motion';
import '../../App.css';


const ProjectCard = ({ images, title, tech, bgColor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={styles.card} style={{ background: bgColor }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
                y: -10, // Moves the card slightly upward on hover
                boxShadow: '0px 0px 100px rgb(255, 255, 255)',
            }}
            transition={{ delay: 0, duration: 0.3 }}
        >
            <motion.div className={styles.textContainer}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.boldtitle}>{tech}</h1>
            </motion.div>

            {/* Main project image */}
            <motion.img
                src={images.decayTrackerImg}
                className={styles.projectImage}
                animate={{
                    y: isHovered ? 15 : 0, // Move down when hovered
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Hover Reveal Image outside the card */}
            <motion.img
                src={images.decayTrackerIconImg}
                className={styles.extraImage} // FIX: Make sure it matches the CSS class
                initial={{ y: 50, opacity: 0 }} // Start hidden slightly below
                animate={{
                    y: isHovered ? 0 : 30, // Move up and fade in
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </motion.div>
    );
};

export default ProjectCard;
