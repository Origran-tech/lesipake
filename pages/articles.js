import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import firebase from "../firebase/clientapp";
import { useCollection } from "react-firebase-hooks/firestore";
import Articleblock from "../components/articleblock";

export default function Home(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const [articles, articlesLoading, articlesError] = useCollection(
    firebase.firestore().collection("articles"),
    {}
  );

  let articlesData = [];
  if (!articlesLoading && articles) {
    articlesData = articles.docs.map((doc) => doc.data());
  }
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.lastarticle}</title>
      </Head>
      <h1>{t.lastarticle}</h1>
      {articlesLoading ? (
        <>LOADING</>
      ) : (
        <div className="articlescontainer">
          {!articlesLoading &&
            articles &&
            articlesData.map((article, index) => {
              return <Articleblock article={article} key={index} />;
            })}
        </div>
      )}
    </div>
  );
}
