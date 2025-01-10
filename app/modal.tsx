import { View, Text, Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";

export default function Modal() {
  const isPresented = router.canGoBack();

  return <View style={styles.Modal}></View>;
}

const styles = StyleSheet.create({
  Modal: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 20,
    overflow: "scroll",
  },
});
