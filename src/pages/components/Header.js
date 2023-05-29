import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <Link href="/">
        <h2 className="logo">Kristof</h2>
      </Link>
      <nav>
        <Link href="/articles">Articles</Link>
        <Link href="/projects">Projects</Link>
        <div className="toggle">
          {!menu ? (
            <HiMenuAlt3 onClick={() => setMenu((prev) => !prev)} />
          ) : (
            <MdClose onClick={() => setMenu((prev) => !prev)} />
          )}
        </div>
      </nav>
      <div className={`dropdown ${menu === true ? "down" : ""}`}>
        <nav>
          <Link href="/articles">Articles</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
