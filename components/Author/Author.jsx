import { IoBookmarkOutline } from "react-icons/io5";
import React from "react";
import styles from "./Author.module.css";

export default function Author() {
  return (
    <div className={styles.author}>
      <img src="/assets/img/author.png" alt="author" />
      <h4 className={styles.author__name}>Dilovar Alieva</h4>
      <div className={styles.author__buttons}>
        <button className={`btn btn__follow`}>Follow</button>
        <button className="btn">
          <IoBookmarkOutline />
        </button>
      </div>
    </div>
  );
}
