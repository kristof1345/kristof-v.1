import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h2 className="logo">Kristof</h2>
      </Link>
      <nav>
        <Link href="/articles">Articles</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </header>
  );
}
