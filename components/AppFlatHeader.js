import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First',
  },
  {
    id: '2',
    title: 'Second',
  },
  {
    id: '3',
    title: 'Third',
  },
  {
    id: '4',
    title: 'Third',
  },
  {
    id: '5',
    title: 'Third',
  },
  {
    id: '6',
    title: 'Third',
  },
];

const Item = ({title}) => (
  <View style={styles.container}>
    <View style={styles.item}>
    </View>
    <Text style={{textAlign:'center',marginTop:5}}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#f0f0f0'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 35,
    marginHorizontal: 8,
    borderRadius:100
  },
  title: {
    fontSize: 32,
  },
});

const AppFlatHeader = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View style={{backgroundColor: '#fff'}}>
      <FlatList
        data={DATA}
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

export default AppFlatHeader;
