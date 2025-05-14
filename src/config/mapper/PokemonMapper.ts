import { DexPokemon } from "../entities/DexPokemon"
import { PokemonData } from "../responses/PokemonData"

export const PokemonMapper = (item : PokemonData) : DexPokemon => {
    return {
        id: item.id,
        name: item.name,
    }
}