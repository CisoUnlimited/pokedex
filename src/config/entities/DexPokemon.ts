export interface DexPokemon {
    id: number;
    name: string;
    types: string[];
    weight: number;
    height: number;
    stats: number[];
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        };
    }
}