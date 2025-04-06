// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css';
import heroImg from '../assets/page.png';
import section1 from '../assets/page(1).png';
import section2 from '../assets/page(2).png';
import section3 from '../assets/page(1).png';
import section4 from '../assets/page(2).png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImg} alt="Hero Farmer Image" className="hero-img" />
        <div className="hero-text">
          <h1>Empowering Farmers with AI-Driven Solutions</h1>
          <p>
            Leveraging advanced technologies, transforming farming practices
            with AI for a more sustainable and efficient future.
          </p>
          <button onClick={() => navigate('/signup')}>Get Started for Free</button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="welcome-card">
          <p>
            Welcome, fellow farmer! We're thrilled to have you join our community.
            Let's work together to cultivate a more productive and prosperous
            future, powered by smart insights and AI. Get ready to grow!
          </p>
        </div>
        <img src={section4} alt="Farmers in field" className="welcome-img" />
      </section>

      {/* Why aGROW Section */}
      <section className="why-agrow">
        <h2>Why aGROW</h2>
        <div className="reasons-grid">
          <div>
            <img src={section1} alt="Data-Driven Recommendations" />
            <p>Provide recommendations on data-driven insights.</p>
          </div>
          <div>
            <img src={section2} alt="Tailored Decisions" />
            <p>Tailored guidance to make informed decisions.</p>
          </div>
          <div>
            <img src={section3} alt="Precision Farming" />
            <p>Reduces crop failure via precision farming.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
