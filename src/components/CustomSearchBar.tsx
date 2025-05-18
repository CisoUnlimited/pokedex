import React from 'react';
import {
    Keyboard,
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface CustomSearchBarProps {
    onSearch?: (text: string) => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ onSearch }) => {
    const [text, setText] = React.useState("");

    const handleSearch = () => {
        Keyboard.dismiss();
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
                    placeholder="Nombre o ID del Pokémon"
                    keyboardType="default"
                    autoCapitalize="words"
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity style={styles.iconButton} onPress={handleSearch} activeOpacity={0.7}>
                    <Ionicons name="search" size={24} color="#007AFF" />
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
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
