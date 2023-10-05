import Link from "next/link"

import { IResultItems } from "@/shared/interfaces/resultItems.interface"
import { ISearchParams } from "@/shared/interfaces/searchParams.interface"

export default async function WebSearchPage(searchParams: ISearchParams) {
  const { GOOGLE_API_KEY, GOOGLE_CONTEXT_API_KEY } = process.env
  const { searchTerm, startIndex } = searchParams.searchParams

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_API_KEY}:omuauf_lfve&&q=${searchTerm}`)
  console.log(response)
  const data = await response.json()
  console.log(data)
  const results = data.items
  
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Sem resultados</h1>
        <p className="text-lg">
          Sua pesquisa não encontrou nenhum documento correspondente{" "}
          <Link href="/" className="text-blue-500">
            Início
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <h1>ok</h1>}</>;
}
