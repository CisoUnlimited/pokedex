import { PokemonData } from "../../config/responses/PokemonData";

interface IUrlPokemon {
    url: string;
    pokemon: string;
}

export abstract class HttpPokemon {
    url: string;
    pokemon: string;

    constructor({ url, pokemon }: IUrlPokemon) {
        this.url = url;
        this.pokemon = pokemon;
    }

    abstract getPokemon(): Promise<PokemonData>;

}