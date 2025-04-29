import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { router } from 'expo-router';


const Footer = () => {
  return(
    <View style={styles.container}>
<<<<<<< HEAD
      <Pressable onPress={() => alert('add clicked')}>
=======
      <Pressable onPress={() => router.navigate('/home')}>
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
        <Image source={require('../../assets/images/home-icon.png')} style={styles.icon}/>
      </Pressable>
      <Pressable onPress={() => alert('add clicked')}>
        <Image source={require('../../assets/images/pot-icon.png')} style={styles.icon}/>
      </Pressable>
<<<<<<< HEAD
      <Pressable onPress={() => alert('cam clicked')}>
=======
      <Pressable onPress={() => router.navigate('/search_screen')}>
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
        <Image source={require('../../assets/images/lettuce-icon.png')} style={styles.icon}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  icon: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
});

export default Footer;
