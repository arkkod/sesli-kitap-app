import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../consts';

function CategoryBox({style, data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetail', {data})}
      style={[styles.box, {...style}]}
      activeOpacity={0.6}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.count}>15 Kitap</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.box,
    padding: 16,
    borderRadius: 10,
  },
  name: {
    fontFamily: fonts.semibold,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16,
    color: colors.dark,
  },
  count: {
    marginTop: 3,
    fontFamily: fonts.semibold,
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16,
    color: colors.text,
  },
});

export default CategoryBox;
