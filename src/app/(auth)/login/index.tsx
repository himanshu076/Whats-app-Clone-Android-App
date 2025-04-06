import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const Login = () => {
  const [visible, setVisible] = React.useState(false);
  const [countryData, setCountryData] = React.useState({
    countryName: "India",
    countryCode: "+ 91",
  });

  const onNextButtonClick = () => {
    router.push('./verify_otp');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your Phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your number.
            <Text style={styles.link_description}> What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity style={styles.dropdown_container} onPress={() => setVisible(true)} activeOpacity={0.8}>
            <View />
            <Text style={styles.dropdown_title}>{countryData?.countryName}</Text>
            <AntDesign name="caretdown" size={moderateScale(14)} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line} />
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryData?.countryCode}</Text>
              <View style={styles.horizontal_line} />
            </View>
            <View style={{gap: verticalScale(10), flex: 1}}>
              <TextInput style={styles.input} placeholder='Enter Your Phone Number'/>
              <View style={styles.horizontal_line} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComp title='Next' onPress={onNextButtonClick} style={{paddingHorizontal: scale(29),}}/>
      </View>
      {visible &&
        <CountryPicker
          visible={visible}
          onSelect={(e:any) => setCountryData({ countryName: e.name.toString(), countryCode: `+ ${e.callingCode[0]}`})}
          withFilter
          // withFlag
          // withCountryNameButton
          // withAlphaFilter
          // withCallingCode
          onClose={() => setVisible(false)}
          // onOpen={() => setVisible(true)}
          countryCode="IN"
          // containerButtonStyle={{ backgroundColor: "white", borderRadius: moderateScale(4), paddingVertical: verticalScale(10), paddingHorizontal: scale(10), }}
        />
      }
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(20),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  input_main_container: {
    paddingHorizontal: scale(10),
  },
  input_container: {
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: 400,
    color: "black",
  },
  link_description: {
    color: "#002AC0"
  },
  horizontal_line:  {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05AA82",
  },
  dropdown_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  dropdown_title: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: "black",
    alignSelf: "center",
  },
  country_code: {
    gap: verticalScale(10),
  },
  input: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: "black",
  },
  country_code_text: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: "black",
    paddingVertical: verticalScale(7),
  },
})
