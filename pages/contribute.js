import en from "../locales/en";
import fr from "../locales/fr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", content: "" });
  const { title, content } = post;
  async function fetchPosts() {
    const { data } = await supabase.from("articles").select();
    setPosts(data);
  }
  async function createPost() {
    const { data } = await supabase
      .from("articles")
      .insert([{ title, content, creator: user.username }])
      .single();
    router.push(`/articles/${data.id}`)
  }
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", supabase.auth.user().id)
        .single();
      setUser(data);
    }
    getUser();
  }, []);
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.contribtitle}</title>
      </Head>
      <h1>{t.contribtitle}</h1>
      {user && <p>Vous publiez en tant que : {user.username}</p>}
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
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <br />
          <div id="desccontrib">
            <label>{t.desccontrib}</label>
            <br />
            <textarea
              value={content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
            ></textarea>
          </div>
          <br />
          <div onClick={createPost} className="btn">
            Create Post
          </div>
        </form>
      </>
      <br />
      <Link href="https://github.com/Origran-tech/lesipake">
        <a className="contriba">{t.gitcontrib}</a>
      </Link>
    </div>
  );
}
/*export async function getServerSideProps({ req }) {
 const user = await supabase.auth.api.getUserByCookie(req);
  console.log(user);
  if (!user.user) {
    return {
      redirect: {
        props: {},
        destination: "/account?error=not_connected",
      },
    };
  }
  return { props: { user: user.user } };
}*/
