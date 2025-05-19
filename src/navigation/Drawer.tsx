import { createDrawerNavigator } from '@react-navigation/drawer';
import PokemonScreen from '../screens/PokemonScreen';
import MovesScreen from '../screens/MovesScreen';
import HMsScreen from '../screens/HMsScreen';
import ItemsScreen from '../screens/ItemsScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      backBehavior='history'
    >
      <Drawer.Screen name="PokéDex" component={PokemonScreen} />
      <Drawer.Screen name="MoveDex" component={MovesScreen} />
      <Drawer.Screen name="HMDex" component={HMsScreen} />
      <Drawer.Screen name="ItemDex" component={ItemsScreen} />
    </Drawer.Navigator>
  );
}
