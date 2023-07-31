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
          <div>
            <h1>Copy That Sparks <span>Emotions</span></h1>
            <p>
              I Write About Copywriting
            </p>
            <hr className="divider" />
            <div className="holder">
              <span>Get My Emails</span>
              <Link href="https://kristof-3.ck.page/27225f2782" target="_blank">Subscribe</Link>
            </div>
          </div>
        </section>
        <section className="recent-articles">
          <h2>Recent Articles</h2>
          <div className="recent-holder">
            <article>
              <Link
                href="/articles/the-biggest-enemies-of-a-developer"
                className="lightlogo"
              >
                <h4>The biggest enemies of a developer - Part 1</h4>
                <div>375 Words</div>
                <span>Jul 11, 2023</span>
              </Link>
            </article>
            <article>
              <Link
                href="/articles/how-to-learn-way-more-from-coding-than-ever-before"
                className="lightlogo"
              >
                <h4>How to learn way more from coding than ever before</h4>
                <div>375 Words</div>
                <span>Jul 11, 2023</span>
              </Link>
            </article>
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
          </div>
          <div className="sub-holder">
            <span>Get My Emails</span>
            <Link className="blck-sub-btn" href="https://kristof-3.ck.page/27225f2782" target="_blank">Subscribe</Link>
          </div>
          <div className="recent-holder">
            <article>
              <Link
                href="/articles/the-biggest-enemies-of-a-developer"
                className="lightlogo"
              >
                <h4>The biggest enemies of a developer - Part 1</h4>
                <div>375 Words</div>
                <span>Jul 11, 2023</span>
              </Link>
            </article>
            <article>
              <Link
                href="/articles/how-to-learn-way-more-from-coding-than-ever-before"
                className="lightlogo"
              >
                <h4>How to learn way more from coding than ever before</h4>
                <div>375 Words</div>
                <span>Jul 11, 2023</span>
              </Link>
            </article>
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
          </div>
          <Link href="/articles" className="read-more">
            Read More Articles
          </Link>
        </section>
      </main>
    </>
  );
}
