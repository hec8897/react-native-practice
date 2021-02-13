import React, {Component} from 'react';
import {Image, View, FlatList, StyleSheet, Text} from 'react-native';
import AppReply from './ItemComponents/AppReply'

const ContentData = [
  {
    id: '1',
    UserID:"hec8897",
    title: '올 시즌엔 1루수 이대호(39.롯데)를 얼마나 볼 수 있을까. 그 횟수가 늘어날수록 롯데가 승리를 만드는 방정식이 보다 다양해질 수 있다.',
    Img: require(`../assets/img1.jpg`),
    reply:'댓글'
  },
  {
    id: '2',
    UserID:"kimdawoon",
    title: 'Second',
    Img: require(`../assets/img1.jpg`),
    reply:'123'
  },
];

const Content = ({DATA}) => {
  return (
    <View style={styles.container}>
      <View style={styles.TitleStyle}>
        <View style={styles.TitleStyle}>
          <View style={styles.ProfileView}></View>
          <View>
            <Text style={{fontSize: 18}}>{DATA.UserID}</Text>
            <Text style={{fontSize: 14}}>경기도 강릉시</Text>
          </View>
        </View>
        <Image
          style={{
            height: 15,
            width: 15,
            resizeMode: 'contain',
          }}
          source={require('../assets/icon/item-menu.png')}
        />
      </View>
      <View style={{height: 400}}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          source={DATA.Img}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{paddingVertical: 15, flexDirection: 'row'}}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon/header-heart.png')}
          />
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon/item-chat.png')}
          />
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon/header-next.png')}
          />
        </View>
        <Image
          style={{height: 25, width: 25, resizeMode: 'contain'}}
          source={require('../assets/icon/item-bookmark.png')}
        />
      </View>

      <AppReply DATA={DATA.reply} UserID={DATA.UserID} title={DATA.title}/>
      
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  ProfileView: {
    borderRadius: 100,
    padding: 15,
    backgroundColor: '#f9c2ff',
    marginRight: 10,
  },
  iconStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginRight: 20,
  },
});

export default AppFlatList;
