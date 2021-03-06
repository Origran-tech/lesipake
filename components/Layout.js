import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import "material-icons/iconfont/filled.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { supabase } from "../utils/supabaseClient";
import React from "react";
import { initGA, logPageView } from "../utils/analytics";

export default function Layout({ children }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  const router = useRouter();
  const { locale } = router;

  const defaultColor = "#FF6F59";

  const [bgColor, setBgColor] = useState(defaultColor);
  const [isLoading, setIsLoading] = useState(true);

  const changeTheme = (e) => {
    setBgColor(e.target.value);
    console.log(e.target.value);
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    !isLoading && (
      <div style={{ background: bgColor }}>
        <Head>
          <title>Lesipake - Le wiki open source</title>
          <meta
            name="description"
            content="Lesipake est un projet de site dictionaire open source."
          ></meta>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <header className="common-header">
          <div style={{ display: "flex" }}>
            <div className="book-menu">
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <span className="material-icons" style={{ color: "white" }}>
                  book
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href="/">
                  <a>
                    <MenuItem onClick={handleClose}>{t.home}</MenuItem>
                  </a>
                </Link>
                <Link href="/articles">
                  <a>
                    <MenuItem onClick={handleClose}>{t.lastarticle}</MenuItem>
                  </a>
                </Link>
                {supabase.auth.session() && (
                  <Link href="/contribute">
                    <a>
                      <MenuItem onClick={handleClose}>
                        {t.contribtitle}
                      </MenuItem>
                    </a>
                  </Link>
                )}
              </Menu>
            </div>

            <div className="nav-div">
              <Link href="/">
                <a>{t.home}</a>
              </Link>
              <Link href="/articles">
                <a>{t.lastarticle}</a>
              </Link>
              <Link href="/contribute">
                <a>{t.contribtitle}</a>
              </Link>
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
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
              <option value="#FF6F59">Origran</option>
              <option value="linear-gradient(to bottom right, #19F0FF, #1BFF25)">
                Landscape
              </option>
              <option value="linear-gradient(to bottom right, #521BFF, #C60BFF)">
                Flower
              </option>
            </select>

            {/*<label htmlFor="color-picker" style={{ marginLeft: "10px" }}>
              th??me
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
