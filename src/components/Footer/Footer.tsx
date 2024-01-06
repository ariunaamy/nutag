import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="box">
          <h1>Address</h1>
          <p>1234 Main St</p>
          <p>City, State 12345</p>
        </div>
        <div className="box">
          <h1>Hours</h1>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="box">
          <h1>Phone</h1>
          <p>123-456-7890</p>
        </div>
        <div className="box">
          <h1>Email</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
