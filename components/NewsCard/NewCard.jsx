import styles from "./NewCard.module.css";
import { IoEyeOutline } from "react-icons/io5";

export default function NewCard() {
  return (
    <>
      <div className={styles.newcard}>
        <img
          src="/assets/img/newsimg.png"
          alt="news pic"
          className={styles.newscard__img}
        />
        <div className={styles.newcard__info}>
          <span className={styles.newcard__time}>18:36</span>
          <span className={styles.newcard__date}>11.05.2021</span> |
          <span className={styles.newcard__views}>
            <IoEyeOutline /> 334
          </span>
        </div>
        <p className={styles.newcard__deatails}>
          ВОЗ: молодые жители Европы стали меньше курить, но пристрастились
          .....
        </p>
      </div>
    </>
  );
}
