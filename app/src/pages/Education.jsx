import React, { useState } from 'react';
import '../styles/Education.css';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const educationData = [
    {
        degree: 'Bachelor of Science in Information Technology',
        institution: 'Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        period: '2023 – Present',
        description: 'Focusing on full-stack development, software engineering, and building modern web applications using Java, React, and Node.js.',
        gpa: '3.45 / 4.0',
    },
    {
        degree: 'Advanced Level – Physical Science',
        institution: 'Janadipathi Balika Vidyalaya',
        location: 'Sri Lanka',
        period: '2017 – 2021',
        description: 'Completed A/Ls with Physics, Combined Mathematics, and Chemistry.',
        gpa: null,
    },
];

const certifications = [
    {
        title: 'CMJD – Certificate in Comprehensive Mastering Java Development',
        issuer: 'IJSE',
        icon: <FaJava />,
        date: '2023',
        credentialUrl: '#',
        color: 'react',
    },
    {
        title: 'Developer Stack Master Program (Diploma)',
        issuer: 'Developers Stack Academy',
        icon: <FaCertificate />,
        date: '2024',
        credentialUrl: '#',
        color: 'fullstack',
    },
    {
        title: 'Web Design for Beginners',
        issuer: 'University of Moratuwa',
        icon: <FaCertificate />,
        date: '2022',
        credentialUrl: '#',
        color: 'js',
    },
    {
        title: 'MongoDB Java Developer Path',
        issuer: 'MongoDB',
        icon: <SiMongodb />,
        date: '2025',
        credentialUrl: '#',
        color: 'design',
    },
    {
        title: 'Server-Side Web Programming',
        issuer: 'University of Moratuwa',
        icon: <FaCertificate />,
        date: '2025',
        credentialUrl: '#',
        color: 'js',
    },
];

const tabs = ['Education', 'Certifications'];

const Education = () => {
    const [activeTab, setActiveTab] = useState('Education');

    return (
        <section className="education-section" id="education">
            <div className="header">
                <h1>Education <span>&</span> Certifications</h1>
                <p className="edu-subtitle">Academic background and professional credentials</p>
            </div>

            <div className="edu-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`edu-tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === 'Education' ? <FaGraduationCap /> : <FaCertificate />}
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === 'Education' && (
                <div className="edu-timeline">
                    {educationData.map((edu, index) => (
                        <div className="edu-card" key={index}>
                            <div className="edu-card-left">
                                <div className="edu-icon-wrap">
                                    <FaGraduationCap />
                                </div>
                                <div className="edu-line" />
                            </div>
                            <div className="edu-card-right">
                                <div className="edu-card-inner">
                                    <div className="edu-card-top">
                                        <h3>{edu.degree}</h3>
                                        {edu.gpa && <span className="gpa-badge">GPA {edu.gpa}</span>}
                                    </div>
                                    <p className="edu-institution">{edu.institution}</p>
                                    <div className="edu-meta">
                                        <span><FaMapMarkerAlt /> {edu.location}</span>
                                        <span><FaCalendarAlt /> {edu.period}</span>
                                    </div>
                                    <p className="edu-description">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'Certifications' && (
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div className={`cert-card ${cert.color}`} key={index}>
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <span className="cert-date"><FaCalendarAlt /> {cert.date}</span>
                            </div>
                            <a href={cert.credentialUrl} className="cert-link" target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt /> View
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Education;