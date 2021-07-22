import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
export default function Layout({ children }) {
  const router = useRouter();
  console.log(router)
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.route, router.route, { locale });
  };
  return (
    <div>
      <Head>
        <title>Lesipake - Le wiki open source</title>
        <meta
          name="description"
          content="Lesipake est un projet de site dictionaire open source."
        ></meta>
      </Head>
      <header className="common-header">
        <FontAwesomeIcon icon={faBook} />{" "}
        <Link href="/">
          <a>{t.home}</a>
        </Link>{" "}
        <Link href="/articles">
          <a>{t.lastarticle}</a>
        </Link>{" "}
        <select onChange={changeLanguage} defaultValue={locale}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
      </header>
      <div>{children}</div>
      <footer className="common-footer">
        &copy; lesipake by origran technology
      </footer>
    </div>
  );
}
