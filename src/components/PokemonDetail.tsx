import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Card } from 'react-native-paper';

import { usePokemonStore } from '../store/pokemonStore';

const PokemonDetail = () => {

  const { pokemon, loading } = usePokemonStore();

  const formatName = (name: string) => {
    return name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <View style={styles.searchContainer}>
      {loading ? (
        <ActivityIndicator size="large" /*color={theme.colors.primary}*/ />
      ) : pokemon ? (
        <Card style={[styles.cardContainer]}>
          <Card.Cover style={[styles.pokemonImage]} source={{ uri: pokemon.sprites.other['official-artwork'].front_default }} resizeMode='contain' />
          <Card.Title titleStyle={[styles.name]} title={`${formatName(pokemon.name)} #${pokemon.id}`} />
          <Card.Content style={{ gap: 10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
              <Text style={[styles.tipes]}>
                {pokemon.types[0]}
              </Text>
              {pokemon.types[1] != null ? (
                <Text style={[styles.tipes]}>
                  {pokemon.types[1]}
                </Text>
              ) : null}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8 }}>
              <Text style={{fontSize: 20}}>{String(pokemon.weight)} KG</Text>
              <Text style={{fontSize: 20}}>{String(pokemon.height)} M</Text>
            </View>

            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Base stats:</Text>
            </View>

            {['- HP', '- Ataque', '- Defensa', '- At. Esp.', '- Def. Esp.', '- Velocidad'].map((title, index) => (
              <Text key={index}>
                {title}: {pokemon.stats[index]}
              </Text>
            ))}
          </Card.Content>
        </Card>
      ) : (
        <Text>No se ha buscado ningún Pokémon</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 0.96,
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  pokemonImage: {
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tipes: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    backgroundColor: '#F6F7EB',
    borderRadius: 8,
    width: 120,
  }
});

export default PokemonDetail;
