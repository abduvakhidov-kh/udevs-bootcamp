import styles from "./Recommendation.module.css";
import Info from "../Info/Info";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  limit,
} from "@firebase/firestore";

export default function Recommendation() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "news");

    const q = query(collectionRef, orderBy("views", "desc"), limit(3));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPopular(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().time?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  console.log(popular);
  return (
    <div className={styles.rec}>
      <h3 className={styles.rec__header}>ЛУЧШИЕ БЛОГИ</h3>

      {popular.map((pub, index) => {
        return (
          <div className={styles.rec__item} key={index}>
            <img
              src="/assets/img/newsimg.png"
              alt=""
              className={styles.rec__img}
            />
            <div className={styles.rec__info}>
              <p className={styles.rec__text}>
                ВОЗ: молодые жители Европы стали меньше курить
              </p>
              <Info views={pub.views} />
            </div>
          </div>
        );
      })}

      {/* <div className={styles.rec__item}>
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
      </div> */}
    </div>
  );
}
