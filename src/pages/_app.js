import Header from "./components/Header";
import "@/styles/globals.scss";
import { useState } from "react";
import Footer from "./components/Footer";
import { DefaultSeo } from "next-seo";
import relImage from "../../public/K.png";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        title="Copy That Sparks Emotions"
        description="I share engaging stories filled with copywriting lessons "
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://kristof.vercel.app/",
          siteName: "Copy That Sparks Emotions",
        }}
        twitter={{
          handle: "@kristf_nemeth",
          site: "kristof.vercel.app",
          // cardType: "summary",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            type: "image/png",
            href: `${relImage.src}`,
          },
        ]}
      />
      {router.pathname === "/subscribe" ? <></> : <Header />}
      <Component {...pageProps} />
      {router.pathname === "/subscribe" ? <></> : <Footer />}
    </>
  );
}
