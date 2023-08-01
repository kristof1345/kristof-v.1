import { NextSeo } from "next-seo";
import ScrollToTop from "../components/ScrollToTop";
import Link from "next/link";

const thisIsWhatCopyTurnedInto = () => {
  return (
    <>
      <NextSeo
        title="This is what copy turned into?"
        description=""
        canonical="kristof.vercel.app"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2023-08-01T09:013:13Z",
          },
          url: "https://kristof.vercel.app/articles/this-is-what-copy-turned-into",
          siteName: "Kristof - This is what copy turned into?",
        }}
      />
      <main className={`article-main`}>
        <ScrollToTop />
        <div className="article-holder">
          <section className={`intro`}>
            <h1>This is what copy turned into?</h1>
            <span>Aug 1, 2023 • 321 words</span>
          </section>
          <section className={`article-contents`}>
            <p>Yesterday I visited the Educate website.</p>
            <p>You know, Iman Gadzhi's new courses...</p>
            <p>
              I wanted to check out the copy of the website, but something
              caught my eye.
            </p>
            <p>There was a course on copywriting.</p>
            <p>"Pen to Profit"</p>
            <p>Hmm, pretty good name.</p>
            <p>
              So I checked the description, and this is where everything went
              sideways...
            </p>
            <p>
              Just for some context, I have no problem with Iman, I like the
              guy.
            </p>
            <p>Even tho recently he started turning into more of a guru.</p>
            <p>But, anyway...</p>
            <p>I noticed two things straight away. Well, two sentences...</p>
            <p className="bold">"proven fill-in-the-blanks copy structure"</p>
            <p>Oof.</p>
            <p className="bold">
              "you'll learn how to use A.I. to get all the copy written for you"
            </p>
            <p>...</p>
            <p>...</p>
            <p>Iman.</p>
            <p>WTF</p>
            <p>Every decent copywriter knows that the first one is total BS.</p>
            <p>Only those use it who don't want to do the real work.</p>
            <p>
              Because for every market, every situation, and every time you need
              different copy.
            </p>
            <p>
              Copy that worked in the health niche, is not going to work in the
              fitness niche.
            </p>
            <p>Or copy that worked 10 years ago, isn't going to work now.</p>
            <p>
              It might convert, but you would have way better results with copy
              researched and written now.
            </p>
            <div>
              <p>And coming onto the second point...</p>
              <p>
                This one caused a lot of controversy recently in the copywriting
                world.
              </p>
              <p>
                Everybody is scared of losing their job. And every other guru is
                trying to sell some kind of prompt bundle.
              </p>
              <p>
                You probably heard this a thousand times before, so I will keep
                it short:
              </p>
              <ul>
                <li>
                  <h4>Can A.I. write copy?</h4>
                  <p>Yep.</p>
                </li>
                <li>
                  <h4>Can it write good copy?</h4>
                  <p>Nope.</p>
                  <p>
                    It won't be able to write copy that takes into account
                    awareness and sophistication levels.
                  </p>
                  <p>
                    And those are just two things, there is a lot more going
                    into good copy.
                  </p>
                </li>
                <li>
                  <h4>Will it steal your job?</h4>
                  <p>
                    Nope. Unless you write criminal copy. In case you do...
                    hurry up and become good.
                  </p>
                </li>
                <li>
                  <h4>Do I use A.I.?</h4>
                  <p>Yes, I use it.</p>
                  <p>I do use A.I. for general research and sometimes ideas.</p>
                  <p>But never for writing.</p>
                </li>
              </ul>
              <p>Okay, that was enough of a rant for today...</p>
              <p>'Till next time</p>
            </div>
          </section>
          <div className="sub-holder">
            <span>Get My Emails</span>
            <Link
              className="blck-sub-btn"
              href="https://kristof-3.ck.page/27225f2782"
              target="_blank"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default thisIsWhatCopyTurnedInto;
