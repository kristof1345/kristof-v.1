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
                <div>MAY 30, 2023</div>
                <Link
                  href="/articles/the-biggest-enemies-of-a-developer"
                  className="lightlogo"
                >
                  <h4>The biggest enemies of a developer - Part 1</h4>
                </Link>
              </div>
            </article>
            <article>
              <div className="article-content">
                <div className="timeline"></div>
                <div>MAY 18, 2023</div>
                <Link
                  href="/articles/how-to-learn-way-more-from-coding-than-ever-before"
                  className="lightlogo"
                >
                  <h4>How to learn way more from coding than ever before</h4>
                </Link>
              </div>
            </article>
            <article>
              <div className="article-content">
                <div className="timeline"></div>
                <div>MAY 3, 2023</div>
                <Link
                  href="/articles/the-struggles-of-becoming-a-self-taught-developer"
                  className="lightlogo"
                >
                  <h4>The struggles of becoming a self thaught developer</h4>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
