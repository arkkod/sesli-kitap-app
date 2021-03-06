import React from 'react';
import {ScrollView, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {
  Header,
  ListBookHorizontal,
  ListBookVertical,
  WidgetTitle,
} from '../components';
import colors from '../consts/colors';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={'Anasayfa'} />
      <ScrollView style={styles.container}>
        <ListBookHorizontal
          widgetTitle={'Öne Çıkanlar'}
          style={styles.horizontalList}
        />
        <ListBookVertical
          widgetTitle={'Son Eklenenler'}
          style={styles.verticalList}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  horizontalList: {
    marginTop: 35,
    height: 350,
  },
  verticalList: {
    marginTop: 35,
  },
});

export default Home;
