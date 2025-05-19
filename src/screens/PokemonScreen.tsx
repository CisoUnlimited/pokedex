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
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
            <CustomSearchBar onSearch={handleSearch} />

            {loading ? (
                <ActivityIndicator size="large" color={theme.colors.primary} />
            ) : pokemon ? (
                <View style={[styles.pokemonContainer, { backgroundColor: theme.colors.cardBackground }, {borderRadius: theme.borderRadius.md}]}>
                    <Text style={[styles.name, { color: theme.colors.text }]}>{formatName(pokemon.name)}</Text>
                    <Text style={{ color: theme.colors.text }}>ID: {pokemon.id}</Text>
                    <Text style={{ color: theme.colors.text }}>
                        TIPO: {pokemon.types[0]} {pokemon.types[1]}
                    </Text>
                    <Text style={[{ color: theme.colors.text }]}>STATS:</Text>
                    {['- HP', '- Ataque', '- Defensa', '- At. Esp.', '- Def. Esp.', '- Velocidad'].map((title, index) => (
                        <Text key={index} style={{ color: theme.colors.text }}>
                            {title}: {pokemon.stats[index]}
                        </Text>
                    ))}
                </View>
            ) : (
                <Text style={{ color: theme.colors.textSecondary }}>No se ha buscado ningún Pokémon</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingHorizontal: 16,
        alignContent: 'flex-start'
    },
    pokemonContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

// USAR https://v1.builderx.io para ver el diseño

export default PokemonScreen;
