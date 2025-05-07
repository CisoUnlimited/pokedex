import { createDrawerNavigator } from '@react-navigation/drawer';
import PokemonScreen from '../screens/PokemonScreen';
import MovesScreen from '../screens/MovesScreen';
import HMsScreen from '../screens/HMsScreen';
import ItemsScreen from '../screens/ItemsScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
    backBehavior='history'>
      <Drawer.Screen name="Home" component={PokemonScreen}  />
      <Drawer.Screen name="Moves" component={MovesScreen} />
      <Drawer.Screen name="HM" component={HMsScreen} />
      <Drawer.Screen name="Items" component={ItemsScreen} />
    </Drawer.Navigator>
  );
}