import { create } from 'zustand'
import { DexPokemon } from '../config/entities/DexPokemon'
import { PokemonAdapter } from '../adapter/PokemonAdapter'

interface PokemonStore {
  pokemon: DexPokemon | undefined
  loading: boolean
  fetchPokemon: (searchParam: string) => Promise<DexPokemon | undefined>
}

export const usePokemonStore = create<PokemonStore>()((set) => ({
  pokemon: undefined,
  loading: false,
  fetchPokemon: async (searchParam) => {
    set ({ loading: true });
    try {
        const result = await PokemonAdapter.getThisPokemon(searchParam);
        set({ pokemon: result, loading: false });
        return result;
    } catch (error) {
        set({ pokemon: undefined, loading: false });
        return undefined;
    }
  }
}))