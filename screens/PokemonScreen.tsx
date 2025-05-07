import { View, Text, TextInput, SectionList } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
    {
        title: 'Generation',
        data: ['I'],
    },
    {
        title: 'Category',
        data: ['Seed'],
    },
    {
        title: 'Type 1',
        data: ['Grass'],
    },
    {
        title: 'Type 2',
        data: ['Poison'],
    },
    {
        title: 'Abilities',
        data: ['Overgrow'],
    },
    {
        title: 'Hidden Ability',
        data: ['Chlorophyll'],
    },
    {
        title: 'Height',
        data: ['0.7 m'],
    },
    {
        title: 'Weight',
        data: ['6.9 kg'],
    },
    {
        title: 'Base Experience',
        data: ['64'],
    },
    {
        title: 'Base Happiness',
        data: ['70'],
    },
    {
        title: 'Catch Rate',
        data: ['45'],
    },
    {
        title: 'Description',
        data: ['Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.'],
    },
]

const Item: React.FC<{ title: string }> = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const PokemonScreen = () => {
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
                sections={DATA}
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
        backgroundColor: 'lightblue',
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
        backgroundColor: 'white',
        borderRadius: 8,
    },
    header: {
        fontSize: 20,
        backgroundColor: '#fff',
        padding: 10,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 16,
    },
});

export default PokemonScreen;