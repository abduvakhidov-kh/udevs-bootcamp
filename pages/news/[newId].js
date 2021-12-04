import { onSnapshot, collection, doc, getDoc } from "@firebase/firestore";
import { db } from "../../utils/firebase";
import { useRouter } from "next/router";
import Head from "next/head"
import { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Author from "../../components/Author/Author";
import Recommendation from "../../components/Recommendation/Recommendation";
import styles from "../../styles/DetailsPage.module.css";

function DetailsPage() {
  const router = useRouter();
  const newId = router.query.newId;
  const [newItem, setNewItem] = useState();

  useEffect(() => {
    const docRef = doc(db, "news", `${newId}`);
    getDoc(docRef).then((req) => setNewItem(req.data()));
  }, []);

  console.log(newItem);
  // send request to backend api
  return (
    <>
    <Head>
      <title>{newItem?.title}</title>
    </Head>
    <div className={`${styles.detailsPage} _container wrapper `}>
      <Author author={newItem?.author}/>
      <Article
        src={newItem?.src}
        time={newItem?.time}
        description={newItem?.description}
        author={newItem?.author}
        views={newItem?.views}
        title={newItem?.title}
        />
      <Recommendation />
    </div>
        </>
  );
}

export default DetailsPage;
