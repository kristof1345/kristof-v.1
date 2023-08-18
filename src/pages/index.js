import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import ArticelNo1 from "../../public/article-no1.png";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Copy That Sparks Emotions"
        description="I share engaging stories filled with copywriting lessons"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/",
        }}
      />
      <main className="index-main">
        <section className="welcomer">
          <div className="some">
            <h1>Learn Copywriting</h1>
            <p>Short articles about copywriting, marketing and persuasion</p>
            <hr className="divider" />
            <div className="holder">
              <span>Join 10+ Subscribers</span>
              <Link href="/subscribe" className="sub-btn">
                Subscribe
              </Link>
            </div>
          </div>
        </section>
        <section className="recent-articles">
          <h2>Recent Articles</h2>
          <div className="recent-holder">
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticelNo1.src}
                  width={300}
                  height={300}
                  alt="Article cover"
                />
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
          </div>
          <div className="sub-holder">
            <span>Join 10+ Subscribers</span>
            <Link className="sub-btn" href="/subscribe">
              Subscribe
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
