import { NextSeo } from "next-seo";

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
        </section>
      </main>
    </>
  );
}
