import { useEffect, useState } from "react";
import { DexPokemon } from "../config/entities/DexPokemon";
import { PokemonAdapter } from "../adapter/PokemonAdapter";

export const usePokemon = (name:string) => {
    const [pokemon, setPokemon] = useState<DexPokemon>();
    const [loading, setLoading] = useState<boolean>(false);
    const loadPokemon = async () => {
        const pokemon = await PokemonAdapter.getThisPokemon();
        setPokemon(pokemon);
        setLoading(true);
    }
    useEffect(() => {
        loadPokemon();
    }, []);

    return {
        pokemon,
        loading,
    }
}