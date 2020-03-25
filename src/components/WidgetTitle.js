import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../consts';

function WidgetTitle({style, title}) {
  return <Text style={[styles.title, {...style}]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.dark,
    fontSize: 14,
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default WidgetTitle;
