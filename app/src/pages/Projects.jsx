import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";
import project1Image from "../assets/project1.png";
import neomartImage from "../assets/neomart.png";
import projectImage3 from "../assets/projectImg3.png";
import dinexImg from "../assets/dinex.png";

const projectList = [
    {
        title: 'NeoMart',
        subtitle: 'Shopping Web Application',
        description: 'A full-stack e-commerce platform with a dynamic UI, secure backend, and seamless shopping experience.',
        tools: ['Angular', 'Spring Boot', 'REST APIs', 'Material Design'],
        codeLink: 'https://github.com/madubashinii/NeoMart',
        demoLink: 'https://yourliveprojectdemo.com',
        image: neomartImage,
    },
    {
        title: 'DineX',
        subtitle: 'Restaurant Management App',
        description: 'A full-stack restaurant web app where customers can view menus, make reservations, and place orders.',
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
        codeLink: 'https://github.com/madubashinii/DineX',
        demoLink: 'https://yourliveprojectdemo.com',
        image: dinexImg,
    },
    {
        title: 'WildWaves',
        subtitle: 'Boat Safari Trip Management System',
        description: 'A booking and management system designed to streamline boat safari reservations and trip scheduling.',
        tools: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        codeLink: 'https://github.com/madubashinii/wildwaves',
        demoLink: 'https://yourliveprojectdemo.com',
        image: projectImage3,
    },
    {
        title: 'Boutique',
        subtitle: 'Hotel Management System',
        description: 'A hotel reservation and management system with booking, room management, and admin dashboard features.',
        tools: ['Java', 'JSP', 'Servlets', 'MySQL', 'Apache Tomcat'],
        codeLink: 'https://github.com/madubashinii/Boutique',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <span className="section-label">PORTFOLIO</span>
                <h1 className="projects-title">Featured Projects</h1>
                <p className="projects-subtitle">Things I've built that I'm proud of</p>
            </div>

            <div className="projects-list">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="image-overlay" />
                        </div>

                        <div className="project-content">
                            <div className="project-title-group">
                                <h3 className="project-name">{project.title}</h3>
                                <span className="project-subtitle">{project.subtitle}</span>
                            </div>
                            <p className="description">{project.description}</p>
                            <div className="tool-tags">
                                {project.tools.map((tool, i) => (
                                    <span className="tool-tag" key={i}>{tool}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                                    <FaGithub /> Code
                                </a>
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="see-all-container">
                <a href="https://github.com/madubashinii" target="_blank" rel="noopener noreferrer" className="see-all-button">
                    <FaGithub /> See All on GitHub
                </a>
            </div>
        </section>
    );
}

export default Projects;