import { View, Text, StyleSheet, ScrollView, Button, FlatList, TouchableWithoutFeedback, Pressable } from 'react-native'
import { Link, Stack, router, Tabs } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Items from '@/app/assets/items'
import { GetAssetsPage } from '@/api/public'
import { useEffect, useState } from 'react'
export default function Assets(props: any) {
  const [items, setItems] = useState<any>([])
  const [params, setParams] = useState({ pageSize: 30, pageNo: 1 })
  let [refreshing, setRefreshing] = useState(true)
  const handleDetails = (event: Event) => {
    console.log('sss')
    router.navigate({ pathname: '/assets/details' })
  }
  const loadMore = async () => {
    if(refreshing) return
    setParams({ pageSize: params.pageSize, pageNo: params.pageNo + 1 })
    setRefreshing(true)
    const { data } = await GetAssetsPage(params).finally(() => {
      setRefreshing(false)
    })
    setItems([...items, ...JSON.parse(data)])
    console.log('滚动低部了')
  }
  const loadRefresh = () => {
    console.log('滚动顶部了')
  }

  const getAssetsPage = async () => {
    setRefreshing(true)
    const { data } = await GetAssetsPage(params).finally(() => {
      setRefreshing(false)
    })
    setItems(JSON.parse(data) ?? [])
  }
  const init = async () => {
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
