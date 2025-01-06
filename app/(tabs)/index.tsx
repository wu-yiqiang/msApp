import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Index() {
    const openModal = () => {
        router.navigate("/modal");
    }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>这里是首页</Text>
      <Button title="打开 Modal" onPress={openModal} />
      <Link href="/articles/details" asChild>
        <Button title="跳转到详情页" />
      </Link>
    </View>
  );
}
