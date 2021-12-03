import React from "react";
import Link from "next/link";
import NewCard from "../NewsCard/NewCard";
import PaginationRounded from "../Pagination/Pagination";
import styles from "./News.module.css";

export default function index() {
  return (
    <div className={styles.news}>
      <Link href="/news/something-l">
        <NewCard />
      </Link>
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
      <div className={styles.pagination}>
        <PaginationRounded />
      </div>
    </div>
  );
}
