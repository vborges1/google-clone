"use client"

import { useEffect, useState } from "react"

const NEXT_PLUBIC_IP_API_KEY = process.env.NEXT_PLUBIC_IP_API_KEY

export default function CountryLookup() {
    const [country, setCountry] = useState('Brasil')
    if (NEXT_PLUBIC_IP_API_KEY) {
        useEffect(() => {
        fetch(`https://extreme-ip-lookup.com/json/?key=${NEXT_PLUBIC_IP_API_KEY}`)
            .then((res: any) => res.json())
            .then((data) => setCountry(data.country))
    }, [])
    }
    return (
        <div>{country}</div>
    )
}
