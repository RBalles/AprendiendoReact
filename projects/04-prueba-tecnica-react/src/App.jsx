import { useEffect, useState } from "react"

export function App () {
  const [fact, setFact] = useState('Lorem ipsum cat fact whatever')

  // no puedes usar React Query, SWR, axios, apollo

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fetch()))
  }, [])
  return (
    <main>
      <h1> App de Gatitos </h1>
      <p>
        {fact}
      </p>
    </main>
    
  )
}