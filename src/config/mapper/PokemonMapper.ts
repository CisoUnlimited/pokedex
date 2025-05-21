import { DexPokemon } from "../entities/DexPokemon"
import { PokemonData } from "../responses/PokemonData"

export const PokemonMapper = (item : PokemonData) : DexPokemon => {
    return {
        id: item.id,
        name: item.name,
        types: item.types.map((type) => type.type.name),
        stats: item.stats.map((stat) => stat.base_stat),
        image: item.sprites.front_default,
    }
}