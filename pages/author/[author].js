import {
  onSnapshot,
  collection,
  query,
  orderBy,
  where,
} from "@firebase/firestore";
import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Info from "../../components/Info/Info";
import styles from "../../styles/Author.module.css";

function DetailsPage() {
  const router = useRouter();
  const author = router.query.author;
  const [pubs, setPubs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "news");

    const q = query(collectionRef, where("author", "==", author));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPubs(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().time?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  console.log(pubs);
  // send request to backend api
  return (
    <>
      <Head>
        <title>{pubs?.title}</title>
      </Head>

      <div className={`${styles.author} wrapper _container`}>
        <div className={styles.author__info}>
          <img src="/assets/img/authorpage.png" />
          <div className={styles.author__details}>
            <h2>{author}</h2>
            <table className={styles.author__table}>
              <tr>
                <td className={styles.author__prop}>Карьера</td>
                <td>Писатель</td>
              </tr>
              <tr>
                <td className={styles.author__prop}>Дата рождения</td>
                <td>2 ноября, 1974 (46 лет)</td>
              </tr>
              <tr>
                <td className={styles.author__prop}>Место рождения</td>
                <td>Черняховск, СССР (Россия)</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.author__publications}>
          <h3>ПУБЛИКАЦИИ</h3>
          {pubs.map((pub, index) => {
            <div className={styles.author__pub} key="index">
              <img src="/assets/img/article.png" className={styles.author__img} />
              <div className={styles.author__pub__info}>
                <h4>
                  По инициативе Узбекистана создана Группа друзей по правам
                  молодежи
                </h4>
                <div className={styles.pub__num}>
                  <Info views={pub.views} />
                </div>
                <p>
                  Посланник Генерального секретаря ООН по делам молодежи Джаятма
                  Викраманаяке приняла участие в презентации созданной по
                  инициативе Узбекистана Группе друзей по правам молодежи. В
                  рамках этого международного проекта планируется продвижение прав
                  молодых жителей планеты и расшире...
                </p>
                <button className="btn">Читать</button>
              </div>
            </div>
          })}
          {/* ################### */}
          <div className={styles.author__pub}>
            <img src="/assets/img/article.png" className={styles.author__img} />
            <div className={styles.author__pub__info}>
              <h4>
                По инициативе Узбекистана создана Группа друзей по правам
                молодежи
              </h4>
              <div className={styles.pub__num}>
                <Info views={634} />
              </div>
              <p>
                Посланник Генерального секретаря ООН по делам молодежи Джаятма
                Викраманаяке приняла участие в презентации созданной по
                инициативе Узбекистана Группе друзей по правам молодежи. В
                рамках этого международного проекта планируется продвижение прав
                молодых жителей планеты и расшире...
              </p>
              <button className="btn">Читать</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
