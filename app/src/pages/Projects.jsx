import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import "../styles/Projects.css";
import project1Image from "../assets/project1.png";
import projectImage from "../assets/projectImg.png";
import projectImage3 from "../assets/projectImg3.png";
import home_loggedUser from "../assets/home_loggedUser.png"

const projectList = [
    {
        title: 'NeoMart - Shopping Web Application',
        description: 'A full-stack e-commerce platform with a dynamic UI, secure backend, and seamless shopping experience.',
        tools: 'Angular, Spring Boot, REST APIs, Material Design',
        codeLink: 'https://github.com/madubashinii/NeoMart',
        demoLink: 'https://yourliveprojectdemo.com',
        image: projectImage,
    },
    {
        title: 'VYBE - Workout Tracker Web App',
        description: 'A full-stack fitness app to log workouts, track progress, and manage custom workout plans.',
        tools: 'Next.js, Node.js, Express.js, MongoDB, JWT',
        codeLink: 'https://github.com/madubashinii/VYBE',
        demoLink: 'https://yourliveprojectdemo.com',
        image: home_loggedUser,
    },
    {
        title: 'WildWaves - Boat Safari Trip Management System',
        description: 'A booking and management system designed to streamline boat safari reservations and trip scheduling.',
        tools: 'HTML, CSS, JS, PHP, MySQL, XAMMP server',
        codeLink: 'https://github.com/madubashinii/wildwaves',
        demoLink: 'https://yourliveprojectdemo.com',
        image: projectImage3,
    },
    {
        title: 'Boutique - Hotel Management System ',
        description: 'A hotel reservation and management system with booking, room management, and admin dashboard features.',
        tools: 'Java, JSP, Servlets, HTML, CSS, JS, MySQL, Apache Tomcat',
        codeLink: 'https://github.com/madubashinii/Boutique',
        demoLink: 'https://yourliveprojectdemo.com',
        image: project1Image,
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h1 className="projects-title"> Featured Projects</h1>

            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="description">{project.description}</p>
                            <p className="tools">Tools:  {project.tools}</p>
                            <div className="project-links">
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn">
                                    <FaGithub /> Code
                                </a>
                                {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn demo">
                                    <FaLink /> Demo
                                </a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="see-all-container">
                <a href="https://github.com/madubashinii" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="see-all-button">
                    See All Projects
                </a>
            </div>
        </section>
    );
}

export default Projects;

