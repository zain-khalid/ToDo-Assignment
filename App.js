import React, { useEffect } from 'react'
import UserValidation from './navigation'
import GlobalProvider from './context/Provider'
import * as SplashScreen from 'expo-splash-screen'
import { StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync()

function App() {
  useEffect(()=>{
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000);
  }, [])
  return (
    <GlobalProvider>
      <UserValidation />
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App