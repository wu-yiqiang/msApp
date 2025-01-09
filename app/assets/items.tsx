import { View, Text, StyleSheet, Button, Image } from 'react-native'
import avator from '@/assets/images/user.jpeg'
import { Link, Stack } from 'expo-router'
export default function AssetsItem(props: any) {
  const { title,categopry, department,number, status, assetsStatus, belong, updator, update } = props?.target
  console.log('sddd', props?.target)
  return (
    <View style={styles.AssetsItem}>
      <Text style={styles.status}>
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>盘点状态：</Text>
          <Text style={styles.value}>{status}</Text>
        </View>
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>资产状态：</Text>
          <Text style={styles.value}>{assetsStatus}</Text>
        </View>
        <View style={styles.assetsStatus}>
          <Text style={styles.title}>资产编号：</Text>
          <Text style={styles.value}>{number}</Text>
        </View>
      </Text>
      <View style={styles.info}>
        <View style={styles.left}>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>资产类别：</Text>
            <Text style={styles.value}>{categopry}</Text>
          </View>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>所属部门：</Text>
            <Text style={styles.value}>{department}</Text>
          </View>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>资产型号：</Text>
            <Text style={styles.value}>{title}</Text>
          </View>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>更新日期：</Text>
            <Text style={styles.value}>{update}</Text>
          </View>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>持有人：</Text>
            <Text style={styles.value}>{belong}</Text>
          </View>
          <View style={styles.assetsStatus}>
            <Text style={styles.title}>更新人：</Text>
            <Text style={styles.value}>{updator}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image style={styles.image} source={avator} />
        </View>
      </View>
      <View style={styles.opts}>
        <Button title="盘盈" />
        <Button title="盘亏" />
        <Button title="变更" />
        <Button title="报废" />
        <Button title="正常" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  AssetsItem: {
    flex: 1,
    padding: 10,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 6
  },
  status: {
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    display: 'flex',
    flexDirection: 'column'
  },
  assetsStatus: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {},
  value: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "flex-start",
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 6
  },
  right: {},
  image: {
    width: 100,
    height: 100,
    objectFit: 'contain'
  },
  opts: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10
  }
})