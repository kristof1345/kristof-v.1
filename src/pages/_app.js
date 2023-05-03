import Header from "./components/Header";
import "@/styles/globals.scss";
import { useState } from "react";

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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Component {...pageProps} theme={theme} />
    </>
  );
}
