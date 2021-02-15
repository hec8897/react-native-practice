import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
} from 'react-native';
import Home from './view/Home';
import AppHeader from './components/common/Appheader';
import AppFootNav from './components/common/AppFootNav';

class App extends Component {
  state = {
    Page: 'home',
    LoginInfo: {
      UserID: 'hec8897',
    },
  };

  RouterChanger = (Mode) => {
    this.setState({
      Page: Mode,
    });
  };

  PageRender = (Page) => {
    if (Page == 'home') {
      return <Home />;
    } else {
      return <Text>{Page}</Text>;
    }
  };

  render() {
    const {PageRender, RouterChanger} = this;
    const {Page, LoginInfo} = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <AppHeader LoginInfo={LoginInfo} />
            {PageRender(Page)}
            <Button
              onPress={()=>RouterChanger('home')}
              title="홈 라우터 변경 테스트"
              color="#841584"
              accessibilityLabel="Mode Test"
            />
            <Button
              onPress={()=>RouterChanger('sub')}
              title="서브 라우터 변경 테스트"
              color="#841584"
              accessibilityLabel="Mode Test"
            />
            <AppFootNav />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

export default App;
