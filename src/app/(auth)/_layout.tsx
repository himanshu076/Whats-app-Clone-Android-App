import React from 'react'
import { Stack } from 'expo-router'

const AuthStack = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='index' />
      <Stack.Screen name='terms_agree/index' />
      <Stack.Screen name='login/index' />
      <Stack.Screen name='verify_otp/index' />
    </Stack>
  )
}

export default AuthStack