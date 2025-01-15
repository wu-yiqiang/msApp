import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import { Link, Stack, router, Tabs } from "expo-router";
import Items from '@/app/assets/items'
import { useEffect, useState } from "react";
export default function Assets(props: any) {
  const [items, setItems] = useState<any>([]);
  let [refreshing, setRefreshing] = useState(false);
  let [count, setCount] = useState(0);
  const handleDetails = (event: Event) => {
    router.navigate({ pathname: "/assets/details" });
  };
  const onRefresh = async () => {
    init()
  };
  const onScroll = (event: Event) => {
    const offset = 200
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isNearTop = contentOffset.y <= offset; // 10是阈值，可以根据需要调整
    const isNearBottom =
      contentOffset.y + layoutMeasurement.height >= contentSize.height - offset; // 10是阈值，可以根据需要调整

    if (isNearTop && refreshing === false) {
      onRefresh()
      console.log("滚动顶部了");
    }

    if (isNearBottom && refreshing === false) {
      const item = {
        id: new Date().getTime(),
        title: "音响",
        categopry: "办公用品",
        department: "人事行政部",
        number: "FZC00124533",
        status: 0,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      };
      setItems([...items, item]);
      console.log("滚动底部了");
    }
  }
  const init = async () => {
    setItems([{
        id: 1,
        title: "椅子",
        categopry: "办公用品",
        department: "人事行政部",
        number: "FZC00124534",
        status: 0,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      },{
        id: 2,
        title: "计算器",
        categopry: "办公用品",
        department: "人事行政部",
        number: "FZC00124543",
        status: 1,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      },{
        id: 9,
        title: "会议桌",
        categopry: "办公用品",
        department: "人事行政部",
        number: "FZC00124533",
        status: 0,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      },{
        id: 3,
        title: "苹果笔记本",
        categopry: "电脑",
        department: "开发部",
        number: "FZC00124533",
        status: 0,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      },{
        id: 4,
        title: new Date().getTime(),
        categopry: "服务器",
        department: "系统一部",
        number: "FZC00156567",
        status: 0,
        assetsStatus: 0,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      },{
        id: 5,
        title: new Date().getTime(),
        categopry: "台式机",
        department: "开发部",
        number: "FZC00124553",
        status: 1,
        assetsStatus: 1,
        belong: "sutter",
        updator: "Tom",
        update: "2025-11-23 12:34",
      }])
  }
  useEffect(() => {
    init()
  }, [])
  if (!items.length) return <Text>暂无数据</Text>
  return (
    <View style={styles.Assets}>
      <ScrollView
        onScroll={onScroll}
        refreshing={refreshing}
        onRefresh={onRefresh}
      >
        <Text onPress={(e) => handleDetails(e)}>
          <View style={styles.scrollBox}>
            {items.map((item: any) => {
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
