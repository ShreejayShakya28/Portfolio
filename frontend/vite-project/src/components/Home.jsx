import React from 'react';

const Home = () => {
  return (
    <div className="home-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-section">
            <h1>Your Name</h1>
            <h2>Full Stack Developer</h2>
            <p>
              Passionate developer with expertise in modern web technologies. 
              I create beautiful, responsive applications that deliver exceptional user experiences.
              Welcome to my portfolio where innovation meets functionality.
            </p>
          </div>
          <div className="image-section">
            <div className="profile-container">
              <div className="profile-circle">
                <img 
                  src="https://via.placeholder.com/200x200/4a5568/ffffff?text=Your+Photo" 
                  alt="Profile" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;