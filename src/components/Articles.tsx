import { FC } from "react";
import { useArticles } from "../data/useArticles";
import { Article } from "./Article";
import "./Articles.css";

export const Articles: FC<{
  id: number;
}> = ({ id }) => {
  const { data: articles = [], isError, isLoading } = useArticles();
  const filteredArticles = articles.filter((_, index) => index % 3 === id);

  return (
    <section className="articles">
      {filteredArticles.map((article) => (
        <Article {...article} key={article.title} />
      ))}
    </section>
  );
};
