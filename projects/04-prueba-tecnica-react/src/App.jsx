import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL= `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App () {
  const [fact, setFact] = useState('Lorem ipsum cat fact whatever')
  const [imageUrl, setImageUrl] = useState()

  // no puedes usar React Query, SWR, axios, apollo

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(' ', 3).join(' ')
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
          .then(res => res.jason())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])
  return (
    <main>
      <h1> App de Gatitos </h1>
      <p>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Extraido de ${fact}`} />}
      </p>
    </main>
  )
}
