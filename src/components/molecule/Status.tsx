import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons'

const Status = () => {
  const data = [
    {
      id: 1,
      image: imagePath.logo,
      name: "Vishal Chaturvedi",
      message: "10 minutes ago",
    },
    {
      id: 2,
      image: imagePath.logo,
      name: "Sray",
      message: "Today, 7:29 am",
    },
    {
      id: 3,
      image: imagePath.logo,
      name: "Gufran",
      message: "Yesterday, 11:11 pm",
    }
  ]

  return (
    <View style={{flex:1, gap: 20}}>
      <MessageCard image={imagePath.logo} name={"My Status"} message={"Tap to add status update"}
        logoComponent={<View style={styles.logoComponentContainer}>
          <Ionicons name="add-outline" size={moderateScale(20)} color="black" />
        </View>}/>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard image={item?.image} name={item?.name} message={item.message} />
      }}/>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  logoComponentContainer: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(100),
    backgroundColor: "#008069",
    position: "absolute",
    bottom: verticalScale(-5),
    right: scale(-5),
    borderWidth: moderateScale(2),
    borderColor: "black",
  },
})
