import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="flex_col pt_2 ">
      <h6 className="h6 footer_heading">
        Made with &#123; &#9829; &#125; by
        <a href="https://saadahmad.netlify.app/"> Saad Ahmad</a>
      </h6>
      <div className="footer_social">
        <a href="https://twitter.com/imsaadahmad" target="_blank">
          <i className="fab fa-twitter fa-sm"></i>
        </a>
        <a href="https://www.linkedin.com/in/saadahmadhere/" target="_blank">
          <i className="fab fa-linkedin-in fa-sm"></i>
        </a>
        <a href="https://github.com/saadahmadhere" target="_blank">
          <i className="fab fa-github fa-sm"></i>
        </a>
      </div>
      <h6>v 1.0.0</h6>
    </footer>
  );
};

export { Footer };
