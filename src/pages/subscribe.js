import React from "react";
import Image from "next/image";
import me from "../../public/me.jpg";
import { NextSeo } from "next-seo";

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
            I build Email List&apos;s and Sales Pages for brands and share the
            stories and lessons here.
          </h3>
          <p>✅Crazy stories from my life.</p>
          <p>✅Resources that are exclusive to my list.</p>
          <p>✅Free copywriting tips so good you lick your fingers.</p>
          <p>✅Various methods that helped me with client acquisition.</p>
          <p>✅Okay. Mostly just stories from my life as a copywriter...</p>
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
          <iframe
            src="https://embeds.beehiiv.com/cee325e0-9382-4e37-975e-2bab94da0abd?slim=true"
            data-test-id="beehiiv-embed"
            height={52}
            frameBorder={0}
            scrolling="no"
            style={{
              margin: "30px 0 0 0",
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
    </>
  );
};

export default subscribe;
