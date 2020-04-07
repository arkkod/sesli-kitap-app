import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WidgetTitle, BookLarge} from '../components';

function ListBookHorizontal({style, widgetTitle}) {
  return (
    <View style={[styles.list, {...style}]}>
      <WidgetTitle title={widgetTitle} style={styles.widgetTitle} />
      <ScrollView horizontal={true} style={styles.scroll}>
        <BookLarge
          style={styles.bookLarge}
          data={{
            name: 'Hiçbir Karşılaşma Tesadüf Değildir',
            author: 'Hakan Mengüç',
            cover:
              'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
          }}
        />
        <BookLarge
          style={styles.bookLarge}
          data={{
            name: 'Akşam Yıldızı',
            author: 'İskender Pala',
            cover:
              'https://i.dr.com.tr/cache/600x600-0/originals/0001856527001-1.jpg',
          }}
        />
        <BookLarge
          style={styles.bookLarge}
          data={{
            name: 'Hiçbir Karşılaşma Tesadüf Değildir',
            author: 'Hakan Mengüç',
            cover:
              'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
          }}
        />
        <BookLarge
          style={styles.bookLarge}
          data={{
            name: 'Akşam Yıldızı',
            author: 'İskender Pala',
            cover:
              'https://i.dr.com.tr/cache/600x600-0/originals/0001856527001-1.jpg',
          }}
        />
        <BookLarge
          style={styles.bookLarge}
          data={{
            name: 'Hiçbir Karşılaşma Tesadüf Değildir',
            author: 'Hakan Mengüç',
            cover:
              'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: 15,
  },
  widgetTitle: {
    marginBottom: 20,
  },
  bookLarge: {
    marginRight: 18,
  },
  scroll: {
    width: '100%',
  },
});

export default ListBookHorizontal;
