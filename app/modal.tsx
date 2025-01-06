import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";

export default function Modal() {
  const isPresented = router.canGoBack();

  return (
    <View>
      <Text style={{ fontSize: 30 }}>这里是 modal!</Text>
      {isPresented && (
        <Link href="../" asChild>
          <Button title="关闭" />
        </Link>
      )}
    </View>
  );
}
