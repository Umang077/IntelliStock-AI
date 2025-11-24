import "./FooterStyles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trident Group</h1>
          <p>Choose your favorite product.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/tridentgroupglobal/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/tridentgroupglobal/?hl=en">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://in.linkedin.com/company/tridentgroupglobal">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/TridentGroupGLB?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Library</h4>
          <a href="/">Samples by Fibre</a>
          <a href="/">Samples by GSM</a>
          <a href="/">Samples by Dye</a>
          <a href="/">Samples by Weave</a>
        </div>
        <div>
          <h4>Product</h4>
          <a href="/">Dobby Dyed Bath Towel</a>
          <a href="/">Dobby Dyed Hand Towel</a>
          <a href="/">Dobby Yarn Bath Towel</a>
          <a href="/">Dobby Yarn Hand Towel</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Trouble Shooting</a>
          <a href="/">Contact Us </a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
