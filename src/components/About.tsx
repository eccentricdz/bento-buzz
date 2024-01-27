import mixpanel from "mixpanel-browser";
import "./Article.css";

export const About = () => (
  <section className="about">
    <article
      onClick={() => {
        mixpanel.track("About Card Clicked");
        window.open("https://github.com/eccentricdz/bento-buzz", "_blank");
      }}
    >
      <section className="metadata">
        <p className="source">Github</p>
      </section>
      <h1>About</h1>
      <p className="description">
        Bento Buzz uses AI to go through 1000 news stories every day, giving
        them a score from 0 to 10 based on how important they are. Only stories
        with a score higher than 7 make the cut. It considers factors like the
        number of people affected, the impact size, uniqueness, recency, reader
        actionability, positive aspects, and source reliability. This helps
        Bento Buzz pick out the most interesting and important stories for its
        readers.
      </p>
    </article>
  </section>
);
