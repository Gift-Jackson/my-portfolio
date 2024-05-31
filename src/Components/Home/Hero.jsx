import { Link } from "react-router-dom";
import styles from "../Styles/hero.module.css";
import { data } from "../../Constants/data";

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
            <a href="https://github.com/Gift-Jackson" target="_blank">
              <button className={styles.btn_1}>
                <span>See Github</span> &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
        <div className={styles.wrapper}>
          {/* <h3>
            <i className="fa-solid fa-square-share-nodes"></i>&nbsp; Statistics
            
          </h3> */}
          <ul>
            {data.map((item, index) => (
              <li className={styles.item} key={index}>
                <div>{item.count}</div>
                <div>{item.title} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
