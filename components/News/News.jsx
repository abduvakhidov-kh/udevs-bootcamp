import React from "react";
import NewCard from "../NewsCard/NewCard";
import styles from "./News.module.css";

export default function index() {
  return (
    <div className={styles.news}>
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
      <NewCard />
    </div>
  );
}
