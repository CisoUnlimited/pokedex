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

    return (
        <SafeAreaView style={styles.safeArea}>
            <CustomSearchBar onSearch={handleSearch} />

            {loading ? (
                <ActivityIndicator size="large" color="#007AFF" />
            ) : pokemon ? (
                <View style={styles.pokemonContainer}>
                    <Text style={styles.name}>{pokemon.name}</Text>
                    <Text>ID: {pokemon.id}</Text>
                    <Text>Tipo: {pokemon.types[0]} {pokemon.types[1]}</Text>
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
