import styles from "./Recommendation.module.css";
import Info from "../Info/Info";

export default function Recommendation() {
  return (
    <div className={styles.rec}>
      <h3 className={styles.rec__header}>ЛУЧШИЕ БЛОГИ</h3>
      <div className={styles.rec__item}>
        <img src="/assets/img/newsimg.png" alt="" className={styles.rec__img}/>
        <div className={styles.rec__info}>
          <p className={styles.rec__text}>ВОЗ: молодые жители Европы стали меньше курить</p>
          <Info views={324} />
        </div>
      </div>
      <div className={styles.rec__item}>
        <img src="/assets/img/newsimg.png" alt="" className={styles.rec__img}/>
        <div className={styles.rec__info}>
          <p className={styles.rec__text}>ВОЗ: молодые жители Европы стали меньше курить</p>
          <Info views={241} />
        </div>
      </div>
      <div className={styles.rec__item}>
        <img src="/assets/img/newsimg.png" alt="" className={styles.rec__img}/>
        <div className={styles.rec__info}>
          <p className={styles.rec__text}>ВОЗ: молодые жители Европы стали меньше курить</p>
          <Info views={216} />
        </div>
      </div>
    </div>
  );
}
