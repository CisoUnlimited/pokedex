import './gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Drawer from './src/navigation/Drawer';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'red',
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer />
      </NavigationContainer>
    </SafeAreaProvider>
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
