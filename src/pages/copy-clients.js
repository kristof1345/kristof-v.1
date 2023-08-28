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
          <h1>Get your first copywriting client…</h1>
          <h2>Without sending 100s of cold DMs a day.</h2>
          <section className="text-sec">
            <Link href="#opt-in" className="but">
              Get It For FREE
            </Link>
            <h3>You&apos;ll learn...</h3>
            <div className="ul-holder">
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
                  All the possible places where you can reach out to clients
                  (the ones I used and know about) - and how to do it
                  effectively.
                </li>
                <li>
                  How I got my first ever copywriting client - and how you can
                  learn from my mistakes.
                </li>
                <li className="b">
                  A less-known method for getting clients, that works like a
                  charm (this is the method I currently use to get my clients
                  and how I got 80% of my clients)
                </li>
                <li>
                  A step-by-step breakdown of the above method - important
                  things to look out for so you get more replies from clients.
                </li>
                <li className="b">
                  Red flags to look out for in your clients - consider yourself
                  warned.
                </li>
              </ul>
            </div>
            <Link href="#opt-in" className="but b2">
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
              <Image src={Logz.src} width={400} height={400} alt="Logz" />
            </div>
            <h3>For FREE?</h3>
            <div className="holder-holder">
              <div className="opt-in-holder">
                <p>I could easily charge money for this.</p>
                <p>
                  But I&apos;m not going to do it because I know how hard it is
                  to get your first client.
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default copyClients;
