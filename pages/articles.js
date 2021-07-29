import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import firebase from "firebase/app";
import "firebase/firestore";
import Articleblock from "../components/articleblock";

export default function Home(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.lastarticle}</title>
      </Head>
      <h1>{t.lastarticle}</h1>
      <div className="articlescontainer">
        {props.articles.map((article) => {
          const articleData =
            article._delegate._document.data.value.mapValue.fields;
          return <Articleblock article={articleData} />;
        })}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "lesipake.firebaseapp.com",
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: "lesipake",
      storageBucket: "lesipake.appspot.com",
      messagingSenderId: "544640446362",
      appId: "1:544640446362:web:e1c5d42d963678fa3e5423",
      measurementId: "G-WJJWQY1VJF",
    });
  } else {
    firebase.app(); // if already initialized, use that one
  }
  const firestore = firebase.firestore();
  const data = await firestore.collection("articles").get();
  const articles = [];
  data.forEach((doc) => {
    articles.push(doc);
  });
  return { props: { articles: JSON.parse(JSON.stringify(articles)) } };
}
