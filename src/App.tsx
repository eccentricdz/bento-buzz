import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";
import { Articles } from "./components/Articles";
import { useResponsiveColumns } from "./hooks/useResponsiveColumns";
import { About } from "./components/About";

function App() {
  const columns = useResponsiveColumns();
  const [showAbout, setShowAbout] = React.useState(false);

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
          <Link onClick={() => setShowAbout((show) => !show)}>
            {showAbout ? "Articles" : "About"}
          </Link>
        </nav>
      </header>
      <main>
        {showAbout ? (
          <About />
        ) : (
          Array.from(Array(columns).keys()).map((col) => (
            <Articles col={col} colCount={columns} />
          ))
        )}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
