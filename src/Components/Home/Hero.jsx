import { Link } from "react-router-dom";
import { social_media } from "../../Constants/data";
import styles from "../Styles/hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-regular fa-address-card"></i>&nbsp; Profile
          </h3>
          <p>
            I like to craft solid and scalable frontend products with great user
            experiences and dynamic functionalities from the backend if i&apos;m
            prompted to.
          </p>
          <div className={styles.btns}>
            <Link>
              <button className={styles.btn_2}>
                <i className="fa-solid fa-download"></i> &nbsp; Download CV
              </button>
            </Link>
            <a href="">
              <button className={styles.btn_1}>
                 <span>See Github</span> &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-solid fa-square-share-nodes"></i>&nbsp; Social
            Media
          </h3>
          <ul>
            {social_media.map((item, index) => (
              <li className={styles.links} key={index}>
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media-link"
                >
                  <div>
                    <i className={item.iconClass}></i>
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
