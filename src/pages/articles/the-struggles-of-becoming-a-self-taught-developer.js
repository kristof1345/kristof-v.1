import { NextSeo } from "next-seo";
import React from "react";

const theStugglesOfBecomingASelfTaughtDeveloper = ({ theme }) => {
  return (
    <>
      <NextSeo
        title="The Struggles of Becoming a Self Thaught Developer"
        description="Want to become a web developer? Cool, you don't need a degree for that. You can learn web development by yourself. This is known as a self-taught developer. While it can be a rewarding experience, it also comes with its own set of challenges."
        canonical="www.example.com"
        openGraph={{
          type: "article",
          article: {
            publishedTime: "2023-05-05T09:013:13Z",
          },
          url: "www.example.com/next-seo-blog",
          siteName: "The Struggles of Becoming a Self Thaught Developer",
        }}
      />
      <main className={`article-main ${theme}`}>
        <div>
          <section className={`intro`}>
            <h1 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
              The Struggles of Becoming a Self Thaught Developer
            </h1>
          </section>
          <section className={`article-contents`}>
            <h3 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
              Want to become a web developer?
            </h3>
            <p>Cool, you don&apos;t need a degree for that.</p>
            <p>
              You don&apos;t even need to go through a boot camp or pay for an
              expensive course.
            </p>
            <p>
              You can learn web development by yourself. This is known as a
              self-taught developer. While it can be a rewarding experience, it
              also comes with its own set of challenges. But if this
              doesn&apos;t scare you off. Let&apos;s see a couple of the
              problems self-taught developers face.
            </p>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                1. Learning resources
              </h2>
              <p>
                When it comes to learning how to code, the first step is to
                decide which method of learning is best for you. With so many
                resources available, such as courses, YouTube tutorials, and so
                on, this can be a daunting task.
              </p>
              <p>
                Afterall, the decision is yours to make, as you know yourself
                best. But, I can offer one piece of advice: no matter which
                route you choose, stick with it. Don&apos;t jump from one course
                to the next halfway through. I know from experience that this is
                not a productive approach. Instead, commit to the path you have
                chosen and stick with it through to the end.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                2. Burnout
              </h2>
              <p>
                Burnout can appear at different times and levels for each
                individual. It might happen to you too at some point in your
                career, no matter how motivated you are. Self-taught web
                developers are particularly vulnerable to burnout. Thankfully
                there are a few ways to combat it.
              </p>
              <ul>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Having a purpose/vision
                  </h4>
                  <p>
                    Having a clear purpose or vision in front of you will help
                    you to avoid burnout and push through harder times.
                  </p>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Taking a break
                  </h4>
                  <p>
                    Taking a break when you start to feel burnt out is also
                    beneficial. It allows you to take a step back and look at
                    the situation from a new perspective.
                  </p>
                </li>
                <li>
                  <h4
                    className={`${
                      theme === "light" ? "lightlogo" : "darklogo"
                    }`}
                  >
                    Loving what you do
                  </h4>
                  <p>
                    If you love to do something, or if you are interested in
                    that thing, it will be way easier to avoid burnout.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                3. Loneliness
              </h2>
              <p>
                Loneliness is one of the biggest demons of a self-taught
                developer. Having friends is great. But if you can&apos;t share
                your journey with someone, it can be difficult to stay motivated
                and inspired.
              </p>
              <p>
                Of course, it is possible to be a lonely web developer. But it
                is much more enjoyable and rewarding when you have someone to
                share it with.
              </p>
              <p>
                If you don&apos;t have someone in your life who does the same
                thing you do, don&apos;t worry - you are not alone. There are
                thousands of lonely developers out there. My advice would be to
                join a community, whether it&apos;s online or in person. Doing
                so can be a great experience and can open up a wealth of
                knowledge and support.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                4. Study methods
              </h2>
              <p>
                When it comes to learning something on your own, the key is to
                create a plan and then turn it into a habit. This way, it will
                become almost automatic and you won&apos;t have to think about
                it - you&apos;ll just do it.
              </p>
              <p>
                If you&apos;re learning to code, you&apos;re likely juggling
                other responsibilities too. So how do you find the time to code
                every day? If you&apos;re having trouble finding time, it&apos;s
                likely because you&apos;re not dedicated enough. But let&apos;s
                say you can make the time - the next question is how much time
                should you dedicate to coding daily? The answer to this depends
                on you and your goals, but dedicating 1-2 hours a day is more
                than enough.
              </p>
              <p>
                Remember, it&apos;s not about who does the most work in a day,
                it&apos;s about who is the most consistent.
              </p>
            </div>
            <div>
              <h2 className={`${theme === "light" ? "lightlogo" : "darklogo"}`}>
                5. Tutorial hell
              </h2>
              <p>
                You've likely heard of the term "tutorial hell" before. It's one
                of the biggest mistakes you can make when learning to code.
              </p>
              <p>
                Tutorial hell looks something like this: You start out learning
                from a course. You watch the course and copy the code, feeling
                amazing that you&apos;ve learned something new. But when you try
                to recall it the next day, you realize you&apos;ve forgotten it
                and have to start from the beginning again. When you&apos;re
                stuck in this never-ending cycle, you might feel like
                you&apos;re learning to code. But that is an illusion. When you
                want to build something without a tutorial, you get stuck.
              </p>
              <p>
                My suggestion to you is to take notes. That&apos;s right - take
                a course and take notes. When you finish a lesson, review the
                lesson notes and I guarantee you&apos;ll remember way more than
                before.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default theStugglesOfBecomingASelfTaughtDeveloper;
