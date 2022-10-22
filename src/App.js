import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeBackground from './img/pokedex.png'
import './App.css'



function App() {

  const [result, setResult] = useState({})
  const initialValue = 3;


  const GetPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${initialValue}`)
    .then((res)=> {
        setResult(res.data)
    })
    .catch((err)=> {
        console.log(err)
    })

  }


  useEffect(()=>{
      {GetPokemons()}

  }, [initialValue])



  result.id === initialValue ? console.log(result.id, result.name) : GetPokemons()


  
  return (
    <div className="App">
      <div className='main'>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif' alt='pokemon' className='pokemon_image'/>
        <img src={PokeBackground} alt='pokedex' className='pokedex'/>
        
      </div>
    </div>
  );
}

export default App;
