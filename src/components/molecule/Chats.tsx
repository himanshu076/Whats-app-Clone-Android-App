import { View, Text, FlatList } from 'react-native'
import React from 'react'
import MessageCard from './MessageCard'
import imagePath from '@/src/constants/imagePath'

const Chats = () => {
  const data = [
    {
      id: 1,
      image: imagePath.logo,
      name: "Vishal Chaturvedi",
      message: "Hi, How are you?",
      time: "5:27 am",
      messageCount: 2,
    },
    {
      id: 2,
      image: imagePath.logo,
      name: "Sray",
      message: "Hi, How are you?",
      time: "5:27 am",
      messageCount: 6,
    },
    {
      id: 3,
      image: imagePath.logo,
      name: "Gufran",
      message: "Hi, How are you?",
      time: "5:27 am",
      messageCount: 8,
    }
  ]

  return (
    <View style={{flex:1, backgroundColor: "white"}}>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard image={item?.image} name={item?.name} message={item.message} time={item.time} messageCount={item.messageCount} />
      }}/>
    </View>
  )
}

export default Chats