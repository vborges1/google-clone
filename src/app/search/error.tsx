"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: any) {
    useEffect(() => {

    }, [error])
    return (
        <div className="flex flex-col justify-center items-center pt-10">
            <h1 className="text-3xl mb-4">Alguma coisa deu errado2</h1>
            <button className="text-blue-500" onClick={() => reset()}>Tentar novamente</button>
        </div>
    )
}
