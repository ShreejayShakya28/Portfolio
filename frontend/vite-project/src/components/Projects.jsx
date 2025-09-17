import React, { useState, useEffect } from 'react';
import '../styles/Project.css'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Graphical Content Retention With Editable Charts and Layout Retention",
      description: "An advanced document processing tool integrating Detectron2 with Faster R-CNN and PaddleOCR for structured content extraction, text extraction with high accuracy using PaddleOCR, while custom algorithms like k-means clustering, contour analysis, and spatial reasoning for feature extraction from charts and graphs.",
      image: "https://via.placeholder.com/200x150/2b6cb0/ffffff?text=Project+1",
      link: "Projects/GraphicalContent.html"
    },
    {
      id: 2,
      title: "A Dual Transformer Pipeline with Conformer-Based Speech Recognition and Decoder-Only Language Modeling",
      description: "A modular speech AI system decoupling ASR and LLM components, using a Conformer-based Transformer with ResMHA for transcription and a lightweight decoder-only LLM for generating contextually relevant responses.",
      image: "https://via.placeholder.com/200x150/4a5568/ffffff?text=Project+2",
      link: "Projects/Conformer.html"
    },
    {
      id: 3,
      title: "Custom Website",
      description: "A full-stack portfolio website built with React frontend and MERN backend. Features include dynamic project showcases, contact form integration, responsive design, and optimized performance. Implements secure data handling, interactive UI components, and a scalable architecture for seamless user experience.",
      image: "https://via.placeholder.com/200x150/2d3748/ffffff?text=Project+3",
      link: "Projects/Portfolio.html"
    },
    {
      id: 4,
      title: "Sathi : Social Media App",
      description: "Modern social networking platform with user profiles, post sharing, real-time messaging, and content discovery features. Implemented with React Native for mobile compatibility and Node.js backend.",
      image: "https://via.placeholder.com/200x150/1a202c/ffffff?text=Project+4",
      link: "Projects/Example.html"
    },
    {
      id: 5,
      title: "CMMS (Class Marking and Management System",
      description: "CMMS is a spreadsheet-style desktop application allowing users to manage data via rows and columns, perform calculations, and save/load files built using C++ and Qt Framework",
      image: "https://via.placeholder.com/200x150/1a202c/ffffff?text=Project+4",
      link: "Projects/Example.html"
    }
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      } else if (event.key === 'ArrowRight') {
        setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [projects.length]);

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleViewMore = () => {
    window.location.href = projects[currentProject].link;
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1>My Projects</h1>
        
        <div className="project-carousel">
          <button className="nav-button prev" onClick={prevProject}>
            ‹
          </button>
          
          <div className="project-card">
            <div className="card-content">
              <div className="text-content">
                <h2 className="project-title">{projects[currentProject].title}</h2>
                <p className="project-description">{projects[currentProject].description}</p>
                <button className="view-more-btn" onClick={handleViewMore}>
                  View More →
                </button>
              </div>
              <div className="image-content">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className="project-image"
                />
              </div>
            </div>
          </div>
          
          <button className="nav-button next" onClick={nextProject}>
            ›
          </button>
        </div>
        
        <div className="project-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentProject ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
        
        <p className="navigation-hint">Use ← → arrow keys to navigate</p>
      </div>
    </section>
  );
};

export default Projects;