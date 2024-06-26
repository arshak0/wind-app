import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Привет Лилосичек'}}
              />
              <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
              />
          </Stack.Navigator>
      </NavigationContainer>
  );
}