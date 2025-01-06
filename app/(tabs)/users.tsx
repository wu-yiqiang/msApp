import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>这里是用户首页</Text>
      <Link href="/users/profile" asChild>
        <Button title="跳转到用户信息页" />
      </Link>
    </View>
  );
}
