import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/kristof1345"
        target="_blank"
        aria-label="Github"
      >
        <BsGithub />
      </Link>
      <Link
        href="https://twitter.com/kristf_nemeth"
        target="_blank"
        aria-label="Twitter"
      >
        <BsTwitter />
      </Link>
      <Link
        href="https://www.instagram.com/kcoder.blog/"
        target="_blank"
        aria-label="Instagram"
      >
        <BsInstagram />
      </Link>
      <Link
        href="https://dev.to/kristof1345"
        target="_blank"
        aria-label="Dev Community"
      >
        <FaDev />
      </Link>
    </footer>
  );
}
