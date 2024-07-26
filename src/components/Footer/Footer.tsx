import React from "react";
import { Copyright } from "../Copyright/Copyright";

/**
 * Footer component that renders the footer section of the website.
 * @returns {JSX.Element} The rendered footer component.
 */
export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-section footer-links">
            <h4>Sections</h4>
            <a href="./">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/events">Events</a>
            <a href="/publications">Publications</a>
            <a href="/team">Team</a>
            <a href="/global-advisory-council">Advisory Council</a>
            <a href="/our-transparency">Our Transparency</a>
            <a href="/job-board">Job Board</a>
            <a href="/contact">Contact</a>
            <a href="/brand">Brand Assets</a>
          </div>
          <div className="footer-section">
            <a
              className="footer-funders"
              href="/our-transparency"
              target="_blank"
              rel="noopener noreferrer"
            >
              OUR FUNDERS
            </a>
          </div>
          <div className="footer-section">
            <h4>Affiliated With</h4>
            <a
              className="footer-partner-logo partner-logo-burnes"
              href="http://northeastern.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/images/neu.png"
                alt="Northeastern University"
              />
            </a>
            <h4>Founded At</h4>
            <a
              className="footer-partner-logo"
              href="http://engineering.nyu.edu/tandon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/images/nyu.png"
                alt="NYU Tandon School of Engineering - New York University"
              />
            </a>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};
