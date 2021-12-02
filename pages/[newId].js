// import { useRouter } from "next/router";
import styles from "../styles/DetailsPage.module.css";

function detailsPage() {
  const router = useRouter();

  const newId = router.query.newId;

  // send request to backend api
  return (
    <div className={styles.detailsPage}>
      <span>fck u</span>
    </div>
  );
}

export default detailsPage;
