import { Link, Stack, router, useLocalSearchParams } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from "react";

export default function Layout() {
  const params = useLocalSearchParams();
  const init = async () => {
    const token = await AsyncStorage.getItem('msAppToken')
    console.log("token", token)
    if (!token) router.navigate({ pathname: '/login' })
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="login"  />
    </Stack>
  )
}
