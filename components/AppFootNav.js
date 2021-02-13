import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
// import { Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Fonts} from '../font';

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopWidth:1,
    borderTopColor:'#f0f0f0'
  },
  titStyle: {
    fontSize: 16,
    fontFamily: Fonts.Bold,
  },
  iconContainer: {
    display:'flex',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

const AppFootNav = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/nav-home.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/nav-zoom.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/nav-video.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/nav-shopping.png')}
        />
        <Image
          style={styles.iconStyle}
          source={require('../assets/icon/nav-profile.png')}
        />
      </View>
    </View>
  );
};

export default AppFootNav;
