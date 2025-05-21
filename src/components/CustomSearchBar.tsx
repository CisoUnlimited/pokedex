import React, { useState } from 'react';
import {
    Keyboard,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePokemonStore } from '../store/pokemonStore';

const CustomSearchBar = () => {
    const [text, setText] = useState("");
    const { fetchPokemon } = usePokemonStore();

    const search = () => {
        Keyboard.dismiss();
        fetchPokemon(text.trim().replace(/\s+/g, '-'));
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Nombre o ID del Pokémon"
                keyboardType="default"
                autoCapitalize="words"
                returnKeyType="search"
                onSubmitEditing={search}
            />
            <TouchableOpacity style={styles.iconButton} onPress={search} activeOpacity={0.7}>
                <Ionicons name="search" size={24} color="#007AFF" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    input: {
        flex: 1,
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingHorizontal: 10,
        fontSize: 20,
    },
    iconButton: {
        height: 60,
        width: 60,
        backgroundColor: '#e6f0ff',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderLeftWidth: 0,
    },
});

export default CustomSearchBar;
