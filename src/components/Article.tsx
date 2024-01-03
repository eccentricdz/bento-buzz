import { FC } from "react";
import "./Article.css";
import { Link } from "./Link";
import React from "react";

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
  score,
  source,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article>
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
        <h1>{title}</h1>
        <p className="description">{content}</p>
      </article>
    </Link>
  );
};
