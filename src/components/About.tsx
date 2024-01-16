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
        Bento Buzz employs AI to analyze the most impactful 1000 news stories
        daily, rating them on a significance scale from 0 to 10. Only articles
        with a rating exceeding <mark>7</mark> are curated for presentation. The
        assessment of significance is based on seven crucial factors:
        <br />
        <br />
        1. <mark>Scope</mark>: The number of individuals affected by the event.
        <br />
        <br />
        2. <mark>Intensity</mark>: The magnitude of the event's impact.
        <br />
        <br />
        3. <mark>Originality</mark>: The unexpected or distinctive nature of the
        event.
        <br />
        <br />
        4. <mark>Immediacy</mark>: The temporal proximity of the event.
        <br />
        <br />
        5. <mark>Practicability</mark>: The likelihood that readers can take
        actionable steps for personal benefit in response to the news.
        <br />
        <br />
        6. <mark>Positivity</mark>: An evaluation of the event's positive
        aspects, counteracting media negativity bias.
        <br />
        <br />
        7. <mark>Credibility</mark>: An assessment of the source's reliability.
        <br />
        <br />
        Bento Buzz utilizes these multidimensional criteria to sift through the
        news landscape, offering a refined selection that ensures both substance
        and relevance for the informed reader.
      </p>
    </article>
  </section>
);
