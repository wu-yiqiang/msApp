import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { Link, Stack } from 'expo-router'
export default function Language() {
  return (
    <View style={styles.Language}>
      <Stack.Screen
        options={{
          title: '语言设置'
        }}
      />
      <Text>语言设置</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Language: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    overflow: 'scroll'
  }
})