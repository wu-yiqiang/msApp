import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from '@/assets/images/logo.png'
// import { TextInput } from 'react-native-paper'
import { Link, router, Stack } from 'expo-router'
import { PostLogin } from '@/api/public'
import { useState } from 'react'

export default function Login() {
  const [formState, setFormState] = useState({ username: 'python222', password: '123456' })
  const handleToHome = async () => {
    const { data } = await PostLogin(formState)
    const token = data?.token
    if (token) {
      console.log('sssssssdsd111', token)
      await AsyncStorage.setItem('msAppToken', token)
      console.log('sssssssdsd', token)
      router.navigate({ pathname: '/' })
    }
  }
  return (
    <View style={styles.Login}>
      <Stack.Screen
        options={{
          title: '登陆',
          headerShown: false
        }}
      />
      <View style={styles.topBox}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.title}>MSAPP</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.contents}>
          <TextInput style={styles.input} placeholder="邮箱" value={formState.username} onChangeText={(value) => setFormState({ username: value, password: formState.password })} />
          <TextInput style={styles.input} inlineImageLeft="search_icon" value={formState.password} placeholder="密码" secureTextEntry={true} onChangeText={(value) => setFormState({ username: formState.username, password: value })} />
        </View>
        <Button title="登陆" onPress={handleToHome} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  topBox: {
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 100
  },
  title: {
    fontSize: 20
  },
  mainBox: {
    flex: 1,
    width: '70%'
    // padding: 20
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 50
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
    fontSize: 14,
    height: 40,
    padding: 10,
  }
})
