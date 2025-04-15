import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'
import { Feather, FontAwesome5, Zocial } from '@expo/vector-icons'
import { moderateScale } from 'react-native-size-matters'

const Calls = () => {
  const data = [
    {
      id: 1,
      image: imagePath.logo,
      name: "Vishal Chaturvedi",
      message: "today, 2:00 pm",
      rightIcon: <FontAwesome5 name="video" color="black" style={styles.callIcon}  />,
      messageLeftIcon: <Feather name="arrow-up-right" color="black" style={styles.messageRightIcon} />
    },
    {
      id: 2,
      image: imagePath.logo,
      name: "Sray",
      message: "26 June, 11:04 pm",
      rightIcon: <Zocial name="call" color="black" style={styles.phoneIcon} />,
      messageLeftIcon: <Feather name="arrow-down-left" color="black" style={[styles.messageRightIcon, {color: "red"}]} />
    },
    {
      id: 3,
      image: imagePath.logo,
      name: "Gufran",
      message: "26 June, 11:03 pm",
      rightIcon: <FontAwesome5 name="video" color="black" style={styles.callIcon} />,
      messageLeftIcon: <Feather name="arrow-down-left" color="black" style={[styles.messageRightIcon, {color: "red"}]} />
    }
  ]

  return (
    <View style={{flex:1, backgroundColor: "white"}}>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard image={item?.image} name={item?.name} message={item?.message} rightIcon={item?.rightIcon} messageLeftIcon={item?.messageLeftIcon} />
      }}/>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  callIcon: {
    color: "#008069",
    fontSize: moderateScale(20),
  },
  phoneIcon: {
    color: "#008069",
    fontSize: moderateScale(25),
  },
  messageRightIcon: {
    fontSize: moderateScale(15),
    color: "#008069",
  },
})
