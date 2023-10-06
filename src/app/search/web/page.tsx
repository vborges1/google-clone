import Link from "next/link"

import { ISearchParams } from "@/shared/interfaces/searchParams.interface"
import WebSearchResults from "@/components/WebSearchResults"

export default async function WebSearchPage(searchParams: ISearchParams) {
  const { GOOGLE_API_KEY, GOOGLE_CONTEXT_API_KEY } = process.env
  const { searchTerm, startIndex } = searchParams.searchParams

  await new Promise((resolve: any) => setTimeout(resolve, 10000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CONTEXT_API_KEY}:omuauf_lfve&start=${startIndex ?? 1}`)  
  const data = await response.json()

  if (!response.ok) {
    throw new Error('Ops! Alguma coisa deu errado')
  }

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
  return <>{results && <WebSearchResults results={data} />}</>;
}
