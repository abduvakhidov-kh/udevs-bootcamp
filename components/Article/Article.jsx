import Info from "../Info/Info";
import styles from "./Article.module.css";

export default function Article({src, time, description, author, views, title}) {
  return (
    <div className={styles.article}>
      <img
        src={src}
        alt=""
        className={styles.article__img}
      />
      <p className={styles.article__photoBy}>Фото: {author} </p>
      <div className={styles.article__info}>
        <Info views={views} time={time} />
      </div>
      <h2 className={styles.article__header}>
        {title}
      </h2>

      <p className={styles.article__text}>
        {description}
      </p>
    </div>
  );
}
