import React, { useState, useContext, useEffect } from "react";
import styles from "./Categories.module.css";
import { AuthContext } from "../Authprovider";

export default function Categories() {
  const {category, setCategory} = useContext(AuthContext);

  // useEffect(() => {
  //   setCategory(category);
  // }, []);

  return (
    <div className={`header__categories ${styles.categories}`}>
      <ul className={styles.categories__list}>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Все потоки
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("programming")}
        >
          Разработка
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Администрирование
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Дизайн
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Менеджмент
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Маркетинг
        </li>
        <li
          className={styles.categories__item}
          onClick={(e) => setCategory("all")}
        >
          Научпоп
        </li>
      </ul>
    </div>
  );
}
