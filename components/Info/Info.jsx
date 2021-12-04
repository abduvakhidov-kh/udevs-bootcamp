import styles from "./Info.module.css";
import { IoEyeOutline } from "react-icons/io5";

export default function Info({time, views}) {

  console.log(time)
  return (
    <div className={styles.info}>
      <span className={styles.info__time}>18:36</span>
      <span className={styles.info__date}>11.05.2021 </span> |
      <span className={styles.info__views}>
        <IoEyeOutline /> {views}
      </span>
    </div>
  );
}
