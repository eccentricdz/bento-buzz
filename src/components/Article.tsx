import { FC } from "react";
import "./Article.css";
import { Link } from "./Link";
import { decode } from "he";
import React from "react";
import mixpanel from "mixpanel-browser";

export type BentoBuzzArticle = {
  title: string;
  content: string;
  link: string;
  pubDate: string;
  score: number;
  source?: string;
};

export const Article: FC<BentoBuzzArticle> = ({
  title,
  content,
  link,
  pubDate,
  source,
}) => {
  return (
    <Link
      target="_blank"
      onClick={() => {
        mixpanel.track("Article Clicked", { title, link });
        window.open(link, "_blank");
      }}
    >
      <article>
        {source && pubDate && (
          <section className="metadata">
            <p className="source">{source}</p>
            <p className="date">
              {new Date(pubDate).toLocaleDateString("en-gb", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        )}
        <h1>{decode(title)}</h1>
        <p className="description">{decode(content)}</p>
      </article>
    </Link>
  );
};
