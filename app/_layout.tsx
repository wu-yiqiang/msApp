import { Stack, useLocalSearchParams } from "expo-router";

export default function Layout() {
  const params = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      <Stack.Screen name="login"  />
    </Stack>
  )
}
