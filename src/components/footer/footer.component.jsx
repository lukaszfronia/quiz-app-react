import "./footer.styles.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} , Inc. All rights reserved.
      </p>
      ;
    </div>
  );
};

export default Footer;
