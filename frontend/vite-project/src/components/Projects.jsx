import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment integration, inventory management, and real-time order tracking. Implemented responsive design and optimized for performance.",
      image: "https://via.placeholder.com/200x150/2b6cb0/ffffff?text=Project+1",
      link: "/project/1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering options. Built using React, Redux, and Socket.io for seamless user experience.",
      image: "https://via.placeholder.com/200x150/4a5568/ffffff?text=Project+2",
      link: "/project/2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application providing real-time weather data, forecasts, and location-based services. Integrated multiple APIs and implemented data visualization with charts and maps for comprehensive weather insights.",
      image: "https://via.placeholder.com/200x150/2d3748/ffffff?text=Project+3",
      link: "/project/3"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Modern social networking platform with user profiles, post sharing, real-time messaging, and content discovery features. Implemented with React Native for mobile compatibility and Node.js backend.",
      image: "https://via.placeholder.com/200x150/1a202c/ffffff?text=Project+4",
      link: "/project/4"
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
                <button className="view-more-btn">
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