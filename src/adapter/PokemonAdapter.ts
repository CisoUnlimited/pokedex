import { DexPokemon } from "../config/entities/DexPokemon";
import { HttpFetchPokemon } from "./http/HttpFetchPokemon";

export class PokemonAdapter {
    static async getThisPokemon(name: string): Promise<DexPokemon> {
        const httpFetchPokemon = new HttpFetchPokemon({
            url: "https://pokeapi.co/api/v2/pokemon",
            pokemon: name,
        });

        const pokemon = await httpFetchPokemon.getPokemon();

        const dexPokemon: DexPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            types: pokemon.types.map((type) => type.type.name),
            weight: pokemon.weight,
            height: pokemon.height,
            stats: pokemon.stats.map((stat) => stat.base_stat),
            sprites: {
                other: {
                    "official-artwork": {
                        front_default: pokemon.sprites.other?.["official-artwork"]?.front_default ?? "",
                    }
                }
            }
        };

        return dexPokemon;
    }
}