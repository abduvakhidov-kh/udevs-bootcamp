import React from "react";
import styles from "./Stories.module.css";

export default function Stories() {
  return (
    <div className={styles.stories}>
      <h1 className={styles.stories__header}>История последних новостей </h1>

      <ul className={styles.stories__list}>
        <li className={styles.stories__item}>
          <div className={styles.stories__outer_layer}>
            <a href="" className={styles.stories__link}>
              <img src="./assets/img/1.jpg" className={styles.stories__img} />
            </a>
            <button className={styles.stories__btn}>+</button>
          </div>
        </li>

        <li className={styles.stories__item}>
          <div className={styles.stories__outer_layer}>
            <a href="" className={styles.stories__link}>
              <img src="./assets/img/2.jpg" className={styles.stories__img} />
            </a>
          </div>
        </li>

        <li className={styles.stories__item}>
          <div className={styles.stories__outer_layer}>
            <a href="" className={styles.stories__link}>
              <img src="./assets/img/3.jpg" className={styles.stories__img} />
            </a>
          </div>
        </li>

        <li>
          <div className={styles.stories__outer_layer}>
            <a href="" className={styles.stories__link}>
              <img src="./assets/img/4.jpg" className={styles.stories__img} />
            </a>
          </div>
        </li>
        
      </ul>
    </div>
  );
}
