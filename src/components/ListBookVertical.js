import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {WidgetTitle, BookSmall} from '../components';
import {colors} from '../consts';

function ListBookVertical({style, widgetTitle, library}) {
  return (
    <View style={[styles.list, {...style}]}>
      <WidgetTitle title={widgetTitle} style={styles.widgetTitle} />
      <BookSmall
        library={library}
        style={styles.bookSmall}
        data={{
          name: 'Hiçbir Karşılaşma Tesadüf Değildir',
          description:
            'Kader, insandan vazgeçmiyor. Anbean yeniden ve yeniden yazılıyor. Öyle anlar geliyor ki yapmam dediğin şeyi yapıyorsun, katlanamam dediğin şeye katlanıyorsun, sevemem dediğini seviyorsun, gidemem sanırken bir anda çekip gidebiliyorsun, öldüm diyorsun ama yine de yaşıyorsun...',
          totalTime: '10:44:21',
          cover:
            'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
        }}
      />
      <BookSmall
        library={library}
        style={styles.bookSmall}
        data={{
          name: 'Akşam Yıldızı',
          description:
            'Akşam Yıldızı, okurlarını bugünden alıp asırlar öncesinin Göbeklitepe’sine götürüyor. Akşam Yıldızı kendi gerçekliği ile ezber bozacak.',
          totalTime: '10:44:21',
          cover:
            'https://i.dr.com.tr/cache/600x600-0/originals/0001856527001-1.jpg',
        }}
      />
      <BookSmall
        library={library}
        style={styles.bookSmall}
        data={{
          name: 'Hiçbir Karşılaşma Tesadüf Değildir',
          description:
            'Kader, insandan vazgeçmiyor. Anbean yeniden ve yeniden yazılıyor. Öyle anlar geliyor ki yapmam dediğin şeyi yapıyorsun, katlanamam dediğin şeye katlanıyorsun, sevemem dediğini seviyorsun, gidemem sanırken bir anda çekip gidebiliyorsun, öldüm diyorsun ama yine de yaşıyorsun...',
          totalTime: '10:44:21',
          cover:
            'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
        }}
      />
      <BookSmall
        library={library}
        style={styles.bookSmall}
        data={{
          name: 'Akşam Yıldızı',
          description:
            'Akşam Yıldızı, okurlarını bugünden alıp asırlar öncesinin Göbeklitepe’sine götürüyor. Akşam Yıldızı kendi gerçekliği ile ezber bozacak.',
          totalTime: '10:44:21',
          cover:
            'https://i.dr.com.tr/cache/600x600-0/originals/0001856527001-1.jpg',
        }}
      />
      <BookSmall
        library={library}
        style={styles.bookSmall}
        data={{
          name: 'Hiçbir Karşılaşma Tesadüf Değildir',
          description:
            'Kader, insandan vazgeçmiyor. Anbean yeniden ve yeniden yazılıyor. Öyle anlar geliyor ki yapmam dediğin şeyi yapıyorsun, katlanamam dediğin şeye katlanıyorsun, sevemem dediğini seviyorsun, gidemem sanırken bir anda çekip gidebiliyorsun, öldüm diyorsun ama yine de yaşıyorsun...',
          totalTime: '10:44:21',
          cover:
            'https://i.dr.com.tr/cache/600x600-0/originals/0001858361001-1.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
  scroll: {
    width: '100%',
  },
  bookSmall: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ListBookVertical;
