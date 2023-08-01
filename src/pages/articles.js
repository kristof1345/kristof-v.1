import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Articles({ theme }) {
  return (
    <>
      <NextSeo
        title="Kristof's Journal - Articles"
        description="My Articles, about web development, programming, self improvement and much more"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/articles/",
          siteName: "Kristof's Journal - Articles",
        }}
      />
      <main className={`articles-main`}>
        <h1>Article&apos;s</h1>
        <div className="articles-holder">
          <div className="grad-top" />
          <div className="grad-bottom" />
          <div className="articles">
            <article>
              <div className="article-content">
                <div className="timeline"></div>
                <div>Aug 1, 2023 • 321 Words</div>
                <Link
                  href="/articles/this-is-what-copy-turned-into"
                  className="lightlogo"
                >
                  <h4>This is what copy turned into?</h4>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
