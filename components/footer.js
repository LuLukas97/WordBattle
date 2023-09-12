import { useEffect, useState, React } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div class="footer">
        <div class="parent">
          <div></div>
          <a href="#">
            <h2>LinkedIn</h2>
          </a>
          <a href="#">
            <h2>Github</h2>
          </a>
          <a href="#">
            <h2>Portfolio</h2>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
