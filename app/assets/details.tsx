import { View, Text } from "react-native";
import { Link, Stack } from 'expo-router'
export default function AssetsDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: '资产详情',
          headerShown: false
        }}
      />
      <Text>资产详情页面</Text>
    </View>
  )
}
