import Pokemon from "./Pokemon";

const PokemonFight = ( { pokemon1, pokemon2 } ) => {

    
    if (!(pokemon1 && pokemon2)) {
        
        return <p> Loading ...</p>
    }else {console.log( pokemon1, pokemon2 );}

    return ( 
        <>
            <h2>BATTLE!</h2>
            <div className="pokemonFight">
                <div className="pokemon" id="pokemon1">
                    <img src={pokemon1.sprites.other.showdown.back_default} alt={pokemon1.name} />
                    <Pokemon pokemon = { pokemon1 }/>
                </div>
                <div className="pokemon" id="pokemon2">
                    <img src={pokemon2.sprites.other.showdown.front_default} alt={pokemon2.name} />
                    <Pokemon pokemon = { pokemon2 }/>
                </div>
            </div>
        </>
        )
    
}
 
export default PokemonFight;