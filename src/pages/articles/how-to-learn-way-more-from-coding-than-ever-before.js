import { NextSeo } from "next-seo";
import ScrollToTop from "../components/ScrollToTop";

const howToLearnWayMoreFromCodingThanEverBefore = ({ theme }) => {
  return (
    <>
      <NextSeo
        title="How to learn way more from coding than ever before"
        description="As a developer, learning is your superpower. It is especially important now that frameworks and new tech emerges every 2 days. The faster you can learn something, the more valuable you will be."
        canonical="www.example.com"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2023-05-18T09:013:13Z",
          },
          url: "https://kristof.vercel.app/articles/how-to-learn-way-more-from-coding-than-ever-before",
          siteName: "How to learn way more from coding than ever before",
        }}
      />
      <main className={`article-main ${theme}`}>
        <ScrollToTop theme={theme} />
        <div className="article-holder">
          <section className={`intro`}>
            <h1 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
              How to learn way more from coding than ever before
            </h1>
            <span className={theme}>Published May 18, 2023</span>
          </section>
          <section className={`article-contents`}>
            <h3 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
              Want to become a superhero programmer?
            </h3>
            <p>
              As a developer, learning is your superpower. It is especially
              important now that frameworks and new tech emerges every 2 days.
            </p>
            <p>
              The faster you can learn something, the more valuable you will be.
              So let&apos;s look at a couple of tricks I use to help me learn
              new stuff and not forget what I already learned.
            </p>
            <div>
              <ul>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Make sure that you understand concepts
                  </h4>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Apply what you learned(Practice)
                  </h4>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Take notes
                  </h4>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Debug
                  </h4>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Find a community
                  </h4>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                1. Make sure that you understand the concepts
              </h2>
              <p>
                When learning to code you can&apos;t memorize code, I know
                because I did it for a long time.
              </p>
              <p>
                But memorizing code won&apos;t get you far. If you actually want
                to learn something, make sure you understand the working of it.
                But not just what it does but why it does it too.
              </p>
              <p>
                For example: Take an &qout;if...else&qout; statement or a
                logical operator like &qout;&&&qout;. Besides understanding what
                it does when you use it in your code, you should look a little
                deeper and understand why it does that thing.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                2.Apply what you learned(Practice)
              </h2>
              <p>
                We can all agree, that learning without actually applying the
                concepts you learned, is just wasting your time. I mean, why did
                you even learn it if you are not going to apply it in real life?
                It doesn&apos;t make sense.
              </p>
              <p>
                You need to apply things to avoid eventually forgetting them.
                When you apply them in practice your brain builds connections.
                This way you will actually remember those concepts you applied.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                3. Take notes
              </h2>
              <p>
                I do this when taking courses, or just generally learning new
                concepts that I didn&apos;t know about before. And let me tell
                you that taking notes, is just as important as watching a
                course.
              </p>
              <p>
                Because when you take a course writing down a couple of concepts
                throughout it, after finishing, you will have a summary of it on
                paper, that you can come back to any time.
              </p>
              <p>
                This method also helps you to better understand concepts because
                it forces you to write down concepts in your own words.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                4. Debug
              </h2>
              <p>
                The majority of programmers HATE debugging(not that I love it).
                It is a tedious process and sometimes the problem is just a
                missing semicolon.
              </p>
              <p>
                But what I noticed is that when I actually find the bugs in my
                code and solve them. I remember those problems and the solutions
                to them way better in the future. This is because I already
                encountered them before.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                5. Find a community
              </h2>
              <p>
                Finding and joining a good community can be a little tricky, but
                it&apos;s definitely worth it. In a community, you can share
                your code and finished projects, and the community would give
                feedback on it. You also would be able to provide feedback on
                other people&apos;s code.
              </p>
              <p>
                Be open to feedback, whether it&apos;s good or bad because
                it&apos;s all an opportunity to learn something new.
              </p>
              <p>Thanks for reading!</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default howToLearnWayMoreFromCodingThanEverBefore;
