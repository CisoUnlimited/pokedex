import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { Card } from 'react-native-paper';

import { usePokemonStore } from '../store/pokemonStore';
import { BarGraph } from 'react-native-horizontal-bar-graphs';

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
              <Text style={{ fontSize: 20 }}>{String(pokemon.weight / 10)} KG</Text>
              
              <Text style={{ fontSize: 20 }}>{String(pokemon.height / 10)} M</Text>
            </View>

            <BarGraph
              graphData={[
                { value: pokemon.stats[0], label: 'PS', color: '#08B2E3' },
                { value: pokemon.stats[1], label: 'Ataque', color: '#57A773' },
                { value: pokemon.stats[2], label: 'Defensa', color: '#D64550' },
                { value: pokemon.stats[3], label: 'At. Esp.', color: '#393E41' },
                { value: pokemon.stats[4], label: 'Def. Esp.', color: '#F6F7EB' },
                { value: pokemon.stats[5], label: 'Velocidad', color: '#08B2E3' },
              ]}
              title='Base stats'
              titleStyle={{marginVertical:5}}
              showDivider={false}
              barHeight={23}
              barDistance={1}
              
              percentPosition='none'
            />
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
