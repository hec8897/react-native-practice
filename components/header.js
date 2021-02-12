import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Fonts} from '../font'

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor:"lightgray"
  },
  titStyle: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: Fonts.Regular,
  },
});

const AppHeader = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.titStyle}>
        INSTARGRAM CLONE</Text>
    </View>
  );
};

export default AppHeader;
