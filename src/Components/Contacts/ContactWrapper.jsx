import { social_media } from "../../Constants/data";
import styles from "../Styles/contacts.module.css";
const ContactWrapper = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>
            <i className="fa-solid fa-envelope-circle-check"></i>&nbsp; Contact
            Form
          </h3>

          <form className={styles.form}>
            <div className={styles.grp}>
              <label htmlFor="name">
                Name <span className={styles.red}>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="What's your name?"
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.grp}>
              <label htmlFor="email">
                E-mail <span className={styles.red}>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="And your e-mail address..."
                required
                autoComplete="off"
              />
            </div>
            <div className={styles.grp}>
              <label htmlFor="message">
                Message <span className={styles.red}>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows="7"
                placeholder="A little gist about the job..."
                required
                autoComplete="off"
              ></textarea>
            </div>
            <button type="submit">
              Send &nbsp; <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
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

export default ContactWrapper;
