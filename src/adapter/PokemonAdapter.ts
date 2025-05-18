import { DexPokemon } from "../config/entities/DexPokemon";
import { HttpFetchPokemon } from "./http/HttpFetchPokemon";

export class PokemonAdapter {
    static async getThisPokemon(name: string): Promise<DexPokemon> {
        const httpFetchPokemon = new HttpFetchPokemon({
            url: "https://pokeapi.co/api/v2/pokemon",
            pokemon: name,
        });

        const rawData = await httpFetchPokemon.getPokemon();

        const dexPokemon: DexPokemon = {
            id: rawData.id,
            name: rawData.name,
            types: rawData.types.map((type) => type.type.name),
        };

        return dexPokemon;
    }
}