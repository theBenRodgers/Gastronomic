import React from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import ThemeText from '../theme/ThemeText';
import { RelativePathString, useRouter } from 'expo-router'

type HeaderType = "home" | "add" | "nav"
interface Props {
  type: HeaderType;
  title: string;
  leftNavLink?: RelativePathString;
  rightNavLink?: RelativePathString;
}

const Header = ({ type, title, leftNavLink, rightNavLink }: Props) => {
  const router = useRouter();
  switch (type) {
    case "home":
      if (rightNavLink && leftNavLink) {
        return (
          <View style={styles.container}>
            <Pressable onPress={() => router.push(leftNavLink)}>
              <Image source={require('../../assets/images/cam-icon.png')} style={styles.leftIcon} />
            </Pressable>
            <ThemeText style={styles.titleText} type='title'>{title}</ThemeText>
            <Pressable onPress={() => router.push(rightNavLink)}>
              <Image source={require('../../assets/images/settings-icon.png')} style={styles.rightIcon} />
            </Pressable>
          </View>
        );
      }
    case "add":
      if (rightNavLink) {
        return (
          <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
              <Image source={require('../../assets/images/back-icon.png')} style={styles.leftIcon} />
            </Pressable>
            <ThemeText style={styles.subtitleText} type='title'>{title}</ThemeText>
            <Pressable onPress={() => router.push(rightNavLink)}>
              <Image source={require('../../assets/images/plus-icon.png')} style={styles.rightIcon} />
            </Pressable>
          </View>
        );
      }
    case "nav":
      return (
        <View style={styles.container}>
          <Pressable onPress={() => router.back()}>
            <Image source={require('../../assets/images/back-icon.png')} style={styles.leftIcon} />
          </Pressable>
          <ThemeText style={styles.subtitleText} type='title'>{title}</ThemeText>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 15,
  },
  titleText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  subtitleText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 40,
  },
  leftIcon: {
    marginTop: 10,
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  rightIcon: {
    marginTop: 5,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});

export default Header;
