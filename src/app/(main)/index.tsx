import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chats from '@/src/components/molecule/Chats';
import Status from '@/src/components/molecule/Status';
import Calls from '@/src/components/molecule/Calls';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Main = () => {
  const [currentTab, setCurrentTab] = React.useState<string>("chat");

  const ActiveTab = () => {
    switch (currentTab) {
      case 'chat':
        return <Chats />;
      case 'status':
        return <Status />;
      case 'calls':
        return <Calls />;
      default:
        return <Chats />;
    }
  }

  const WhatsAppHeader = () => (
    <View style={styles.whatsAppHeaderStyle}>
      <Text style={styles.whatsAppText}>WhatsApp</Text>
      <View style={styles.iconContainer}>
        <AntDesign name="search1" style={styles.headerIcon} />
        <Entypo name="dots-three-vertical" style={styles.headerIcon} />
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008069" style="light" />
      <WhatsAppHeader />
      {/* Top bar */}
      <View style={styles.topBarContainer}>
        {
          ['chat', 'status', 'calls'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setCurrentTab(tab)}
              style={[styles.topBarButton, currentTab === tab && { borderColor: "white" }]}
            >
              <Text style={styles.topBarText}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      {ActiveTab()}
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    backgroundColor: "#008069",
    gap: scale(10),
  },
  topBarButton: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: verticalScale(10),
    borderColor: "#008069",
  },
  topBarText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "white",
  },
  headerIcon: {
    fontSize: moderateScale(24),
    color: "white",
  },
  whatsAppHeaderStyle: {
    backgroundColor: "#008069",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(12),
    paddingBottom: verticalScale(17),
    paddingTop: verticalScale(10),
  },
  iconContainer: {
    flexDirection: "row",
    gap: scale(10),
  },
  whatsAppText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "white",
  },
})
