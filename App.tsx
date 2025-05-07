import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Drawer from './navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
        <Drawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
