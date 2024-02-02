import { FC } from "react";
import "./Article.css";
import { Link } from "./Link";
import { decode } from "he";
import React from "react";
import mixpanel from "mixpanel-browser";

/**
 * Article properties.
 */
export type BentoBuzzArticle = {
  /**
   * The title of the article.
   */
  title: string;
  /**
   * The content of the article.
   */
  content: string;

  /**
   * The link to the article.
   */
  link: string;

  /**
   * The publication date of the article.
   */
  pubDate: string;
  /**
   * The source of the article.
   */
  score: number;
  /**
   * The source of the article.
   * @example "BBC"
   */
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
