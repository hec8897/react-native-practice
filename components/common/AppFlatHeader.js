import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const Item = ({title}) => (
  <View style={styles.container}>
    <View style={styles.item}>
    </View>
    <Text style={{textAlign:'center',marginTop:5}}>{title}</Text>
  </View>
);

const AppFlatHeader = ({FriendInfo}) => {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={{backgroundColor: '#fff'}}>
      <FlatList
        data={FriendInfo}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        persistentScrollbar
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#f0f0f0'
  },
  item: {
    padding: 35,
    marginHorizontal: 8,
    borderRadius:100,
    backgroundColor: '#f9c2ff'
  },
  title: {
    fontSize: 32,
  },
});


export default AppFlatHeader;
