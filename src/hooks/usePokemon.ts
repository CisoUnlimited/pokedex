import { useEffect, useState } from "react";
import { DexPokemon } from "../config/entities/DexPokemon";
import { PokemonAdapter } from "../adapter/PokemonAdapter";

export const usePokemon = (name: string) => {
    const [pokemon, setPokemon] = useState<DexPokemon>();
    const [loading, setLoading] = useState<boolean>(false);

    const loadPokemon = async () => {
        if (!name) {
            setPokemon(undefined);
            return;
        }

        setLoading(true);
        try {
            const result = await PokemonAdapter.getThisPokemon(name);
            setPokemon(result);
        } catch (error) {
            setPokemon(undefined);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPokemon();
    }, [name]);

    return {
        pokemon,
        loading,
    };
};
