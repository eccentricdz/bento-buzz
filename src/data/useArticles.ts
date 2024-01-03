import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { BentoBuzzArticle } from "../components/Article"

export const useArticles = (): UseQueryResult<BentoBuzzArticle[]> => {
    return useQuery({
        queryKey: ["bento-buzz-articles"], queryFn: async () => {
            const response = await fetch("https://bento-buzz.onrender.com/")
            return response.json()
        }
    })
}