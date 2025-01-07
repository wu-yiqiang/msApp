import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'
export default function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '关于我们'
        }}
      />
      <Text>关于我们</Text>
    </View>
  )
}
