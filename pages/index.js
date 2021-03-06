import en from "../locales/en";
import fr from "../locales/fr";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <div className={styles.pagecontent}>
      <Head>
        <title>{t.title}</title>
      </Head>
      <h1>{t.title}</h1>
      <div className="logo"><Image src="/logo.png" alt="logo" width="500px" height="500px"></Image></div>
      {/*<table>
        <tbody>
          <tr>
            <th>{t.category}</th>
            <th>{t.description}</th>
            <th>{t.creator}</th>
            <th>{t.contributor}</th>
          </tr>
          <tr>
            <td>
              <Link href="pages_minecraft">
                <a>Minecraft</a>
              </Link>
            </td>
            <td>
              Tout savoir sur le jeu qui a plus de 200 milions d&apos;éxemplaires
              vendus
            </td>
            <td>Origran technology</td>
            <td>Léo Malloire</td>
          </tr>
        </tbody>
      </table>*/}
    </div>
  );
}
