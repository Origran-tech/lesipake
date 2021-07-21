import Head from "next/head";
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
      <header>header</header>
      <div>{children}</div>
      <footer>oui</footer>
    </div>
  );
}
