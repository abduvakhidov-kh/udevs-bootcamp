import { onSnapshot, collection, query, where, orderBy } from "@firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../utils/firebase";
import { AuthContext } from "../Authprovider";
import NewCard from "../NewsCard/NewCard";
import PaginationRounded from "../Pagination/Pagination";
import styles from "./News.module.css";

export default function News() {
  const [news, setNews] = useState([]);
  const {category, setCategory} = useContext(AuthContext);

  console.log(category);
  useEffect(() => {
    if (category == "all") {
      const collectionRef = collection(db, "news");

      const q = query(collectionRef, orderBy("time", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setNews(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            timestamp: doc.data().time?.toDate().getTime(),
          }))
        );
      });
      return unsubscribe;
    } else {
      const collectionRef = collection(db, "news");

      const q = query(collectionRef, where("category", "==", category));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setNews(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            timestamp: doc.data().time?.toDate().getTime(),
          }))
        );
      });
      return unsubscribe;
    }
  }, [category]);

  return (
    <>

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
    </div>
      <div className={`${styles.news__pagination} _container wrapper`}>
        <PaginationRounded />
      </div>
      </>
  );
}
