import Head from "next/head";
import Image from "next/image";
import Articleblock from "../components/articleblock";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>404</title>
      </Head>
      <h1>Erreur 404</h1>
      <p>
        Nous n&apos;avons pas trouvé votre page. Si vous voulez créer un article
        vous pouvez vous rendre sur la page du formulaire.
      </p>
    </div>
  );
}
