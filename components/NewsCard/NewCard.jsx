import styles from "./NewCard.module.css";
import Link from "next/link";
import Info from "../Info/Info";

export default function NewCard() {
  return (
    <>
      <Link href="/news/bb">
        <div className={styles.newcard}>
          <img
            src="/assets/img/newsimg.png"
            alt="news pic"
            className={styles.newscard__img}
          />
          <Info />
          <p className={styles.newcard__deatails}>
            ВОЗ: молодые жители Европы стали меньше курить, но пристрастились
            .....
          </p>
        </div>
      </Link>
    </>
  );
}
