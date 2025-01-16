import { View, Text, Button } from "react-native";
import { Link, router, Tabs } from "expo-router";
import Assets from "@/app/assets/index";
export default function Index() {
  const openModal = () => {
    router.navigate("/modal");
  };
  return <Assets />;
}
