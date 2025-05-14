import { DexPokemon } from "../config/entities/DexPokemon";
import { PokemonData } from "../config/responses/PokemonData";
import { HttpFetchPokemon } from "./http/HttpFetchPokemon";

export class PokemonAdapter {
    static async getThisPokemon(): Promise<DexPokemon> {
        const httpFetchPokemon = new HttpFetchPokemon({
            url: "https://pokeapi.co/api/v2/pokemon",
            pokemon: "bulbasaur",
        });
        const pokemon = await httpFetchPokemon.getPokemon();
        
        return pokemon;
    }
}