import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native'
import Logo from '@/assets/images/logo.png'

import { Link, router, Stack } from 'expo-router'
import { useState } from 'react'
import { red } from 'react-native-reanimated/lib/typescript/Colors'
export default function Login() {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const handleToHome = () => {
     router.navigate({ pathname: '/' })
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
          <TextInput style={{ height: 40 }} placeholder="Type here to translate!" onChangeText={(text) => setFormState({ ...formState, username: text })} />
          <TextInput style={{ height: 40 }} placeholder="Type here to translate!" onChangeText={(text) => setFormState({ ...formState, password: text })} />
        </View>
        <Button title="登陆" onPress={handleToHome}/>
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
    height: 200,
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
    width: '70%',
    padding: 20,
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
    marginBottom: 20,
  }
})
