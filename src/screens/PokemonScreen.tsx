import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import CustomSearchBar from '../components/CustomSearchBar';

const PokemonScreen = () => {
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
        <SafeAreaView style={styles.safeArea}>
            <CustomSearchBar onSearch={handleSearch} />

            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : pokemon ? (
                <View style={styles.pokemonContainer}>
                    <Text style={styles.name}>{formatName(pokemon.name)}</Text>
                    <Text>ID: {pokemon.id}</Text>
                    <Text>TIPO: {pokemon.types[0]} {pokemon.types[1]}</Text>
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
        paddingTop: 0,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    pokemonContainer: {
        marginTop: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default PokemonScreen;
