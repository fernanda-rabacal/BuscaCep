import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BuscaCEP from './assets/src/pages/BuscaCEP'
import Home from './assets/src/pages/Home'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BuscaCEP" component={BuscaCEP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}