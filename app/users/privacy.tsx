import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'
export default function Privacy() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '隐私条款',
        }}
      />
    </View>
  )
}
