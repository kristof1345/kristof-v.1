import { BsGithub, BsTwitter, BsLink45Deg } from "react-icons/bs";
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
        href="https://linktr.ee/kristf_nemeth"
        target="_blank"
        aria-label="Link-Tree"
      >
        <BsLink45Deg />
      </Link>
    </footer>
  );
}
