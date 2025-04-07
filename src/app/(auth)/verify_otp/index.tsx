import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import OTPInput from '@codsod/react-native-otp-input';

const VerifyOtp = () => {
  const [otp, setOtp] = React.useState<string>('');

  const onPress = () => {
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <AntDesign name="arrowleft" style={styles.backButton} />
        <Text style={styles.headTitle}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.otpSendText}>Code has been sent to +91 11******44</Text>
        <OTPInput length={4} style={styles.otpContainer} onOtpComplete={(txt: string) => {setOtp(txt)}} inputStyle={styles.inputStyle}/>
        <Text style={styles.otpSendText}>Resend code in <Text style={styles.counterText}>56</Text> sec</Text>
      </View>
      <View style={styles.footer}>
        <ButtonComp title='verify' onPress={onPress} style={styles.verifyButton}/>
      </View>
    </SafeAreaView>
  )
}

export default VerifyOtp;
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20),
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
  },

  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  backButton: {
    fontSize: moderateScale(25),
    color: 'black',
    fontWeight: 'bold',
  },
  headTitle: {},

  body: {
    alignItems: 'center',
    gap: verticalScale(25),
  },
  counterText: {
    color: "#00A884",
  },
  otpSendText: {
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
  resendText: {},

  footer: {},
  verifyButton: {
    borderRadius: moderateScale(30),
  },
  inputStyle: {
    borderColor: "black",
    borderRadius: moderateScale(15),
    height: verticalScale(50),
    width: scale(58),
  },
  otpContainer: {
    gap: scale(10),
  },
})
