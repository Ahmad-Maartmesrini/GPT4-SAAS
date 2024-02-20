/* eslint-disable no-unused-vars */
// import { Rimenu3line, RiCloseLine } from "react-icon";
import GPT3 from "../../assets/GPT-3.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <img src={GPT3} alt="logo" />
        </div>
        <div className="gpt4__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#WGPT4">what is GPT?</a>
          </p>
          <p>
            <a href="#possibility">OpenAI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt4__navbar-menu_container-links-sgin">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
