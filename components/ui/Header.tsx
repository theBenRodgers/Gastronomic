import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
<<<<<<< HEAD
import ThemeText from './ThemeText';
=======
import ThemeText from '../theme/ThemeText';
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
import { router } from 'expo-router';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return(
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/NewIngredient')}>
        <Image source={require('../../assets/images/plus-icon.png')} style={styles.plusIcon}/>
      </Pressable>
      <ThemeText type='title'>{children}</ThemeText>
      <Pressable onPress={() => alert('cam clicked')}>
        <Image source={require('../../assets/images/cam-icon.png')} style={styles.camIcon}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  plusIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  camIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default Header;
