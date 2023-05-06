import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import Link from "next/link";

export default function Footer({ theme }) {
  return (
    <footer className={theme}>
      <Link
        href="https://github.com/kristof1345"
        target="_blank"
        aria-label="Github"
        className={`${theme} ${theme === "light" ? "lightlogo" : "darklogo"}`}
      >
        <BsGithub />
      </Link>
      <Link
        href="https://twitter.com/kristf_nemeth"
        target="_blank"
        aria-label="Twitter"
        className={`${theme} ${theme === "light" ? "lightlogo" : "darklogo"}`}
      >
        <BsTwitter />
      </Link>
      <Link
        href="https://www.instagram.com/kcoder.blog/"
        target="_blank"
        aria-label="Instagram"
        className={`${theme} ${theme === "light" ? "lightlogo" : "darklogo"}`}
      >
        <BsInstagram />
      </Link>
      <Link
        href="https://dev.to/kristof1345"
        target="_blank"
        aria-label="Dev Community"
        className={`${theme} ${theme === "light" ? "lightlogo" : "darklogo"}`}
      >
        <FaDev />
      </Link>
    </footer>
  );
}
