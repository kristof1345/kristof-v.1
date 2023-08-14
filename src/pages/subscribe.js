import React from "react";
import Image from "next/image";
import me from "../../public/me.jpg";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Script from "next/script";

const subscribe = () => {
  return (
    <>
      <NextSeo
        title="Copy That Sparks Emotions - Subscribe"
        description="Subscribe to my email list, where I share engaging stories filled with copywriting lessons"
        canonical="https://kristof.vercel.app/"
        openGraph={{
          url: "https://kristof.vercel.app/subscribe/",
          siteName: "Copy That Sparks Emotions - Subscribe",
        }}
      />
      <div className="subscribe-main">
        <section className="img-sec">
          <Image
            src={me.src}
            width={2000}
            height={2000}
            alt="Picture of the author"
          />
        </section>
        <section className="text-sec">
          <h1>Copy That Sparks Emotions</h1>
          <h3>
            Subscribe to my email list, where I simplify copywriting so it
            doesn&apos;t leave you feeling mind numb
          </h3>
          <p>✅Free copywriting and marketing tips</p>
          <p>✅Resources that are exclusive to my list</p>
          <p>✅Stories from my life...</p>
          <h4>Plus:</h4>
          <p>
            Get a free gift from me that will teach you how to get your first
            copywriting client
          </p>
          <h4>Note:</h4>
          <p>
            If you don&apos;t get a welcome email, please check your Spam and/or
            Promotions folders
          </p>
          {/* <Link
          href="https://kristofs-newsletter-8353d2.beehiiv.com/subscribe"
          className="sub-sub"
        >
          Suscribe
        </Link> */}
          {/* <iframe
            src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
            data-test-id="beehiiv-embed"
            height={52}
            frameBorder={0}
            scrolling="no"
            style={{
              margin: "20px 0 0 0",
              width: "100%",
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          /> */}
          <Script
            className="fucker"
            async
            data-uid="867da82831"
            src="https://kristof-3.ck.page/867da82831/index.js"
          />
          {/* <span className="respect">
            We respect your privacy. Unsubscribe any time.
          </span> */}
        </section>
      </div>
    </>
  );
};

export default subscribe;
