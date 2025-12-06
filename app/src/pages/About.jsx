import React, { useState } from 'react';
// import cvFile from '../assets/Nilakshi_Madubashini_CV.pdf';
import '../styles/About.css';

function About() {
    const [msgVisible, setMsgVisible] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setMsgVisible(true);
        setTimeout(() => setMsgVisible(false), 2000);
    };

    return (
        <div className="about-me-container" id="about">
            <div className="grid-bg"></div>

            <div className="about-content">
                <h1 className="main-heading">About Me</h1>

                <div className="text-content">
                    <p className="highlight-text">
                        Hi, I am <span className="name-accent">Nilakshi Madubashini</span>, a Software Engineering undergraduate at SLIIT, pursuing a BSc(Hons) in Information Technology with a specialization in Software Engineering.
                    </p>

                    <p>
                        I have gained hands-on experience in modern web technologies, software development practices, and a range of programming languages throughout my academic journey. I enjoy solving problems, exploring new ideas, and building practical, real-world applications.
                    </p>

                    <p>
                        My passion lies in <span className="accent">full-stack development</span>, where I bring together frontend creativity and backend logic to create complete, user-centric solutions. I value collaboration and believe that working with others enhances both learning and innovation.
                    </p>
                </div>

                <div className="info-bar">
                    <div className="info-item">
                        <span className="info-label">Current GPA</span>
                        <span className="info-value">3.52</span>
                    </div>
                    <div className="divider"></div>
                    <div className="info-item">
                        <span className="info-label">Specialization</span>
                        <span className="info-value">Software Engineering</span>
                    </div>
                </div>

                <div className="skills-section">
                    <h2 className="skills-title">Core Strengths</h2>
                    <div className="skills-container">
                        <div className="skill-item">
                            <div className="skill-number">01</div>
                            <div className="skill-name">Full Stack Development</div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-number">02</div>
                            <div className="skill-name">Problem Solving</div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-number">03</div>
                            <div className="skill-name">Team Collaboration</div>
                        </div>
                        <div className="skill-item">
                            <div className="skill-number">04</div>
                            <div className="skill-name">UI/UX Design</div>
                        </div>
                    </div>
                </div>

                <div className="cta-wrapper">
                    <button onClick={handleClick} className="cta-button">
                        <span className="button-text">Download CV</span>
                        <div className="button-bg"></div>
                    </button>

                    <div className={`error-msg ${msgVisible ? 'show' : ''}`}>
                        CV download is currently not available
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
