import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectContent from './projectContent.js';
import styles from './projectDetail.module.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectContent.find(item => item.id === id);
        if (foundProject) {
            setProject(foundProject);
            // Scroll to top on component mount
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!project) {
        return (
            <div className={styles.notFound}>
                <h2>Project not found</h2>
                <button onClick={() => navigate('/')}>Back to Home</button>
            </div>
        );
    }

    return (
        <motion.div
            className={styles.projectDetail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className={styles.projectContainer}>
                <div className={styles.header} style={{ background: project.bgColor }}>
                    <button className={styles.backButton} onClick={() => navigate('/')}>
                        &larr; Back
                    </button>
                    <h1 className={styles.title}>{project.header1}</h1>
                    <h2 className={styles.tech}>{project.header2}</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.description}>
                        <h3>About</h3>
                        <p>{project.paragraph}</p>
                    </div>

                    <div className={styles.projectImages}>
                        <motion.img
                            src={project.fullImage}
                            alt={project.header1}
                            className={styles.mainImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        />
                    </div>

                    <div className={styles.features}>
                        <h3>Features</h3>
                        <ul>
                            {project.features?.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                >
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.techStack}>
                        <h3>Tech Stack</h3>
                        <div className={styles.techTags}>
                            {project.techStack?.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className={styles.techTag}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (index * 0.05), duration: 0.4 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h3>Links</h3>
                        <div className={styles.buttonContainer}>
                            {project.links?.live && (
                                <motion.a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Live
                                </motion.a>
                            )}
                            {project.links?.github && (
                                <motion.a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.button} ${styles.github}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    GitHub
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;