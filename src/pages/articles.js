import Link from "next/link";

export default function Articles({ theme }) {
  return (
    <main className={`articles-main ${theme}`}>
      <div className="articles-holder">
        <div className="articles">
          <article>
            <div className={theme === "light" ? "light-grad" : "dark-grad"} />
            <div className="article-content">
              <div className={theme}>MAY 3, 2023</div>
              <Link
                href="/articles/the-struggles-of-becoming-a-self-taught-developer"
                className={theme === "light" ? "lightlogo" : "darklogo"}
              >
                <h4>The struggles of becoming a self thaught developer</h4>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
