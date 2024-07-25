import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  
  return (
    <section className="App">

      <TwitterFollowCard userName="rballes" name="Ramón Ballesteros"/>
      <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán"/>
      <TwitterFollowCard userName="pheralb" name="Pablo Hernández"/>
      <TwitterFollowCard userName="CristianPato88" name="Cristian Pato"/>
      <TwitterFollowCard userName="tatobiker" name="Joaquín"/>
      
    </section>
  )
}