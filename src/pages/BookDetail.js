import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {colors, fonts} from '../consts';
import {Header} from '../components';

function BookDetail({route}) {
  const data = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
      <Header title={'Kitap Detayları'} activeGoBack={true} />
      <ScrollView style={styles.container}>
        <View style={styles.book}>
          <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
            <Icon name={'play-circle'} size={32} color={'#FFF'} />
          </TouchableOpacity>
          <Image
            resizeMode={'stretch'}
            style={styles.cover}
            source={{
              uri: data.cover,
            }}
          />
          <View style={styles.bookInfo}>
            <Text style={styles.bookName} numberOfLines={1}>
              {data.name}
            </Text>
            <Text style={styles.bookSmallText}>{data.author}</Text>
            <Text style={styles.bookSmallText}>7 bölüm / 3 saat 20 dakika</Text>
          </View>
        </View>
        <View style={styles.partList}>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>1</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>2</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>3</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>4</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>5</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>6</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback style={styles.part}>
            <Text style={styles.partText}>7</Text>
            <Text style={styles.partText}>Birth of The Baby</Text>
            <Text style={styles.partText}>5:20</Text>
            <Icon name={'more-horizontal'} size={24} color={'gray'} />
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  book: {
    width: '100%',
    height: 300,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 40,
    zIndex: 10,
    marginBottom: 45,
    alignItems: 'center',
  },
  playButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: -25,
    right: 25,
    zIndex: 100,
  },
  cover: {
    width: 110,
    height: 150,
    borderRadius: 3,
    marginTop: 10,
  },
  bookInfo: {
    width: '85%',
    alignItems: 'flex-start',
  },
  bookName: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.background,
    letterSpacing: 0.5,
    lineHeight: 35,
    marginTop: 25,
    marginBottom: 10,
  },
  bookSmallText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.background,
    letterSpacing: 1,
    lineHeight: 16,
    marginTop: 5,
  },
  part: {
    paddingHorizontal: '6%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
  },
  partText: {
    fontSize: 14,
    fontFamily: fonts.regular,
  },
});

export default BookDetail;
