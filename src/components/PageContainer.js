import React from "react";
import Services from "./Services";
import RequestForm from "./RequestForm";
import Insta from "./Insta";
import Logo from "../assets/bride_labs_logo.png";
import "./styles/PageContainer.css";

export default function PageContainer() {
  return (
    <div className="body">
      <div class="header">
        <a href="/" className="logo-div">
          <img src={Logo} className="logo" alt="Bride Labs logo" />
        </a>
        <nav>
          <ul className="navbar-ul">
            <li className="navbar-li">
              <a href="#gallery">Gallery</a>
            </li>
            <li className="navbar-li">
              <a href="#services">Our Services</a>
            </li>
            <li className="navbar-li">
              <a href="#request">Book Now</a>
            </li>
            <li className="navbar-li">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="about">
        <div className="about-large">
          We come to you for your special occasion so that you can look your
          best
        </div>
        <div className="about-small">
          Welcome to Bride Labs, a mobile hair studio based in Burlington,
          Ontario.
        </div>
      </div>
      <div className="gallery">
        <Insta />
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="request">
        <RequestForm />
      </div>
      <div className="contact">
        Questions? Contact us at{" "}
        <a href="mailto:bridelabs.ca@gmail.com">bridelabs.ca@gmail.com</a>
      </div>
    </div>
  );
}
