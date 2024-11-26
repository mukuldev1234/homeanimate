import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpaceScene from './SpaceScene';
import './AnimatedHomePage.css';

gsap.registerPlugin(ScrollTrigger);

const AnimatedHomePage = () => {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const detailRefs = useRef([]);
  const navbarRef = useRef(null);
  detailRefs.current = [];

  const addToRefs = (el) => {
    if (el && !detailRefs.current.includes(el)) {
      detailRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Navbar animation on scroll
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hero section animations
    gsap.fromTo(
      heroTitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.7, ease: 'power2.out' }
    );

    // Details section animations
    detailRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav ref={navbarRef} className="navbar">
        <div className="navbar-container">
          <div className="logo">Cosmos</div>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#details">Features</a></li>
            <li><a href="#journey">Join</a></li>
          </ul>
          <button className="cta-button">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <SpaceScene />
        <div className="hero-content">
          <h1 ref={heroTitleRef} className="hero-title">
            Welcome to the Cosmos
          </h1>
          <p ref={heroSubtitleRef} className="hero-subtitle">
            Explore the wonders of space, technology, and innovation.
          </p>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>

      {/* Details Section 1 */}
      <section id="details" className="details">
        <h2 className="details-title" ref={addToRefs}>
          What We Offer
        </h2>
        <div className="details-grid">
          <div className="detail-item" ref={addToRefs}>
            <h3>Cosmic Knowledge</h3>
            <p>Dive into the mysteries of the universe.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Innovative Technology</h3>
            <p>Stay ahead with groundbreaking advancements.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Global Community</h3>
            <p>Connect with explorers worldwide.</p>
          </div>
        </div>
      </section>

      {/* Additional Details Section */}
      <section className="details">
        <h2 className="details-title" ref={addToRefs}>
          Our Unique Features
        </h2>
        <div className="details-grid">
          <div className="detail-item" ref={addToRefs}>
            <h3>Live Star Maps</h3>
            <p>Experience real-time constellations and planets.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Astro Photography</h3>
            <p>Capture and share stunning celestial images.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Space Missions</h3>
            <p>Learn about upcoming and past space expeditions.</p>
          </div>
        </div>
      </section>

      {/* Final Details Section */}
      <section id="journey" className="details">
        <h2 className="details-title" ref={addToRefs}>
          Join the Journey
        </h2>
        <div className="details-grid">
          <div className="detail-item" ref={addToRefs}>
            <h3>Educational Programs</h3>
            <p>Engage with space workshops and tutorials.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Space Merchandise</h3>
            <p>Get your hands on exclusive space-themed gear.</p>
          </div>
          <div className="detail-item" ref={addToRefs}>
            <h3>Space Blogs</h3>
            <p>Stay updated with articles from leading space experts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedHomePage;
