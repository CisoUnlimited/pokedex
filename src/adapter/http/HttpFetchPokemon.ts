import { PokemonData } from "../../config/responses/PokemonData";
import { HttpPokemon } from "./HttpPokemon";

export class HttpFetchPokemon extends HttpPokemon {
    async getPokemon(): Promise<PokemonData> {
        const data = await fetch(this.url+'/'+this.pokemon);
        const jsonData: PokemonData = await data.json();
        return jsonData;
    }
}