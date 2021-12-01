import React from "react";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <div className={`header__categories ${styles.categories}`}>
      <ul className={styles.categories__list}>
        <li className={styles.categories__item}>Все потоки</li>
        <li className={styles.categories__item}>Разработка</li>
        <li className={styles.categories__item}>Администрирование</li>
        <li className={styles.categories__item}>Дизайн</li>
        <li className={styles.categories__item}>Менеджмент</li>
        <li className={styles.categories__item}>Маркетинг</li>
        <li className={styles.categories__item}>Научпоп</li>
      </ul>
    </div>
  );
}
