import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'

export default function Profile() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '用户信息'
        }}
      />
      <Text>这里是用户信息页</Text>
    </View>
  )
}
