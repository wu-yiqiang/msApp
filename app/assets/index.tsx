import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Link, Stack, router, Tabs } from "expo-router";
import Items from '@/app/assets/items'
import { useState } from 'react'
export default function Assets() {
  const items = [
    {
      id: 1,
      title: "桌子",
      categopry: "办公用品",
      department: "人事行政部",
      number: "FZC00124533",
      status: 0,
      assetsStatus: 1,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 2,
      title: "椅子",
      categopry: "办公用品",
      department: "人事行政部",
      number: "FZC00123232",
      status: 1,
      assetsStatus: 2,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 3,
      title: "IBM System x3650 M5(5462I55)",
      categopry: "服务器",
      department: "系统一部",
      number: "FZC00124581",
      status: 1,
      assetsStatus: 2,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 4,
      title: "IBM System X3850 X6(3837I01)",
      categopry: "服务器",
      department: "系统二部",
      number: "FZC00124516",
      status: 1,
      assetsStatus: 1,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 5,
      title: "惠普战66",
      categopry: "台式机",
      department: "开发部",
      number: "FZC00122356",
      status: 1,
      assetsStatus: 0,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 6,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00126695",
      status: 0,
      assetsStatus: 2,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 7,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00128894",
      status: 0,
      assetsStatus: 1,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 8,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00127315",
      status: 0,
      assetsStatus: 2,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 9,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00129632",
      status: 0,
      assetsStatus: 0,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 10,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00123278",
      status: 1,
      assetsStatus: 1,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
    {
      id: 11,
      title: "MacBook Pro(M2 2022)",
      categopry: "笔记本",
      department: "开发部",
      number: "FZC00123224",
      status: 1,
      assetsStatus: 0,
      belong: "sutter",
      updator: "Tom",
      update: "2025-11-23 12:34",
    },
  ];
  const handleDetails = (event: Event) => {
    router.navigate({ pathname: "/assets/details" });
  }
  return (
    <View style={styles.Assets}>
      <ScrollView>
        <Text onPress={(e) => handleDetails(e)}>
          <View style={styles.scrollBox}>
            {items.map((item) => {
              return <Items key={item.id} target={item} />;
            })}
          </View>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Assets: {
    flex: 1,
    padding: 10,
  },
  scrollBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
});
