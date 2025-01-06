import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Index() {
   const openUser = () => {
          router.navigate("/users/profile");
      }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>这里是用户首页</Text>
      <Button title="跳转到用户信息页" onPress={openUser} />
    </View>
  );
}
