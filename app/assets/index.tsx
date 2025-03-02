import { View, Text, StyleSheet, ScrollView, Button, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native'
import { Link, Stack, router, Tabs } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Items from '@/app/assets/items'
import { GetAssetsPage } from '@/api/public'
import { useEffect, useState } from 'react'
export default function Assets(props: any) {
  const [items, setItems] = useState<any>([])
  let [refreshing, setRefreshing] = useState(false)
  const handleDetails = (event: Event) => {
    console.log('sss')
    router.navigate({ pathname: '/assets/details' })
  }
  const loadMore = () => {
    const item = {
      id: new Date().getTime(),
      title: '音响',
      categopry: '办公用品',
      department: '人事行政部',
      number: 'FZC00124533',
      status: 0,
      assetsStatus: 1,
      belong: 'sutter',
      updator: 'Tom',
      update: '2025-11-23 12:34'
    }
    setItems([...items, item])
    console.log('滚动低部了')
  }
  const loadRefresh = () => {
    console.log('滚动顶部了')
  }

  const getAssetsPage = async () => {
    const { data } = await GetAssetsPage()
    console.log('sds', typeof data)
    setItems(JSON.parse(data) ?? [])
  }
  const init = async () => {
    const token = await AsyncStorage.getItem('msAppToken')
    if (!token) {
      router.navigate({ pathname: '/login' })
    }
    await getAssetsPage()
  }
  useEffect(() => {
    init()
  }, [])
  if (!items.length) return <Text>暂无数据</Text>
  return (
    <View style={styles.Assets}>
      <FlatList
        onRefresh={loadRefresh}
        onEndReached={loadMore}
        refreshing={refreshing}
        onEndReachedThreshold={0.4}
        data={items}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Text}
        renderItem={({ item, index, separators }) => (
          <Pressable onPress={handleDetails}>
            <Items key={item.id} target={item} />
          </Pressable>
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  Assets: {
    flex: 1,
    padding: 10,
  },
});
