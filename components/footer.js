import { useEffect, useState, React } from "react";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer_container">
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-1">
            <a href="" className="worldeBattleContainer">
              <span className="footerLetter">Wordle</span>
              <span className="footerDash">Battle</span>
              <div className="dashImgFooter"></div>
            </a>
          </div>
          <button className="flexbox-item flexbox-item-2"></button>
        </div>

        {/* Not needed, can maybe bring back in the future? */}
        {/*         <div className="linebreak"></div>

        <div class="parent">
          <div className="div1"> RESOURCES</div>
          <a href="" className="div2">
            FAQ
          </a>
          <a href="" className="div3">
            Settings
          </a>
          <div className="div4"> LEGAL</div>
          <a href="" className="div5">
            Privacy Policy
          </a>
          <a href="" className="div6">
            Terms & Conditions
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
