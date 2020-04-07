import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../consts/colors';
import {
  CategoryBox,
  Header,
  WidgetTitle,
  ListBookVertical,
} from '../components';

function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={'Kütüphanem'} />
      <ScrollView style={styles.scroll}>
        <ListBookVertical
          library={true}
          widgetTitle={'Favorilerim'}
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
  box: {
    marginBottom: 12,
  },
  verticalList: {
    marginTop: 35,
  },
});

export default Library;
