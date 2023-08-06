import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Kristof - Copy That Sparks Emotions"
        description="I share engaging stories filled with copywriting lessons"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/",
        }}
      />
      <main className="index-main">
        <section className="welcomer">
          <div>
            <h1>
              Copy That Sparks<span> Emotions</span>
            </h1>
            {/* <p>I Write About Copywriting</p> */}
            <hr className="divider" />
            <div className="holder">
              <span>Get My Emails</span>
              <div>And a free gift...</div>
              <Link href="/subscribe">Subscribe</Link>
            </div>
          </div>
        </section>
        <section className="recent-articles">
          <h2>Recent Articles</h2>
          <div className="recent-holder">
            <article>
              <Link
                href="/articles/this-is-what-copy-turned-into"
                className="lightlogo"
              >
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
          </div>
          <div className="sub-holder">
            <span>Get My Emails</span>
            <div>And a free gift...</div>
            <Link className="blck-sub-btn" href="/subscribe">
              Subscribe
            </Link>
          </div>
          {/* <div className="recent-holder">
            <article>
              <Link
                href="/articles/the-struggles-of-becoming-a-self-taught-developer"
                className="lightlogo"
              >
                <h4>The struggles of becoming a self thaught developer</h4>
                <div>375 Words</div>
                <span>Jul 11, 2023</span>
              </Link>
            </article>
          </div> */}
          {/* <Link href="/articles" className="read-more">
            Read More Articles
          </Link> */}
        </section>
      </main>
    </>
  );
}
