import React from 'react';

import aboutBanner from '../../assets/images/about-banner.png';
import aboutCircleOne from '../../assets/images/about-circle-one.png'; 
import aboutCircleTwo from '../../assets/images/about-circle-two.png'; 
import fitness from '../../assets/images/fitness.png'; 
import aboutCoach from '../../assets/images/about-coach.jpg'; 

function AboutSection() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">

        <div className="about-banner has-after">
          <img src={fitness} width="650" height="154" loading="lazy" alt="fitness" className="abs-img w-100" />
          <img src={aboutBanner} width="660" height="648" loading="lazy" alt="about banner" className="w-100" />
          <img src={aboutCircleOne} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-1" />
          <img src={aboutCircleTwo} width="660" height="534" loading="lazy" aria-hidden="true" alt="" className="circle circle-2" />
          
        </div>

        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">Start Working Out With AI Today</h2>
          <p className="section-text">
            Transform Your Fitness Regime with AI: Experience Personalized Workouts that Adapt to Your Progress.
            Embrace the Future of Fitness with Custom Routines and Real-Time Adjustments Tailored Just for You.
          </p>
          <p className="section-text">
            Continue Your Journey to Peak Health: With AI's Dynamic Feedback, Track Your Improvements, Stay Motivated, and Achieve Your Goals.
            Discover the Power of AI and Make Every Workout Count!
          </p>
          <div className="wrapper">
            <div className="about-coach">
              <figure className="coach-avatar">
                <img className="coach-avatar" src={aboutCoach} width="65" height="65" loading="lazy" alt="Trainer" />
              </figure>
              <div>
                <h3 className="h3 coach-name">Mr. Raptor</h3>
                <p className="coach-title">Our Coach</p>
              </div>
            </div>
            <a href="/Register" className="btn btn-primary">Explore More</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
