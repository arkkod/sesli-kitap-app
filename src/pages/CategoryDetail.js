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
import {Header, ListBookVertical} from '../components';

function CategoryDetail({route}) {
  const data = route.params.data;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={data.name} activeGoBack={true} />
      <ScrollView style={styles.container}>
        <ListBookVertical
          widgetTitle={data.name + ' kitapları'}
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
  verticalList: {
    marginTop: 35,
  },
});

export default CategoryDetail;
