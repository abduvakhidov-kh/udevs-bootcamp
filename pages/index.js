import Head from "next/head";
import News from "../components/News/News";
import Stories from "../components/Stories/Stories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Udevs News | Home</title>
        {/* Here we also can put our metadata with <meta> tag */}
      </Head>
      <div className={`_container main`}>
        <Stories />
        <News />
      </div>
    </>
  );
}
