const Pokemon = ({ pokemon }) => {
    
    return ( 
        <>
            <h3>{pokemon.name}</h3>
            <p> HP: {pokemon.stats[0].base_stat} </p>
            <p> Attack: {pokemon.stats[1].base_stat} </p>
        </>
     );
}
 
export default Pokemon;