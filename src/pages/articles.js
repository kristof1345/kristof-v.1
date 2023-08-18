import Link from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import ArticleNo1 from "../../public/article-no1.png";

export default function Articles() {
  return (
    <>
      <NextSeo
        title="Copy That Sparks Emotions - Articles"
        description="I share engaging stories filled with copywriting lessons"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/articles/",
          siteName: "Copy That Sparks Emotions - Articles",
        }}
      />
      <main className={`articles-main`}>
        <h1>Article&apos;s</h1>
        <div className="articles-holder">
          <div className="articles">
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
                  width={300}
                  height={300}
                  alt="Article cover"
                />
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
                  width={300}
                  height={300}
                  alt="Article cover"
                />
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
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
          <div className="articles">
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
                  width={300}
                  height={300}
                  alt="Article cover"
                />
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
                  width={300}
                  height={300}
                  alt="Article cover"
                />
                <h4>This is what copy turned into?</h4>
                <div>321 words</div>
                <span>Aug 1, 2023</span>
              </Link>
            </article>
            <article>
              <Link href="/articles/this-is-what-copy-turned-into">
                <Image
                  className="article-cover"
                  src={ArticleNo1.src}
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
        </div>
      </main>
    </>
  );
}
