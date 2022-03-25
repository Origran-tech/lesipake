import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0'
import Layout from "../components/Layout";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
      <Script
        async
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`,
        }}
      />
    </Layout>
  );
}

export default MyApp;