import Head from "next/head";
import Image from "next/image";
import Articleblock from "../components/articleblock";
import styles from "../styles/Home.module.css";

export default function Home() {
  const articles = [
    {
      title: "Mode survie - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah",
    },
    {
      title: "Mode créatif - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz",
    },
    {
      title: "Mode aventure - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae",
    },
    {
      title: "Mode spectateur - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar",
    },
    {
      title: "Dificulté paisible - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaat",
    },
    {
      title: "Dificulté facile - Minecraft",
      excerpt: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaay",
    },
  ];
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>404</title>
      </Head>
      <h1>Erreur 404</h1>
      <p>
        Nous n'avons pas trouvé votre page. Si vous voulez créer un article vous
        pouvez vous rendre sur la page du formulaire.
      </p>
      <p>Voici les derniers articles :</p>
      <div className="articlescontainer">
        {articles.map((article) => (
          <Articleblock title={article.title} excerpt={article.excerpt} />
        ))}
      </div>
    </div>
  );
}
