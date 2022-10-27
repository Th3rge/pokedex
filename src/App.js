import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import PokeBackground from './img/pokedex.png'
import './App.css'



function App() {

  const [result, setResult] = useState({})
  const initialValue = 2;
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${initialValue}.gif`

  const GetPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${initialValue}`)
    .then((res)=> {
        setResult(res.data)
    })
    .catch((err)=> {
        console.log(err)
    })

  }


  useLayoutEffect(()=>{
      
    GetPokemons()

  }, [initialValue])



  //result.id === initialValue ? console.log(result.id, result.name) : GetPokemons()
console.log(result)

  
  return (
    <div className="App">
      <div className='main'>
      <img src={pokemonImg} alt='pokemon' className='pokemon_image'/>
        
        <h1 className='pokemon_data'>
          <span className='pokemon_number'>{result.order} - {result.name}</span>
        </h1>
        
        <img src={PokeBackground} alt='pokedex' className='pokedex'/>
        
      </div>
    </div>
  );
}

export default App;
