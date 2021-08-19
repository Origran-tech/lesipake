import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
export default function Layout({ children }) {
  const router = useRouter();
  const { locale } = router;

  const defaultColor = "#00AA00";

  const [bgColor, setBgColor] = useState(defaultColor);
  const [isLoading, setIsLoading] = useState(true);

  const changeTheme = (e) => {
    setBgColor(e.target.value);
    console.log(e.target.value)
    window.localStorage.setItem("background", e.target.value);
  };

  const t = locale === "en" ? en : fr;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.route, router.route, { locale });
  };

  useEffect(() => {
    setBgColor(window.localStorage.getItem("background") || defaultColor);
    setIsLoading(false);
  }, []);

  return (
    !isLoading && (
      <div style={{ background: bgColor }}>
        <Head>
          <title>Lesipake - Le wiki open source</title>
          <meta
            name="description"
            content="Lesipake est un projet de site dictionaire open source."
          ></meta>
        </Head>
        <header className="common-header">
          <div>
            <FontAwesomeIcon icon={faBook} />
            <Link href="/">
              <a>{t.home}</a>
            </Link>
            <Link href="/articles">
              <a>{t.lastarticle}</a>
            </Link>
            <Link href="/contribute">
              <a>{t.contribtitle}</a>
            </Link>
          </div>
          <div>
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="selectnav"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>

            <select
              onChange={changeTheme}
              value={bgColor}
              style={{ marginLeft: "10px" }}
              className="selectnav"
            >
              <option value="linear-gradient(to bottom right, #FC00FF, #00DBDE)">Origran</option>
              <option value="linear-gradient(to bottom right, #FFAE23, #DB004D)">Fire</option>
              <option value="linear-gradient(to bottom right, #19F0FF, #1BFF25)">Landscape</option>
              <option value="linear-gradient(to bottom right, #521BFF, #C60BFF)">Flower</option>
            </select>

            {/*<label htmlFor="color-picker" style={{ marginLeft: "10px" }}>
              thème
            </label>
            <input
              type="color"
              id="color-picker"
              value={bgColor}
              onChange={changeTheme}
              style={{
                height: 25,
                width: 25,
                padding: "0px 2px",
                borderRadius: 0,
                marginLeft: '5px'
              }}
            />*/}
          </div>
        </header>
        <div className="main-wrapper">{children}</div>
        <footer className="common-footer">
          &copy; lesipake by origran technology
        </footer>
      </div>
    )
  );
}
