import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "./components/Link";
import { Articles } from "./components/Articles";

function App() {
  return (
    <div className="bento-buzz">
      <header>
        <Link>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <nav className="header-links">
          <Link href="https://www.bentobuzz.com.au/">{"Github"}</Link>
          <Link href="https://www.bentobuzz.com.au/collections/bento-boxes">
            {"About"}
          </Link>
        </nav>
      </header>
      <main>
        <Articles id={0} />
        <Articles id={1} />
        <Articles id={2} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
