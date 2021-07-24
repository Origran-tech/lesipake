import en from "../locales/en";
import fr from "../locales/fr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
      <div className={styles.pagecontent}>
          <h1></h1>
          <p></p>
          <Link href="https://github.com/Origran-tech/lesipake"><a><p>Contribute on GitHub</p></a></Link>
      </div>
  );
}