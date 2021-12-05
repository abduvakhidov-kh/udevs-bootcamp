import { onSnapshot, collection, query, orderBy, where} from "@firebase/firestore";
import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Author from "../../components/Author/Author";
import Recommendation from "../../components/Recommendation/Recommendation";
import Info from "../../components/Info/Info";
import styles from "../../components/Recommendation/Recommendation.module.css"

function DetailsPage() {
  const router = useRouter();
  const author = router.query.author;
  const [news, setNews] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "news");
    
    const q = query(collectionRef, where("author", "==", author));

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
  }, []);
  console.log(news);
  // send request to backend api
  return (
    <>
      <Head>
        <title>{news?.title}</title>
      </Head>
      <div>

      {news.map((newItem, index) => {
        return (
          <div className={`${styles.rec} wrapper _container`} key={index}>
          <div className={styles.rec__item}>
            <img src="/assets/img/newsimg.png" alt="" className={styles.rec__img}/>
            <div className={styles.rec__info}>
              <p className={styles.rec__text}>{newItem.title}</p>
              <Info views={newItem.views} />
            </div>
          </div>
        </div>
      )
      })}
      </div>
    </>
  );
}

export default DetailsPage;
