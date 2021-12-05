import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import NewCard from "../NewsCard/NewCard";
import PaginationRounded from "../Pagination/Pagination";
import styles from "./News.module.css";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "news");

    const q = query(collectionRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setNews(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().time?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div className={`${styles.news}`}>
      {news.map((item, index) => {
        return (
          <NewCard
            title={item.title}
            key={item.id}
            id={item.id}
            description={item.description}
            src={item.img}
            views={item.views}
            time={item.timestamp}
          />
        );
      })}
      <div className={`${styles.news__pagination} _container wrapper`}>
        <PaginationRounded />
      </div>
    </div>
  );
}
