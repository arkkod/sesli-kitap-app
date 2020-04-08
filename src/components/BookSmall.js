import React from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../consts';

function BookSmall({style, data, library}) {
  const navigation = useNavigation();
  function onPressBook() {
    navigation.navigate('BookDetail', data);
  }

  function onLongPressBook() {
    if (library) {
      Alert.alert('Uyarı', 'Kitap favorilerden silinsin mi?', [
        {text: 'İptal'},
        {
          text: 'Sil',
          onPress: () => {
            // kitap favorilerden çıkarma kodu buraya yazılacak
            alert('kitap silindi');
          },
        },
      ]);
    }
  }

  return (
    <TouchableNativeFeedback
      style={[styles.book, {...style}]}
      onPress={() => onPressBook()}
      onLongPress={() => onLongPressBook()}>
      <View style={styles.image}>
        <Image
          resizeMode={'stretch'}
          style={styles.cover}
          source={{
            uri: data.cover,
          }}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {data.description}
        </Text>
        <Text style={styles.totalTime} numberOfLines={1}>
          {data.totalTime}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  book: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 110,
    height: 150,
    borderRadius: 5,
    backgroundColor: colors.load,
    marginRight: 20,
  },
  cover: {
    width: 110,
    height: 150,
    borderRadius: 3,
  },
  name: {
    fontSize: 14,
    color: colors.dark,
    fontFamily: fonts.semibold,
    lineHeight: 22,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.regular,
    marginTop: 5,
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  totalTime: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.regular,
    marginTop: 15,
    letterSpacing: 0.9,
    lineHeight: 19,
  },
  details: {
    flex: 1,
  },
});

export default BookSmall;
