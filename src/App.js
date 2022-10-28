import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeBackground from './img/pokedex.png'
import './App.css'



function App() {

  const [result, setResult] = useState({})
  const [initialValue, setInitialValue] = useState(1);
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
    if(initialValue >= 1){
      setInitialValue(initialValue - 1)
      return initialValue
    } else {
      return initialValue
    }
  }

  const handleBtnNext = () => {
    if(initialValue <= 151){
      setInitialValue(initialValue + 1)
      return initialValue
    } else {
      return initialValue
    }
  }

  const handleText = (e) => {
    e.preventDefault()
    setInitialValue(e.target.value)
    

  }

 useEffect(()=>{
      
  GetPokemons()
  
  }, [GetPokemons])


  
  return (
    <div className="App">
      <div className='main'>
      <img src={pokemonImg} alt='pokemon' className='pokemon_image'/>
        
        <h1 className='pokemon_data'>
          <span className='pokemon_number'> {result.id}</span>  - 
          <span className='pokemon_name'> {result.name} </span>
        </h1>

        <form className='form' onSubmit={handleText}>
          <input 
            onChange={handleText}
            value={initialValue}
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
