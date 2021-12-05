import styles from "./NewCard.module.css";
import Link from "next/link";
import Info from "../Info/Info";

export default function NewCard({ title, src, views, time, id}) {
  
  return (
    <>
      <Link href={"/news/" + id}>
        <div className={styles.newcard}>
          <img src={`${src}`} alt="news pic" className={styles.newscard__img} />
          <Info time={time} views={views} />
          <p className={styles.newcard__deatails}>
            {title}
            .....
          </p>
        </div>
      </Link>
    </>
  );
}
