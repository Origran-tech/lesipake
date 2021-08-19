import en from "../locales/en";
import fr from "../locales/fr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [articlePosted, setArticlePosted] = useState(false);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const result = await fetch("/api/postarticle", {
      method: "POST",
      body: JSON.stringify({ title, description, pseudo }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await result.json();
    if (data.message === "success") {
      setArticlePosted(true);
    }
  };
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.contribtitle}</title>
      </Head>
      <h1>{t.contribtitle}</h1>
      {articlePosted ? (
        <div>
          Votre article est pris en compte, il est en attente de modération.
        </div>
      ) : (
        <>
          <p>{t.contribform}</p>
          <form>
            <div id="contribtitle">
              <label>{t.titlecontrib}</label>
              <br />
              <input
                type="text"
                size="10"
                maxLength="40"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <br />
            <div id="pseudocontrib">
              <label>{t.pseudocontrib}</label>
              <br />
              <input
                type="text"
                size="10"
                maxLength="40"
                value={pseudo}
                onChange={(e) => {
                  setPseudo(e.target.value);
                }}
              />
            </div>
            <br />
            <div id="desccontrib">
              <label>{t.desccontrib}</label>
              <br />
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <br />
            <input
              type="submit"
              value="Envoyer l'article"
              onClick={handleSubmitForm}
              className="btn btnsend"
            />
          </form>
        </>
      )}
      <br />
      <Link href="https://github.com/Origran-tech/lesipake">
        <a>{t.gitcontrib}</a>
      </Link>
    </div>
  );
}
