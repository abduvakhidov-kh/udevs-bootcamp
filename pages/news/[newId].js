// import { useRouter } from "next/router";
import Article from "../../components/Article/Article";
import Author from "../../components/Author/Author";
import Recommendation from "../../components/Recommendation/Recommendation";
import styles from "../../styles/DetailsPage.module.css";

function detailsPage() {
  // const router = useRouter();

  // const newId = router.query.newId;

  // send request to backend api
  return (
    <div className={`${styles.detailsPage} _container wrapper `}>
      <Author />
      <Article />
      <Recommendation />
    </div>
  );
}

export default detailsPage;
