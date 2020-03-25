import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {Header, ListBookHorizontal} from '../components';
import colors from '../consts/colors';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={'Anasayfa'} />
      <ListBookHorizontal style={styles.horizontalList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalList: {
    marginTop: 35,
    height: 350,
  },
});

export default Home;
