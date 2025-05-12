import { View, Text, TextInput, SectionList } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Item: React.FC<{ title: string }> = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const PokemonScreen = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
        .then(response => response.json())
        .then(data => { setData(data) })
        .catch(error => {
            console.error('Error al obtener los datos', error);
        });
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search Pokemon by name or number"
                autoCapitalize="words"
                returnKeyType="search"
            />
            <SectionList
                style={styles.list}
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
                renderItem={({ item }) => <Item title={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue', // Container
    },
    list: {
        flex: 1,
    },
    input: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white', // Buscador
        borderRadius: 8,
    },
    header: {
        fontSize: 20,
        backgroundColor: '#EEE8AA', // Encabezados
        padding: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#EEE8AA', // Contenedor interior
    },
    title: {
        fontSize: 16,
    },
});

export default PokemonScreen;