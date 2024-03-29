import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import "./navbar.css";

const links = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt4">What is GPT4?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="https://gpt4saas.vercel.app/">
            <h1>GPT4SaaS</h1>
          </a>
        </div>
        <div className="navbar-links_container">{links()}</div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div 
            className="navbar-menu_container-links"
            onClick={() => setToggleMenu(false)}
            >{links()}</div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
