import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.lastarticle}</title>
      </Head>
      <h1>{t.lastarticle}</h1>
    </div>
  );
}
