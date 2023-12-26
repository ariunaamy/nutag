import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>
          We are dedicated to providing the best service. Our team is focused on
          delivering quality and value.
        </p>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
