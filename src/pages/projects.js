import Link from "next/link";
import { NextSeo } from "next-seo";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Kristof's Journal - Projects"
        description="My Articles, about web development, programming, self improvement and much more"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/projects/",
          siteName: "Kristof's Journal - Projects",
        }}
      />
      <main className={`projects-main`}>
        <div className="projects-holder">
          <h1>Project&apos;s</h1>
          <section className="projects">
            <article className={"divider"}>
              <section className="sec1">
                <div className="icons">
                  <TbBrandNextjs />
                  <TbBrandGolang />
                </div>
                <Link href="https://opensourcegrader.vercel.app/">
                  opensourcegrader.vercel.app
                </Link>
              </section>
              <section className="sec2">
                A small project with a Next.js front-end and a Go back-end.
                Grades Project repos from 1-10.
              </section>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
