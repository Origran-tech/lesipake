import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
export default function Layout({ children }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.route, router.route, { locale });
  };
  /*const changeTheme = (theme) => {
    sessionStorage.setItem("background",theme)
  }
  var userTheme=localStorage.getItem("background")
  */ return (
    <div>
      <Head>
        <title>Lesipake - Le wiki open source</title>
        <meta
          name="description"
          content="Lesipake est un projet de site dictionaire open source."
        ></meta>
      </Head>
      <header className="common-header">
        <div>
          <FontAwesomeIcon icon={faBook} />{" "}
          <Link href="/">
            <a>{t.home}</a>
          </Link>{" "}
          <Link href="/articles">
            <a>{t.lastarticle}</a>
          </Link>{" "}
          <Link href="/contribute">
            <a>{t.contribtitle}</a>
          </Link>{" "}
        </div>
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="selectnav"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        {/*<select onChange={changeTheme} defaultValue="green">
          <option value="green">default</option>
          <option value="blue">blue</option>
        </select>*/}
      </header>
      <div>{children}</div>
      <footer className="common-footer">
        &copy; lesipake by origran technology
      </footer>
    </div>
  );
}
