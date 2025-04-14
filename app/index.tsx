import React, {useState} from 'react';
import {Image, ImageBackground, TextInput, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import ThemeText from '@/components/ui/ThemeText'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <ImageBackground source={require('../assets/images/splash1-mobile.jpg')} resizeMode="cover" style={styles.image}>
		  <View style={styles.logoContainer}>
			<Image source={require('../assets/images/logo.png')} style={styles.logo} />
		  </View>
		  <View style={styles.buttonGroup}>
			<TouchableHighlight style={styles.buttonContainer} onPress={() => router.push('/login')}>
			<View style={styles.button}>
				<ThemeText style={styles.buttonText}>Returning User</ThemeText>
			</View>
			</TouchableHighlight>
			<TouchableHighlight style={styles.buttonContainer} onPress={() => router.push('/signup')}>
			<View style={styles.button}>
				<ThemeText style={styles.buttonText}>New User</ThemeText>
			</View>
			</TouchableHighlight>
			<TouchableHighlight style={styles.buttonContainer} onPress={() => router.push('/home')}>
			<View style={styles.button}>
				<ThemeText style={styles.buttonText}>Temp Button</ThemeText>
			</View>
			</TouchableHighlight>
		</View>
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  logoContainer: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
  },
  logo: {
	width: '150%',
	height: undefined,
	aspectRatio: 1,    
	resizeMode: 'contain',
	paddingTop: 200,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonGroup: {
	flex: 1,
	justifyContent: 'flex-start',
	alignItems: 'center',
	paddingTop: 0, 
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#497941',
    height: 50,
	borderRadius: 6,
	padding: 10,
  },
  buttonText: {
    fontWeight: 'bold', 
  },
});

export default HomeScreen;
