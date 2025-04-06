import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen, Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen';

SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <>
      <Stack screenOptions={{headerShown: false}}/>
      {isLogin ? <Redirect href={"./(main)"}/> : <Redirect href={"./(auth)"}/>}
    </>
  )
}

export default RootNavigation