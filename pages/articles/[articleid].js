import firebase from "../../firebase/clientapp";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import "material-icons/iconfont/filled.css";
export default function articleDetail() {
  const [article, setArticle] = useState("");
  const router = useRouter();
  const handleclick = () => {
    router.back();
  };
  useEffect(() => {
    if (router.query.articleid) {
      firebase
        .firestore()
        .collection("articles")
        .where("title", "==", router.query.articleid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setArticle(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, [router.query.articleid]);
  return (
    <div>
      <div className="navbar">
        <button onClick={handleclick} className="artprec" className="btn">
          <span className="material-icons">skip_previous</span> Article
          precedent
        </button>
        <button onClick={handleclick} className="backbutton" className="btn">
          retour
        </button>
        <button onClick={handleclick} className="artsuiv" className="btn">
          Article suivant
          <span className="material-icons">skip_next</span>
        </button>
      </div>
      <div className={styles.pagecontent}>
        <h1>{article ? article.title : "chargement"}</h1>
        <p className="articlecontent">{article ? article.description : ""}</p>
        <p>{article ? article.pseudo : ""}</p>
      </div>
    </div>
  );
}
