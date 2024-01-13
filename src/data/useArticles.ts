import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { BentoBuzzArticle } from "../components/Article"

export const useArticles = (): UseQueryResult<BentoBuzzArticle[]> => {
    return useQuery({
        queryKey: ["bento-buzz-articles"], queryFn: async () => {
            const response = await fetch("http://bento-buzz.us-east-2.elasticbeanstalk.com/")
            return response.json()
        }
    })
}