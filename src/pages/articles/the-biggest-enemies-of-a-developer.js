import { NextSeo } from "next-seo";
import ScrollToTop from "../components/ScrollToTop";

const theBiggestEnemiesOfADeveloper = () => {
  return (
    <>
      <NextSeo
        title="The biggest enemies of a developer Part 1"
        description="Want to become a web developer? Cool, you don't need a degree for that. You can learn web development by yourself. This is known as a self-taught developer. While it can be a rewarding experience, it also comes with its own set of challenges."
        canonical="www.example.com"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2023-05-05T09:013:13Z",
          },
          url: "https://kristof.vercel.app/articles/the-struggles-of-becoming-a-self-taught-developer",
          siteName: "The Struggles of Becoming a Self Thaught Developer",
        }}
      />
      <main className="article-main">
        <ScrollToTop />
        <div className="article-holder">
          <section className="intro">
            <h1>The biggest enemies of a developer - Part 1</h1>
            <span>Published May 30, 2023</span>
          </section>
          <section className="article-contents">
            <h3>Dealing with frustration and overwhelmness as a Dev</h3>
            <p>
              As a developer, there will be a lot of things trying to make your
              life harder.
              <br /> Whether it&apos;s your boss or a stupid bug. It&apos;s
              important to cope with all this and not get overwhelmed by it.
            </p>
            <p>
              I noticed that I wasn&apos;t really good at coping with these
              things. I felt frustrated and overwhelmed a lot. It affected not
              just my work but also my personal life.
            </p>
            <p>
              So I researched a little and summarized a couple of points that
              might help you out.
            </p>
            <div>
              <h2>How to cope with frustration</h2>
              <p>
                <span className="bold-important">
                  Coding is frustrating, ok?
                </span>
                <br />I don&apos;t care what anybody says it is not easy to
                code.
              </p>
              <p>
                At first, your code runs fine, then you accidentally remove a
                semicolon and your whole house catches on fire.
              </p>
              <p>
                But jokes aside. Here is what I found helpful over the years:
              </p>
              <h3>Take a break</h3>
              <p>
                I found that 99% of the time when you feel frustrated about
                programming the best thing you can do is hit the shutdown button
                and take a break(please don&apos;t be like me and save your
                files first...).
              </p>
              <p>
                Close your laptop and go for a walk. Play with your kids. Read
                or do something that would make you forget about that bug you
                are currently stuck on.
              </p>
              <p>
                Then when you feel ready get back to it, and you will feel way
                better. This lets your mind take a break. This way it can
                process all that information you dumped there unconsciously.
              </p>
              <p>
                <span className="bold">Fun fact: </span>
                Our subconscious is way more powerful than our conscious.
              </p>
              <h3>Accept it</h3>
              <p>Remind yourself that frustration is normal.</p>
              <p>
                You are doing hard things that not everybody would be capable to
                do so it&apos;s understandable if you feel frustrated.
              </p>
              <p>
                Try to view it as a sign that you are getting out of your
                comfort zone and making progress.
                <br />
                Essentially that&apos;s what is it all about -
                <span className="bold"> constantly learning new things.</span>
              </p>
              <h3>Remember that you are not alone</h3>
              <p>
                Come on now, there are a lot of developers out there just like
                you who got stuck on the same problem. No reason for you to feel
                frustrated.
              </p>
              <p>
                Try Googleing the problem.
                <br /> Somebody probably already encountered it and uploaded the
                solution for it.
                <br /> If not ask for help on forums such as Stack Overflow(and
                hope not to get downvoted to depression).
              </p>
              <p>
                If you don&apos;t find a solution online but still manage to
                solve the problem try to be your own savior and upload it
                somewhere.
                <br />
                This way the next person won&apos;t have to go through what you
                went through.
              </p>
              <p className="bold">
                Thanks for reading this article. Part 2 is coming soon.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default theBiggestEnemiesOfADeveloper;
