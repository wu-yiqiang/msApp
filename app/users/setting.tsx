import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

import { Link, Stack } from 'expo-router'
export default function Setting() {
  const handleResetPassword = () => {}
  const handleUpdate = () => {}

  const handleRemoveCache = () => {}
  const handleLoginOut = () => {}
  return (
    <View style={styles.Setting}>
      <Stack.Screen
        options={{
          title: '应用设置'
        }}
      />
      <View style={styles.settingItem}>
        <TouchableOpacity onPress={handleResetPassword}>
          <View style={styles.setting}>
            <View style={styles.left}>
              <AntDesign name="lock" size={18} color="#0096fa" />
              <Text style={styles.texts}>修改密码</Text>
            </View>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUpdate}>
          <View style={styles.setting}>
            <View style={styles.left}>
              <AntDesign name="reload1" size={18} color="#0096fa" />
              <Text style={styles.texts}>检查更新</Text>
            </View>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveCache}>
          <View style={styles.setting}>
            <View style={styles.left}>
              <AntDesign name="delete" size={18} color="#0096fa" />
              <Text style={styles.texts}>清空缓存</Text>
            </View>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Button onPress={handleLoginOut} title="退出登录" />
    </View>
  )
}

const styles = StyleSheet.create({
  Setting: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
    rowGap: 30
  },
  settingItem: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column'
  },
  setting: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    columnGap: 4
  },
  texts: {
    fontSize: 14
  }
})
