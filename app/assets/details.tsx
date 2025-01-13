import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router'
export default function AssetsDetails() {
  return (
    <View style={styles.Details}>
      <Stack.Screen
        options={{
          title: "资产详情",
        }}
      />
      <Text>资产详情页面</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Details: {
    flex: 1,
    padding: 10,
  },
});