import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../Hero.js';
import projectContent from './projectContent.js';  // Ensure this is the correct file path

const ProjectDetail = () => {
    const { id } = useParams(); // Get project ID from URL
    const project = useMemo(() => projectContent.find((item) => item.id === id), [id]);

    // Check if the project was found
    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div className="project-detail">

        </div>
    );
};

export default ProjectDetail;
