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
import {CategoryBox, Header, WidgetTitle} from '../components';

function Categories() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={'Kategoriler'} />
      <ScrollView style={styles.scroll}>
        <WidgetTitle title={'Öne Çıkanlar'} style={styles.widgetTitle} />
        <CategoryBox
          style={styles.box}
          data={{
            _id: '9878fsdousad89798',
            name: 'Tarih',
            description: 'sadlkasdsadsaj lasdjsal jd sakldj askldja sldksa',
          }}
        />
        <CategoryBox
          style={styles.box}
          data={{
            _id: '43663662457254s',
            name: 'Roman',
            description: 'sadlkasdsadsaj lasdjsal jd sakldj askldja sldksa',
          }}
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
  scroll: {
    paddingHorizontal: 15,
  },
  box: {
    marginBottom: 12,
  },
  widgetTitle: {
    marginTop: 35,
    marginBottom: 18,
  },
});

export default Categories;
