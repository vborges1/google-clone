import { IResultItems } from "@/shared/interfaces/resultItems.interface";

export default function ImageSearchResults({ results }: any) {
  return (
    <div>
      <div className="">
        { results.items?.map((result: IResultItems) => (
          <div className="group" key={result.cacheId}>
              
          </div>
        ))}
      </div>
    </div>
  )
}
