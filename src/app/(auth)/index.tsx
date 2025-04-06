import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const Auth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let navigateToWelcome = () => {
    router.push("./terms_agree")
  }

  let loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToWelcome, 3000);
  }

  useEffect(() => {
    const timeout = setTimeout(loadingTimeout, 2000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath?.logo} style={styles.logo_style} resizeMode="contain" />
        <Text style={styles.whatsapp_text}></Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"}/>
            <Text style={styles.loading_text}>Loading...</Text>
          </>
          ) : (
          <>
            <Text style={styles.form_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Auth

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50)
  },
  header: {
    // height: 40,
    // width: 40,
    // backgroundColor: "red",
  },
  body: {
    alignItems: "center",
    gap: verticalScale(5)
  },
  footer: {
    alignItems: "center",
    height: verticalScale(60),
    justifyContent: "flex-end"
  },
  form_text: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  facebook_text: {
    fontSize: moderateScale(12),
    color: "#000000"
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10)
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight: "bold"
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(10),
  }
});
