import React, { useState, useEffect, useRef } from 'react';
import '../styles/Project.css'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const cardRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Graphical Content Retention With Editable Charts and Layout Retention",
      description: "An advanced document processing tool integrating Detectron2 with Faster R-CNN and PaddleOCR for structured content extraction, text extraction with high accuracy using PaddleOCR, while custom algorithms like k-means clustering, contour analysis, and spatial reasoning for feature extraction from charts and graphs.",
      image: '/images/icon/graph.jpg',
      link: "Projects/GraphicalContent.html"
    },
    {
      id: 2,
      title: "A Dual Transformer Pipeline with Conformer-Based Speech Recognition and Decoder-Only Language Modeling",
      description: "A modular speech AI system decoupling ASR and LLM components, using a Conformer-based Transformer with ResMHA for transcription and a lightweight decoder-only LLM for generating contextually relevant responses.",
      image: '/images/icon/audio.png',
      link: "Projects/Conformer.html"
    },
    {
      id: 3,
      title: "CMMS (Class Marking and Management System",
      description: "CMMS is a spreadsheet-style desktop application allowing users to manage data via rows and columns, perform calculations, and save/load files built using C++ and Qt Framework",
      image: '/images/icon/cmms.jpg',
      link: "Projects/CMMS.html"
    },
    {
      id: 4,
      title: "Sathi : Social Media App",
      description: "Sathi is a minimalistic family- and friend-focused social network prioritizing meaningful connections. Users share updates, photos, views, and comments within a trusted circle.",
      image: '/images/icon/sathi.jpg',
      link: "Projects/Sathi.html"
    },
    {
      id: 5,
      title: "Custom Website",
      description: "A full-stack portfolio website built with React frontend and MERN backend. Features include dynamic project showcases, contact form integration, responsive design, and optimized performance. Implements secure data handling, interactive UI components, and a scalable architecture for seamless user experience.",
      image: '/images/icon/q.jpg',
      link: "Projects/Portfolio.html"
    }
  ];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProject();
    } else if (isRightSwipe) {
      prevProject();
    }
  };

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
          
          <div 
            className="project-card"
            ref={cardRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
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
        
        <div className="navigation-hints">
          <p className="navigation-hint desktop-hint">Use ← → arrow keys to navigate</p>
          <p className="navigation-hint mobile-hint">Swipe left or right to navigate</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;