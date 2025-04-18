import React, { useState, useEffect } from 'react';
import styles from './hero.module.css';
import { motion } from 'framer-motion'; // Ensure we're using the motion library

const Hero = ({ title, paragraph, images, activeIndex }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    // Trigger animation on first mount
    useEffect(() => {
        setTriggerAnimation(true);
    }, []);

    // Reset the animation trigger when title changes
    useEffect(() => {
        setTriggerAnimation(false); // Reset animation
        setTimeout(() => setTriggerAnimation(true), 100); // Delay to trigger animation again
    }, [title]); // Dependency on title to re-trigger when title changes

    const isWorkSection = activeIndex === 0; // Adjust this condition to match your title

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: triggerAnimation ? 1 : 0 }} // Control opacity based on triggerAnimation
                transition={{ duration: 1 }}
            />
            <section className={styles.heroContainer}>
                <div className={styles.gradientBackground}></div>
                <section className={styles.heroTextContainer}>
                    <motion.div
                        className={styles.heroTextContainer}
                        key={triggerAnimation ? "active" : "inactive"}  // Use the same key for both elements
                        initial={{ opacity: 0, y: -30 }} // Start hidden
                        animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : -30 }} // Animate to normal position
                        transition={{ duration: 0.5, delay: 0.3 }}  // Adjust delay as needed
                    >
                        <motion.h1 className={styles.title}>
                            {title[0]} <br /> {title[1]}
                        </motion.h1>

                        {activeIndex !== 1 && (
                            <motion.p className={styles.paragraph}>
                                {paragraph}
                            </motion.p>
                        )}

                    </motion.div>

                    {/* Images fade-in and shift-in */}
                    {isWorkSection && (
                        <div className={styles.imageContainer}>
                            <motion.img
                                src={images.right}
                                alt="Right"
                                className={styles.leftImageInner}
                                initial={{ opacity: 0, y: -30, visibility: 'hidden' }} // Start hidden
                                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : -30, visibility: triggerAnimation ? 'visible' : 'hidden' }} // Animate to normal position and show
                                transition={{ duration: 0.7, delay: 1 }}
                            />
                            <motion.img
                                src={images.right2}
                                alt="Right"
                                className={styles.leftImageOuter}
                                initial={{ opacity: 0, y: -30, visibility: 'hidden' }} // Start hidden
                                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : -30, visibility: triggerAnimation ? 'visible' : 'hidden' }} // Animate to normal position and show
                                transition={{ duration: 0.7, delay: 1 }}
                            />
                            <motion.img
                                src={images.right}
                                alt="Right"
                                className={styles.rightImageInner}
                                initial={{ opacity: 0, y: -30, visibility: 'hidden' }} // Start hidden
                                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : -30, visibility: triggerAnimation ? 'visible' : 'hidden' }} // Animate to normal position and show
                                transition={{ duration: 0.7, delay: 1 }}
                            />
                            <motion.img
                                src={images.right2}
                                alt="Right"
                                className={styles.rightImageOuter}
                                initial={{ opacity: 0, y: -30, visibility: 'hidden' }} // Start hidden
                                animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : -30, visibility: triggerAnimation ? 'visible' : 'hidden' }} // Animate to normal position and show
                                transition={{ duration: 0.7, delay: 1 }}
                            />
                        </div>
                    )}
                </section>
            </section>
        </>
    );
};

export default Hero;
