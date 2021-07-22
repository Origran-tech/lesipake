import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>Lesipake - Minecraft</title>
      </Head>
      <h1>Tous les articles sur Minecraft</h1>
    </div>
  );
}