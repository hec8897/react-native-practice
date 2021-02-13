import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
// import { Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../font';

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  titStyle: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
  },
  iconContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  iconStyle: {
    marginLeft:25,
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

const AppHeader = () => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.titStyle}>INSTARGRAM CLONE</Text>
      <View style={styles.iconContainer}>
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/header-add.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/header-heart.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/header-next.png')}
        />
      </View>
    </View>
  );
};

export default AppHeader;
