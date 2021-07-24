import en from "../../locales/en";
import fr from "../../locales/fr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <div className={styles.pagecontent}>
        <h1>{t.survmodetitle}</h1>
        <p>{t.survmodedesc}</p>
    </div>
  );
}
