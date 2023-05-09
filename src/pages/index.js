import { NextSeo } from "next-seo";

export default function Home({ theme }) {
  return (
    <>
      <NextSeo
        title="Kristof's Journal"
        description="My ideas and thoughts about web development, programming and self
            improvement"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/",
        }}
      />
      <main className={`index-main ${theme}`}>
        <div className="welcomer">
          {theme === "dark" ? (
            <h1 className="darkh1">Kristof&apos;s Journal</h1>
          ) : (
            <h1>Kristof&apos;s Journal</h1>
          )}
          <hr className={theme === "light" ? "divider" : "dark-divider"} />
          <p>
            If you don't care about web development or self improvement just
            forget about this website
          </p>
        </div>
      </main>
    </>
  );
}
