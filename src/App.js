import React, { useState, useLayoutEffect } from 'react'
import axios from 'axios'
import PokeBackground from './img/pokedex.png'
import './App.css'



function App() {

  const [result, setResult] = useState({})
  const [initialValue, setInitialValue] = useState(11);
  const [resultSearch, setResultSearch] = useState('')
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${initialValue}.gif`

  const GetPokemons = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${initialValue}`)
    .then((res)=> {
      setResult(res.data)
    })
    .catch((err)=> {
        console.log(err)
    })

  }

  const handleBtnPrev = () => {
    setInitialValue(initialValue - 1)
    return initialValue
  }

  const handleBtnNext = () => {
    setInitialValue(initialValue + 1)
    return initialValue
  }

  const handleTextArea = (e) => {
    setResultSearch(e.target.value) 
    alert(resultSearch)

  }

  useLayoutEffect(()=>{
      
    GetPokemons()

  }, [initialValue, GetPokemons])


  
  return (
    <div className="App">
      <div className='main'>
      <img src={pokemonImg} alt='pokemon' className='pokemon_image'/>
        
        <h1 className='pokemon_data'>
          <span className='pokemon_number'> {result.id}</span>  - 
          <span className='pokemon_name'> {result.name} </span>
        </h1>

        <form className='form' onSubmit={handleTextArea}>
          <input 
            type="search" 
            placeholder='Name or Number' 
            className='search'
            required
          />
        

        </form>

        <div className='button'>
          <button className='buttons btn-prev' onClick={handleBtnPrev}> Prev &lt;</button>
          <button className='buttons btn-next' onClick={handleBtnNext}> Next &gt; </button>
        </div>
        <img src={PokeBackground} alt='pokedex' className='pokedex'/>
        
      </div>
    </div>
  );
}

export default App;
