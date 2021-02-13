import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import AppHeader from './components/Appheader';
import AppFootNav from './components/AppFootNav';
import AppFlatHeader from './components/AppFlatHeader';
import Content from './components/content';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
          <View>
            <AppHeader />
            <AppFlatHeader />
          </View>
              <Content />
          <AppFootNav />

        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    backgroundColor: 'lightgray',
    flex: 1,
  },
});

export default App;
