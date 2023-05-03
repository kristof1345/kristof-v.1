import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";

// If loading a variable font, you don't need to specify the font weight

export default function Header({ theme, toggleTheme }) {
  return (
    <header className={`${theme}`}>
      <Link className={`logo ${theme}`} href="/">
        {theme === "light" ? (
          <h2 className="lightlogo">kristof</h2>
        ) : (
          <h2 className="darklogo">kristof</h2>
        )}
      </Link>
      <nav>
        <Link href="/articles" className={theme}>
          articles
        </Link>
      </nav>
      <div
        className={`theme-toggle ${
          theme === "light" ? "lightlogo" : "darklogo"
        }`}
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </div>
    </header>
  );
}
