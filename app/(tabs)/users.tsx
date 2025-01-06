import { View, Text, Button, StyleSheet, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Link, router } from "expo-router";
import img from '@/assets/images/user.jpeg';
export default function Index() {
   const openUser = () => {
          router.navigate("/users/profile");
   }
  const handlePrivacy = () => {
                router.navigate('/users/privacy')
  }
  return (
    <View style={styles.User}>
      <View style={styles.userInfo}>
        <View style={styles.images}>
          <Image style={styles.avator} source={img} />
          <Text style={styles.infos}>
            <Text style={styles.name}>金太阳</Text>
            <Text style={styles.sign}>该用户什么信息也没有留下</Text>
          </Text>
        </View>
        <View style={styles.info}>
          <Text>用户信息</Text>
          <View style={styles.icons}>
            <AntDesign name="right" size={16} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.contents}>
        <View style={styles.toolBox}>
          <View style={styles.tool}>
            <MaterialIcons name="approval" size={22} color="#0096fa" />
            <Text style={styles.texts}>待审批</Text>
          </View>
          <View style={styles.tool}>
            <FontAwesome name="calendar-check-o" size={22} color="#0096fa" />
            <Text style={styles.texts}>待点验</Text>
          </View>
          <View style={styles.tool}>
            <MaterialCommunityIcons name="alert-circle-check" size={22} color="#0096fa" />
            <Text style={styles.texts}>已报废</Text>
          </View>
          <View style={styles.tool}>
            <Feather name="check-square" size={22} color="#0096fa" />
            <Text style={styles.texts}>已点验</Text>
          </View>
        </View>
        <View style={styles.settingItem}>
          <View style={styles.setting}>
            <Text style={styles.left}>
              <View style={styles.icons}>
                <Feather name="user" size={14} color="black" />
              </View>
              <Text style={styles.texts}>编辑资料</Text>
            </Text>
            <View style={styles.icons}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
          <View style={styles.setting}>
            <Text style={styles.left}>
              <View style={styles.icons}>
                <AntDesign name="setting" size={14} color="black" />
              </View>
              <Text style={styles.texts}>应用设置</Text>
            </Text>
            <View style={styles.icons}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
          <View style={styles.setting}>
            <Text style={styles.left}>
              <View style={styles.icons}>
                <FontAwesome name="question" size={14} color="black" />
              </View>
              <Text style={styles.texts}>常见问题</Text>
            </Text>
            <View style={styles.icons}>
              <AntDesign name="right" size={14} color="black" />
            </View>
          </View>
          <Text onPress={handlePrivacy}>
            <View style={styles.setting}>
              <Text style={styles.left}>
                <View style={styles.icons}>
                  <MaterialIcons name="privacy-tip" size={14} color="black" />
                </View>
                <Text style={styles.texts}>隐私条款</Text>
              </Text>
              <View style={styles.icons}>
                <AntDesign name="right" size={14} color="black" />
              </View>
            </View>
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  User: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  userInfo: {
    height: 140,
    width: '100%',
    backgroundColor: '#0096fa',
    display: 'flex',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    alignContent: 'center'
  },
  avator: {
    width: 60,
    height: 60,
    aspectRatio: '1/1',
    objectFit: "contain",
    borderRadius: '50%'
  },
  infos: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  name: {
    fontSize: 16
  },
  sign: {
    fontSize: 12
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    fontSize: 16
  },
  contents: {
    transform: [{ translateY: -30 }],
    padding: 10,
    flex: 1,
    color: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 14
  },
  toolBox: {
    padding: 10,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row'
  },
  tool: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  texts: {
    fontSize: 14
  },
  settingItem: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column'
  },
  setting: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
    alignContent: 'center',
    columnGap: 10
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  }
})
