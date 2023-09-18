"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: any) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="text-center mt-10">
            <h1>Alguma coisa deu errado</h1>
            <button 
                className="hover:text-amber-600" 
                onClick={() => reset()}
            >Tentar novamente</button>
        </div>
    )
}
