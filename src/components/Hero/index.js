import React from 'react';
import heroBackground from '../../assets/images/hero-bg.png';
import heroBanner from '../../assets/images/hero-banner.png';
import heroCircleOne from '../../assets/images/hero-circle-one.png'; 
import heroCircleTwo from '../../assets/images/hero-circle-two.png'; 
import heartRate from '../../assets/images/heart-rate.svg'; 
import '../../assets/css/style.css';

function HeroSection() {
  
  const sectionStyle = {
    backgroundImage: `url('${heroBackground}')`
  };

  return (
    <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section style={sectionStyle}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">
            <strong className="strong">The Best</strong> Fitness Assistant
          </p>
          <h1 className="h1 hero-title">Best Helper For Fitness In AI</h1>
          <p className="section-text">
            Personal, cheap, long-term, fitness assistant who answers every question
          </p>
          <a href="/Register" className="btn btn-primary">Get Started</a>
        </div>
        <div className="hero-banner">
          <img src={heroBanner} width="660" height="753" alt="hero banner" className="w-100" />
          <img src={heroCircleOne} width="666" height="666" aria-hidden="true" alt="" className="circle circle-1" />
          <img src={heroCircleTwo} width="666" height="666" aria-hidden="true" alt="" className="circle circle-2" />
          <img src={heartRate} width="255" height="270" alt="heart rate" className="abs-img abs-img-1" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
