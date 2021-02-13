import React, {Component} from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';

const ContentData = [
  {
    id: '1',
    title: 'First',
    Img: require(`../assets/img1.jpg`),
  },
  {
    id: '2',
    title: 'Second',
    Img: require(`../assets/img1.jpg`),
  },
];

const Content = ({DATA}) => {
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

class AppFlatList extends Component {
  renderItem = ({item}) => <Content DATA={item} />;

  render() {
    return (
      <FlatList
        data={ContentData}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  TitleStyle: {
    padding: 20,
  },
});

export default AppFlatList;
