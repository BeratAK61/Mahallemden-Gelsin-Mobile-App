import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
  

const Stack = createNativeStackNavigator();


export default function App() {

  const [fontsLoaded] = useFonts({
    black: require("./assets/fonts/Roboto-Black.ttf"),
    bold: require("./assets/fonts/Roboto-Bold.ttf"),
    light: require("./assets/fonts/Roboto-Light.ttf"),
    medium: require("./assets/fonts/Roboto-Medium.ttf"),
    regular: require("./assets/fonts/Roboto-Regular.ttf"),
    thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
        
        <Stack.Screen 
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

