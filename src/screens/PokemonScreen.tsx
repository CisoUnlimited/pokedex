import { useThemeStore } from '../store/themeStore';
import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import CustomSearchBar from '../components/CustomSearchBar';

const PokemonScreen = () => {
    const theme = useThemeStore((state => state.theme));
    const [searchPokemon, setSearchPokemon] = useState("");
    const { pokemon, loading } = usePokemon(searchPokemon);

    const handleSearch = (name: string) => {
        setSearchPokemon(name);
    };

    const formatName = (name: string) => {
        return name
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <SafeAreaView style={[styles.safeArea]}>
            <View style={[styles.searchContainer]}>
                <CustomSearchBar onSearch={handleSearch} />
            </View>
            {loading ? (
                <ActivityIndicator size="large" /*color={theme.colors.primary}*/ />
            ) : pokemon ? (
                <View style={[styles.pokemonContainer]}>
                    <Text>{formatName(pokemon.name)}</Text>
                    <Text>ID: {pokemon.id}</Text>
                    <Text>
                        TIPO: {pokemon.types[0]} {pokemon.types[1]}
                    </Text>
                    <Text>STATS:</Text>
                    {['- HP', '- Ataque', '- Defensa', '- At. Esp.', '- Def. Esp.', '- Velocidad'].map((title, index) => (
                        <Text key={index}>
                            {title}: {pokemon.stats[index]}
                        </Text>
                    ))}
                </View>
            ) : (
                <Text>No se ha buscado ningún Pokémon</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 16,
        alignContent: 'flex-start',
    },
    searchContainer: {
        flex: 0.1,
    },
    pokemonContainer: {
        flex: 0.9,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

// USAR https://v1.builderx.io para ver el diseño
// PALETAS DE COLORES: https://coolors.co/08b2e3-57a773-f6f7eb-d64550-393e41

export default PokemonScreen;
