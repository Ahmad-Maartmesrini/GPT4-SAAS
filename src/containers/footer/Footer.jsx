import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="footer__btn">
        <button type="button">Request Early Access</button>
      </div>
      <div className="footer__links">
        <div className="footer__link">
          <h1>GPT4SaaS</h1>
          <p>Aleppo Sayf al-Dawla, All Rights Reserved</p>
        </div>
        <div className="footer__link">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer__link">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer__link">
          <h4>Get in touch</h4>
          <p>Aleppo Sayf al-Dawla</p>
          <p>+963 123 456 789</p>
          <p>Hello@GPT4SaaS.com</p>
        </div>
      </div>
      <div className="footer__copywrite">
        <small>© 2024 GPT4SaaS. All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
