import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'
export default function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '登陆',
          headerShown: false
        }}
      />
      <Text>sdsds</Text>
    </View>
  )
}
