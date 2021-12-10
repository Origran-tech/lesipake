import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import firebase from "../../firebase/clientapp";
import { useCollection } from "react-firebase-hooks/firestore";
import Articleblock from "../../components/articleblock";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Home(props) {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  useEffect(() => {
    async function getArticles() {
      const { data } = await supabase.from("articles").select("*");
      setArticles(data);
    }
    getArticles();
  }, []);
  let articlesData = [];
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.lastarticle}</title>
      </Head>
      <h1>{t.lastarticle}</h1>
      {false ? (
        <p>LOADING</p>
      ) : (
        <div className="articlescontainer">
          {articles.map((article, index) => {
            return <Articleblock article={article} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
