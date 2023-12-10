import {StyleSheet, Text, View,Linking } from 'react-native';
import React from 'react';
import Timer from './Timer';
const AlertPage = () => {
  return (
    <View style={styles.alertMain}>
      <Timer />
      <View style={styles.alertView}>
        <Text style={styles.alerthed}>Alert</Text>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 23}}>
          This is a demo app only for presentation basis by Seedfist Consultancy
          Services. For finished product, kindly contact{' '}
          <Text
            style={{fontWeight:'bold'}}
            onPress={() =>
              Linking.openURL(
                'https://seedfist.com/?utm=ios&uts=preethishapewear.in',
              )
            }>
            Seedfist.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AlertPage;

const styles = StyleSheet.create({
  alertMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#ff0f0f',

    // backgroundColor:"blue",
    // color:"white",
    // textAlign:"center"
  },
  alertView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBlockColor: 'black',
    borderWidth: 2,
    margin: '4%',
    padding: '2%',
    borderRadius: 40,
  },
  alerthed: {
    fontSize: 40,
    color: '#fff',
  },
});
