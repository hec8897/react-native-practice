import React from 'react';
import {StyleSheet, View, Text, Icon} from 'react-native';
// import { Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../font'

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
    backgroundColor:"#fff"
  },
  titStyle: {
    fontSize: 16,
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
