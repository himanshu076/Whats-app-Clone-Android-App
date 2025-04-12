import React from 'react'
import { Stack } from 'expo-router'

const mainAuthStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
    </Stack>
  )
}

export default mainAuthStack
