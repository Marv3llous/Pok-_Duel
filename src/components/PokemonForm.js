import { useState, useEffect } from "react";
import PokemonFight from "./PokemonFight";
const PokemonForm = ({ allPokemon, setPokemon1, setPokemon2 }) => {
    
    const [pokemon1Name, setPokemon1Name] = useState("");
    const [pokemon2Name, setPokemon2Name] = useState("");
    
    // Fetch pokemon data by name
    const fetchPokemonData = async (pokemonName) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const jsonData = await response.json();
     
    
        return jsonData;
    }
    
    // Method to generate the options
    const generatePokemonOptions = allPokemon.map((pokemon) => {
        return <option key={pokemon.name} value={pokemon.name} >{pokemon.name}</option>
    })
    
    
    // Handle form submission
    const handlePokeSubmit = async (event) => {
        event.preventDefault()
        
        // Get each pokemon
        // setPokemon1(fetchPokemonData(pokemon1Name));
        // setPokemon2(fetchPokemonData(pokemon2Name));

        const pokemon1Data = await fetchPokemonData(pokemon1Name);
        const pokemon2Data = await fetchPokemonData(pokemon2Name);

        // set name here 
        setPokemon1(pokemon1Data);
        setPokemon2(pokemon2Data);
        
        // Reset names
        setPokemon1Name("");
        setPokemon2Name("");
        }

        const handlePokeChange1 = (event) => {
            setPokemon1Name(event.target.value);
        }

        const handlePokeChange2 = (event) => {
            setPokemon2Name(event.target.value);
        }

    
    return ( 

        <>
            <form onSubmit={handlePokeSubmit}>
                <select value={pokemon1Name} onChange={handlePokeChange1}>
                    <option disabled value="Choose your pokemon"> Choose your pokemon</option>
                    {generatePokemonOptions} 
                </select>
                
                <input type="submit" value={"Fight!"}/>

                <select value={pokemon2Name} onChange={handlePokeChange2}>
                    <option disabled value="Choose your pokemon"> Choose your pokemon</option>
                    {generatePokemonOptions}
                </select>
            </form>
        </>
     );
}
 
export default PokemonForm;