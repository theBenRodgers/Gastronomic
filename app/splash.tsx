import React, {useState} from 'react';
import {ImageBackground, Image, TextInput, View, StyleSheet, TouchableHighlight, Alert, Platform} from 'react-native';
import ThemeText from '@/components/theme/ThemeText'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const SplashScreen = () => {
	const router = useRouter();
  
	const temp = async () => {
	  const uname = 'benrodgers0@gmail.com';
	  const pass = '8&9Ncdj@';
	  const userCredential = await signInWithEmailAndPassword(auth, uname, pass);
	  const user = userCredential.user;
	  router.push('/home');
	};
  
	return (
	  <SafeAreaProvider>
		<SafeAreaView style={styles.container} edges={['left', 'right']}>
		  <ImageBackground
			source={require('../assets/images/splash1-mobile.jpg')}
			resizeMode="cover"
			style={styles.image}
		  >
			<View style={styles.content}>
			  <View style={styles.logoContainer}>
				<Image
				  source={require('../assets/images/logo.png')}
				  style={styles.logo}
				/>
			  </View>
  
			  <View style={styles.buttonGroup}>
				<TouchableHighlight
				  style={styles.buttonContainer}
				  onPress={() => router.replace('/login')}
				>
				  <View style={styles.button}>
					<ThemeText style={styles.buttonText}>Returning User</ThemeText>
				  </View>
				</TouchableHighlight>
  
				<TouchableHighlight
				  style={styles.buttonContainer}
				  onPress={() => router.replace('/signup')}
				>
				  <View style={styles.button}>
					<ThemeText style={styles.buttonText}>New User</ThemeText>
				  </View>
				</TouchableHighlight>
  
				<TouchableHighlight style={styles.buttonContainer} onPress={temp}>
				  <View style={styles.button}>
					<ThemeText style={styles.buttonText}>Temp Button</ThemeText>
				  </View>
				</TouchableHighlight>
			  </View>
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
	image: {
	  flex: 1,
	  width: '100%',
	},
	content: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  paddingTop: Platform.OS === 'ios' ? 60 : 30, 
	},
	logoContainer: {
	  height: 200,
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginBottom: -30,
	},
	logo: {
	  width: 350,
	  height: 350,
	  resizeMode: 'contain',
	},
	buttonGroup: {
	  alignItems: 'center',
	  width: '100%',
	  marginBottom: 60,
	},
	buttonContainer: {
	  width: '80%',
	  marginTop: 20,
	},
	button: {
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#497941',
	  height: 40,
	},
	buttonText: {
	  fontWeight: 'bold',
	},
  });
  
  export default SplashScreen;
