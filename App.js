import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import AppHeader from './components/header'



const App = ()  => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <SafeAreaView style={styles.wrap}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <AppHeader />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrap:{
    backgroundColor:"lightgray",
    flex:1
  }

});

export default App;
