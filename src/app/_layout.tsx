import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen, Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen';
import { storage } from '../utils/utils';

SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const access_token = storage.getString('access_token');

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    console.log(access_token, 'access_token');
    if (access_token) setIsLogin(true);
    else setIsLogin(false);
  },[access_token]);

  return (
    <>
      <Stack screenOptions={{headerShown: false}}/>
      {isLogin ? <Redirect href={"./(main)"}/> : <Redirect href={"./(auth)"}/>}
    </>
  )
}

export default RootNavigation