import { IResultItems } from "@/shared/interfaces/resultItems.interface"

export default async function WebSearchPage({ searchParams }: any) {
  const { GOOGLE_API_KEY, GOOGLE_CONTEXT_API_KEY } = process.env
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_API_KEY}&q=${searchParams.searchTerm}`)
  const data = await response.json()
  const results = data.items

  return (
    <>
      {results && results.map((result: IResultItems) => {
        return <h1 key={result.cacheId}>{result.title}</h1>
      })}
    </>
  )
}
