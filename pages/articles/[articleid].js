import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import "material-icons/iconfont/filled.css";
import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";

export default function ArticleDetail() {
  const [article, setArticle] = useState("");
  const router = useRouter();
  const handleclick = () => {
    router.back();
  };
  useEffect(() => {
    async function getArticles() {
      const { data } = await supabase.from("articles").select("*").eq("id", router.query.articleid).single();
      setArticle(data);
      console.log(data)
    }
    getArticles();
  }, [router.query.articleid]);
  return (
    <div>
      <div className="navbar">
        <Link href={`/articles/`}>
          <a>
            <div className="backbutton btn">Back</div>
          </a>
        </Link>
      </div>
      <div className={styles.pagecontent}>
        <h1>{article ? article.title : "chargement"}</h1>
        <p className="articlecontent">{article ? article.content : ""}</p>
        <p>{article ? article.creator : ""}</p>
      </div>
    </div>
  );
}
