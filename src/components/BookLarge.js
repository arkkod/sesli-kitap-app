import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../consts';

function BookLarge({style, data}) {
  const navigation = useNavigation();
  function onPressBook() {
    navigation.navigate('BookDetail', data);
  }
  return (
    <View style={[styles.book, {...style}]}>
      <TouchableNativeFeedback onPress={() => onPressBook()}>
        <View style={styles.image}>
          <Image
            resizeMode={'stretch'}
            style={styles.cover}
            source={{
              uri: data.cover,
            }}
          />
        </View>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.author} numberOfLines={1}>
          {data.author}
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  book: {
    borderRadius: 3,
    width: 180,
    height: 310,
  },
  image: {
    width: 180,
    height: 250,
    borderRadius: 5,
    backgroundColor: colors.load,
  },
  cover: {
    width: 180,
    height: 250,
    borderRadius: 3,
  },
  name: {
    fontSize: 14,
    color: colors.dark,
    marginTop: 12,
    fontFamily: fonts.bold,
  },
  author: {
    fontSize: 14,
    color: colors.text,
    fontFamily: fonts.regular,
    marginTop: 3,
  },
});

export default BookLarge;
