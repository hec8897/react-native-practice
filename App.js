import React from 'react';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import Home from './view/Home';
import AppHeader from './components/common/Appheader';
import AppFootNav from './components/common/AppFootNav';
import AppFlatHeader from './components/common/AppFlatHeader';


const LoginInfo = {
  UserID: 'hec8897',
};
const FriendInfo = [
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
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            <AppHeader LoginInfo={LoginInfo} />
            <AppFlatHeader FriendInfo={FriendInfo} />
          </View>
          <Home />
          <AppFootNav />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
});

export default App;
