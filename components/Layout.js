import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Lesipake</title>
        <meta
          name="description"
          content="Lesipake est un projet de site dictionaire/tutoriel et autre"
        ></meta>
      </Head>
      <header className="common-header">
        <FontAwesomeIcon icon={faBook} />{" "}
        <Link href="/">
          <a>Accueil</a>
        </Link>{" "}
        <Link href="test">
          <a>Test</a>
        </Link>
      </header>
      <div>{children}</div>
      <footer className="common-footer">&copy; lesipake by origran technology</footer>
    </div>
  );
}
