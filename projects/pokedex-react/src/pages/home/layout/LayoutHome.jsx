import React, { useEffect, useState } from 'react'
import css from './layout.module.scss'
import Header from '../header/header'
import axios from 'axios'
import { URL_POKEMON } from '../../../api/apiRest'
import Card from '../../card/Card'

function LayoutHome() {

  const [arrayPokemon, setArrayPokemon] = useState([])


  useEffect(()=> {
    const api = async () => {
      const apiPoke = await axios.get(`${URL_POKEMON}`)

      setArrayPokemon(apiPoke.data.results)
    }

    api()
  }, [])



  return (
    <>
    <div className={css.layout}>
      <Header />
    </div>
    
    <div>
        {arrayPokemon.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div></>
  );
}

export default LayoutHome;