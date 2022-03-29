import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="flex_col mt_10">
      <h3 className="footer_heading">
        Made with &#123;&#9829; &#125; by
        <a href="https://saadahmad.netlify.app/"> Saad Ahmad</a>
      </h3>
      <div className="footer_social">
        <a href="https://twitter.com/imsaadahmad" target="_blank">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/saadahmadhere/" target="_blank">
          <i className="fab fa-linkedin-in fa-lg"></i>
        </a>
        <a href="https://github.com/saadahmadhere" target="_blank">
          <i className="fab fa-github fa-lg"></i>
        </a>
      </div>
      <h5>v 1.0.0</h5>
    </footer>
  );
};

export { Footer };
