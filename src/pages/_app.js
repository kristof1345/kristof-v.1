import Header from "./components/Header";
import "@/styles/globals.scss";
import { useState } from "react";
import Footer from "./components/Footer";
import { DefaultSeo } from "next-seo";
import relImage from "../../public/K.png";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <DefaultSeo
        title="Kristof's Journal"
        description="My ideas and thoughts about web development, programming and self
            improvement"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://kristof.vercel.app/",
          siteName: "Kristof's Journal",
        }}
        twitter={{
          handle: "@kristf_nemeth",
          site: "kristof.vercel.app",
          cardType: "summary",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            type: "image/png",
            href: `${relImage.src}`,
          },
        ]}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
