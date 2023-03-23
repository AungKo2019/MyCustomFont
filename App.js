import { StatusBar } from 'expo-status-bar';
import Home from './screens/home';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded]=useFonts({
    'Nunito-BlackItalic1234567':require('./assets/fonts/Nunito-BlackItalic.ttf'),
    'Nunito-Black':require('./assets/fonts/Nunito-Black.ttf'),
    'Nunito-BoldItalic':require('./assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-Regular':require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold':require('./assets/fonts/Nunito-Bold.ttf')
  });

  // const onLayoutRootView= useCallback(async ()=> {
  //   if(fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // },[fontsLoaded]);
  // if (!fontsLoaded){
  //   return null;
  // }

  return (
    <Home/>
  );
};


