import React from "react";
import Image from "next/image";
import Ace from "../../public/ace-test.jpg";
import Logz from "../../public/logz-test.jpg";
import { FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import { NextSeo } from "next-seo";

const copyClients = () => {
  return (
    <>
      <NextSeo
        title="Get Your First Copywriting Client"
        description="A Less-Known Method For Getting Your First Copywriting Client, And More…"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/copy-clients/",
          siteName: "Get Your First Copywriting Client",
        }}
      />
      <div className="copy-clients-main">
        <div className="field">
          <span className="pre-header">
            For those who are not afraid to put in the work...
          </span>
          <h1>
            A Less-Known Method For Getting Your First Copywriting Client, And
            More…
          </h1>
          <h2>Without sending 1000s of cold DMs a day.</h2>
          <section className="text-sec">
            <p>I spent 3 months searching for my first copywriting client.</p>
            <p>
              And when I finally got one she ghosted me after I sent her the
              copy…
            </p>
            <p>So I know the feeling when you…</p>
            <ul>
              <li>Send 100s of DMs a day just to get left of read.</li>
              <li>
                See everyone else around you get clients and wonder how are they
                doing it.
              </li>
              <li>
                Send the work you spent hours on to someone and then get no
                reply - not even a testimonial…
              </li>
            </ul>
            <p>For 3 months I experienced all of these.</p>
            <p>But I managed to get through these objections.</p>
            <p>And get my first, second, third, etc. client.</p>
            <p>
              Now I made a guide that will make it easier for you to find your
              first client.
            </p>
            <Link href="#opt-in" className="but">
              Get It For FREE
            </Link>
            <div className="testimonial">
              <div>
                <FaQuoteRight />
                <div>
                  Howdy! I&apos;m Logz!{" "}
                  <span>
                    Kristof helped me redo my coaching offer sales page he
                    completely redesigned it fixed up the weaknesses and
                    amplified the strengths of it.
                  </span>{" "}
                  I highly recommend working with Kristof.
                </div>
              </div>
              <Link href="https://twitter.com/ImLogz" target="_blank">
                <Image src={Logz.src} width={400} height={400} alt="Logz" />
              </Link>
            </div>
            <h3>What you&apos;ll learn...</h3>
            <ul>
              <li className="b">
                Why outreach is the best way to get your first client, and how
                to do it properly.
              </li>
              <li>
                A powerful outreach method for those who have the balls to do
                it.
              </li>
              <li className="b">
                All the possible places where you can reach out to clients (the
                ones I used and know about) - and how to do it effectively.
              </li>
              <li>
                How I got my first ever copywriting client - and how you can
                learn from my mistakes.
              </li>
              <li className="b">
                A less-known method for getting clients, that works like a charm
                (this is the method I currently use to get my clients and how I
                got 80% of my clients)
              </li>
              <li>
                A step-by-step breakdown of the above method - important things
                to look out for so you get more replies from clients.
              </li>
              <li className="b">
                Red flags to look out for in your clients - consider yourself
                warned.
              </li>
            </ul>
            <Link href="#opt-in" className="but b2">
              Get It For FREE
            </Link>
            <div className="testimonial">
              <div>
                <FaQuoteRight />
                <div>
                  I am not much of a copywriter, so when I came out with a small
                  e-mail course, the copy in it was something to be desired, but
                  <span>
                    {" "}
                    Kristof rewrote my original work and made it 100 times
                    better. Not only is he great at what he does, but I can tell
                    he is passionate about it.
                  </span>{" "}
                  Thank you, Kristof.
                </div>
              </div>
              <Link href="https://twitter.com/ItsAceGordon" target="_blank">
                <Image src={Ace.src} width={400} height={400} alt="Ace" />
              </Link>
            </div>
            <h3>For FREE?</h3>
            <p>I could easily charge money for this.</p>
            <p>
              But I&apos;m not going to do it because I know how hard it is to
              get your first client.
            </p>
            <p>And I don&apos;t want to make it even harder for you.</p>
            <p>Just your email, and it is yours to take:</p>
            <iframe
              src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
              data-test-id="beehiiv-embed"
              className="opt-in"
              id="opt-in"
              height={52}
              frameBorder={0}
              scrolling="no"
              style={{
                margin: "10px 0 0 0",
                width: "100%",
                borderRadius: "0px !important",
                backgroundColor: "transparent",
              }}
            />
            <span className="respect">
              I respect your privacy. Unsubscribe any time.
            </span>
          </section>
        </div>
      </div>
    </>
  );
};

export default copyClients;
