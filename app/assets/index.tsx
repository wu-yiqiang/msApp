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
    console.log("刷新");
  };
  const onScroll = (event: Event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isNearTop = contentOffset.y <= 30; // 10是阈值，可以根据需要调整
    const isNearBottom =
      contentOffset.y + layoutMeasurement.height >= contentSize.height - 30; // 10是阈值，可以根据需要调整

    if (isNearTop && refreshing === false) {
      console.log("滚动顶部了");
    }

    if (isNearBottom) {
      const item = {
        id: 1,
        title: new Date().getTime(),
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

     const init = async () => {
       const res = await mockRequest();
       setItems(res);
       return res;
     };
    useEffect(() => {
      init();
    }, [count]);
  };
 
    const mockRequest = () => {
    let data = []
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          data.push({
            id: i.toString(),
          })
        }
        resolve(data)
      }, 1000)
    })
  }
  const init = async () => {
    
    console.log(res);
  }
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
