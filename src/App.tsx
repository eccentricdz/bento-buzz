import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";
import { Articles } from "./components/Articles";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";

function App() {
  const columns = useResponsiveColumns();

  return (
    <div className="bento-buzz">
      <header>
        <Link>
          <img
            src={logo}
            alt="logo"
            className="logo"
            style={{ height: Math.max(48, columns * 24) }}
          />
        </Link>
        <nav className="header-links">
          <Link
            href="https://github.com/eccentricdz/bento-buzz"
            target="_blank"
          >
            {"Github"}
          </Link>
          {/* <Link
            onClick={() => setShowAbout((show) => !show)}
            style={{ cursor: "pointer" }}
          >
            {showAbout ? "Articles" : "About"}
          </Link> */}
        </nav>
      </header>
      <main>
        {Array.from(Array(columns).keys()).map((col) => (
          <Articles col={col} colCount={columns} />
        ))}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
