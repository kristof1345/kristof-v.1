import React from "react";
import Image from "next/image";
import me from "../../public/me.jpg";
import Link from "next/link";

const subscribe = () => {
  return (
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
          Subscribe to my email list, where I share engaging stories filled with
          copywriting lessons
        </h3>
        <p>✅Free copywriting and marketing tips</p>
        <p>✅Resources that are exclusive to my list</p>
        <p>✅Stories from my life...</p>
        <h3>Plus:</h3>
        <p>Get a free gift from me.</p>
        <h3>Note:</h3>
        <p>
          If you don't get a welcome email, please check your Spam and/or
          Promotions folders.
        </p>
        <Link
          href="https://kristofs-newsletter-8353d2.beehiiv.com/subscribe"
          className="sub-sub"
        >
          Suscribe
        </Link>
      </section>
    </div>
  );
};

export default subscribe;
