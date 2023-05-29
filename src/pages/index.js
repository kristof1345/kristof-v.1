import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Home() {
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
      <main className="index-main">
        <section className="welcomer">
          <h1>Kristof&apos;s Journal</h1>
          {/* <hr className="divider" /> */}
          <p>
            If you don&apos;t care about web development or self improvement
            just forget about this website
          </p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button>Coming Soon</button>
          </form>
        </section>
        <section className="recent-articles">
          <h2>Recent Articles</h2>
          <div>
            <article>
              <div>MAY 18, 2023</div>
              <Link
                href="/articles/how-to-learn-way-more-from-coding-than-ever-before"
                className="lightlogo"
              >
                <h4>How to learn way more from coding than ever before</h4>
              </Link>
            </article>
            <article>
              <div>MAY 18, 2023</div>
              <Link
                href="/articles/how-to-learn-way-more-from-coding-than-ever-before"
                className="lightlogo"
              >
                <h4>How to learn way more from coding than ever before</h4>
              </Link>
            </article>
          </div>
          <Link href="/articles" className="read-more">
            Read More Articles
          </Link>
        </section>
      </main>
    </>
  );
}
