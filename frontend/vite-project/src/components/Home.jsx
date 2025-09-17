import React from 'react';
import profileImage from '../assets/images/Photo.jpg';
import '../styles/Home.css'
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Shreejay Shakya</h1>
            <h2>Web Developer, Machine Learning, Image and Sound Processing Enthusiast </h2>
            <p> I’m a passionate learner in web development and machine learning, currently building a solid foundation in both fields. I have decent knowledge of the MERN stack (Express.js, React, Node.js) and a growing interest in image processing and audio analysis. I enjoy exploring how modern web technologies can be used to build dynamic, data-driven solutions. 
            </p>
          </div>
          <div className="image-section">
            <div className="profile-container">
              <div className="profile-circle">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;