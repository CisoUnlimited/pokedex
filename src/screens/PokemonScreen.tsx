import { View, Text, TextInput, SectionList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { usePokemon } from '../hooks/usePokemon';
import CustomSearchBar from '../components/CustomSearchBar';

interface pokemonFormat {
    id: number;
    name: string;
}

const PokemonScreen = () => {
    const { pokemon, loading } = usePokemon("");

    const handleSearch = (name: string) => {
        usePokemon(name);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <CustomSearchBar onSearch={handleSearch} />

                {loading ? (
                    <ActivityIndicator size="large" color="#007AFF" />
                ) : pokemon ? (
                    <View style={styles.pokemonContainer}>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Text>ID: {pokemon.id}</Text>
                    </View>
                ) : (
                    <Text>No se ha buscado ningún Pokémon</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
