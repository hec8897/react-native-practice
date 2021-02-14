import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Style from './Styled'
import {Fonts} from '../../font';

const {IconStyle} = Style

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titStyle: {
    fontSize: 18,
    fontWeight:'bold',
    fontFamily: Fonts.Bold,
  },
});

const AppHeader = ({LoginInfo}) => {
  return (
    <View style={styles.wrap} backgroundColor="#fff" padding={10}>
      <Text style={styles.titStyle}>SNS CLONE ({LoginInfo.UserID})</Text>
      <View style={styles.wrap}>
        <IconStyle
          source={require('../../assets/icon/header-add.png')
        }
        />
        <IconStyle
          marginLeft={25}
          source={require('../../assets/icon/header-heart.png')}
        />
        <IconStyle
          marginLeft={25}
          source={require('../../assets/icon/header-next.png')}
        />
      </View>
    </View>
  );
};

export default AppHeader;
