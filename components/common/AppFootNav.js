import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Style from './Styled';

const {IconStyle} = Style;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
});

const AppFootNav = () => {
  return (
    <View style={styles.wrap}>
      <IconStyle source={require('../../assets/icon/nav-home.png')} />
      <IconStyle source={require('../../assets/icon/nav-zoom.png')} />
      <IconStyle source={require('../../assets/icon/nav-video.png')} />
      <IconStyle source={require('../../assets/icon/nav-shopping.png')} />
      <IconStyle source={require('../../assets/icon/nav-profile.png')} />
    </View>
  );
};

export default AppFootNav;
