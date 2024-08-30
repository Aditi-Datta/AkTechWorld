import Image from "next/image";
import c1 from "@/../public/logo.png";
import styles from "../../styles/CustomColors.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className={styles.FooterBackground}>
        <footer className="footer  text-black p-10">
          <aside>
            <a href="/" className="text-white">
              <Image src={c1} alt="logo img" width={200} height={100} />
            </a>
          </aside>
          <nav className={styles.footerText}>
            <h6 className="footer-title">Services</h6>
            <a href="/services" className="link link-hover">
              Cyber Security
            </a>
            <a href="/services" className="link link-hover">
              Machine Learning
            </a>
            <a href="/services" className="link link-hover">
              Artificial Intelligence
            </a>
            <a href="/services" className="link link-hover">
              IT Solutions
            </a>
          </nav>
          <nav className={styles.footerText}>
            <h6 className="footer-title">Company</h6>
            <a href="/about" className="link link-hover">
              About us
            </a>
            <a href="/contact" className="link link-hover">
              Contact
            </a>
            <a href="/services" className="link link-hover">
              Services
            </a>
          </nav>
          <nav >
            <div className="w-64">
              <h6 className="footer-title">Contact Us</h6>
              <div className={styles.footerColor}>
                <FontAwesomeIcon icon="fa-solid fa-globe " />
                <small className={styles.address}>
                  16/B, Adabar, Dhaka-1207
                </small>
              </div>

              <div className={styles.footerColor}>
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <small className={styles.address}>+8801558010946</small>
              </div>

              <div className={styles.footerColor}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
                <small className={styles.address}>
                  aktechworldbd@gmail.com
                </small>
              </div>
            </div>

            {/*  <div className="join text-black py-6">
              <input
                className="input input-bordered join-item bg-white border-solid border-2 border-black "
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full bg-red-500 text-white">
                Subscribe
              </button>
            </div>  */}
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
