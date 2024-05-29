
import { useState,useEffect } from "react"
import Card2 from "./Card2";

export default function Main(){
    const[pokemonList,setpokemonList] = useState(null)
    const[pokemonDetail,setpokemonDetail] = useState(null)
   console.log(pokemonList);
   console.log(pokemonDetail);
   function getPokemon(indirizzo){
       fetch(indirizzo)
       .then(res => res.json())
       .then(data => setpokemonDetail(data))
   }
     useEffect(()=>{
         fetch("https://pokeapi.co/api/v2/pokemon")
         .then(res => res.json())
         .then(data => setpokemonList(data.results))},[])
     


    return (
        <>
        <div className="container">
            <div className="row">
            <h3 className="text-center mt-5">Tutti i pokemon</h3>
                {
                    pokemonList && pokemonList.map((pokemon)=>{
                        return (
                            <div className="col-12 col-md-3" key={pokemon.name}>
                                <p className="mb-0">{pokemon.name}</p>
                                <button onClick={()=>getPokemon(pokemon.url)} className="btn btn-outline-primary"> Vedi {pokemon.name}</button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-md-3">
                <h3 >Pokemo Favorito</h3>
                {pokemonDetail && 
                 
                 <Card2 dettaglio={pokemonDetail} />
                
                
                }
            </div>
        </div>
        </div>
        </>

    )
}