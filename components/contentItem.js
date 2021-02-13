import React, {Component} from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';

const ContentItem = ({DATA}) => {
    return (
      <View style={styles.container}>
        <View style={styles.TitleStyle}>
          <Text>{DATA.title}</Text>
        </View>
        <View style={{height: 400}}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            source={DATA.Img}
          />
        </View>
        <View>
          <Text>{DATA.title}</Text>
        </View>
      </View>
    );
  };

  export default ContentItem