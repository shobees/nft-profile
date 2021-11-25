import React from "react";
import "./style.css";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="copyrights">
          <p className="">© Copyright 2021</p>
        </div>
        <div className="icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <i className="facebook f icon"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="twitter"
          >
            <i className="twitter icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <i className="linkedin  icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
