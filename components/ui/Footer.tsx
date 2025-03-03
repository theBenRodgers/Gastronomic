import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { router } from 'expo-router';


const Footer = () => {
  return(
    <View style={styles.container}>
      <Pressable onPress={() => alert('add clicked')}>
        <Image source={require('../../assets/images/home-icon.png')} style={styles.icon}/>
      </Pressable>
      <Pressable onPress={() => alert('add clicked')}>
        <Image source={require('../../assets/images/pot-icon.png')} style={styles.icon}/>
      </Pressable>
      <Pressable onPress={() => alert('cam clicked')}>
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
