import { View, Button, StyleSheet, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, Stack, router, Tabs } from "expo-router";

function TabBarIcon(props) {
  return <SimpleLineIcons size={28} {...props} />;
}

export default function TabLayout() {
  const handleAdd = () => {
      router.navigate({ pathname: "/assets/add" });
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0096fa",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "首页",
          headerShown: true,
          headerRight(props) {
            return (
              <View style={styles.HomeToolBar}>
                <AntDesign name="search1" size={26} color="black" />
                <Ionicons name="scan-outline" size={26} color="black" />
                <Ionicons
                  onPress={handleAdd}
                  name="add-circle-outline"
                  size={28}
                  color="black"
                />
              </View>
            );
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "用户",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  HomeToolBar: {
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: "center",
    columnGap: 10,
  },
});
