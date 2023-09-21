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
          <div>
            <a href="https://www.linkedin.com/in/lukas-lundblad/">
              <h2 className="footer_socials">LinkedIn</h2>
            </a>
          </div>
          <div>
            <a href="https://github.com/LuLukas97">
              <h2 className="footer_socials">Github</h2>
            </a>
          </div>
          <div>
            <a href="#">
              <h2 className="footer_socials">Portfolio</h2>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
