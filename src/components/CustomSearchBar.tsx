import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

interface CustomSearchBarProps {
    onSearch?: (text: string) => void;
}

const CustomSearchBar:React.FC<CustomSearchBarProps> = ({onSearch}) => {
    const [text, setText] = React.useState("");

    const handleSearch = () => {
        if (onSearch) {
            onSearch(text.trim());
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Nombre del Pokémon"
                    keyboardType="default"
                    autoCapitalize="words"
                />
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={handleSearch}
                        title="Buscar"
                        color="#007AFF"
                        accessibilityLabel="Buscar Pokémon"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    searchContainer: {
        alignItems: 'stretch',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
    buttonContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
});

export default CustomSearchBar;