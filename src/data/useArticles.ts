import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { BentoBuzzArticle } from "../components/Article"

export const BENTO_BUZZ_API_URL = "https://api.bentobuzz.xyz/"

export const useArticles = (): UseQueryResult<BentoBuzzArticle[]> => {
    return useQuery({
        queryKey: ["bento-buzz-articles"], queryFn: async () => {
            const response = await fetch(BENTO_BUZZ_API_URL)
            return response.json()
        }
    })
}