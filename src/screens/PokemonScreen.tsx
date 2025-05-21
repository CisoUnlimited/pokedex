import { useThemeStore } from '../store/themeStore';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomSearchBar from '../components/CustomSearchBar';
import PokemonDetail from '../components/PokemonDetail';

const PokemonScreen = () => {
    const theme = useThemeStore((state => state.theme));

    return (
        <SafeAreaView style={[styles.safeArea]}>
            <CustomSearchBar />
            <PokemonDetail />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        padding: -23,
        flex: 1,
        backgroundColor: '#F6F7EB',
        paddingHorizontal: 16,
        gap: 16,
    },
});

// USAR https://v1.builderx.io para ver el diseño
// PALETA DE COLORES: https://coolors.co/08b2e3-57a773-f6f7eb-d64550-393e41

export default PokemonScreen;
