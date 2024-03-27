import { useState, useEffect } from "react";
import PokemonForm from "../components/PokemonForm";
import PokemonFight from "../components/PokemonFight";

const PokemonContainer = () => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [pokemon1, setPokemon1] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);

    const fetchAllPokemon = async () => {
        
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const jsonData = await response.json();

        setAllPokemon(jsonData.results);
    }

    useEffect(() => {
        fetchAllPokemon();
    }, []);

    return ( 

<div className="pokemon-container">
    <h1>Choose your Pokemon</h1>
    <PokemonForm allPokemon={allPokemon} setPokemon1={setPokemon1} setPokemon2={setPokemon2}/>
    <PokemonFight pokemon1={pokemon1} pokemon2={pokemon2}/>
</div>

     );
}
 
export default PokemonContainer;