import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <header className={router.pathname === "/" ? "blc-header" : ""}>
      <Link href="/">
        <h2 className="logo">Kristof</h2>
      </Link>
      <nav>
        <Link href="/articles">Articles</Link>
        <div className="toggle">
          {!menu ? (
            <MdMenu onClick={() => setMenu((prev) => !prev)} />
          ) : (
            <MdClose onClick={() => setMenu((prev) => !prev)} />
          )}
        </div>
      </nav>
      <div className={`dropdown ${menu === true ? "down" : ""}`}>
        <nav>
          <Link href="/articles">Articles</Link>
        </nav>
      </div>
    </header>
  );
}
