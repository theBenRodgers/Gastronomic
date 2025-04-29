import React, {useState} from 'react';
import {ImageBackground, TextInput, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import ThemeText from '@/components/theme/ThemeText'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const SplashScreen = () => {
  const router = useRouter();
  
  const temp = async () => {
      const uname = "benrodgers0@gmail.com";
      const pass = "8&9Ncdj@"
  
      const userCredential = await signInWithEmailAndPassword(auth, uname, pass);
      const user = userCredential.user;
      router.push('/home');
    }
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <ImageBackground source={require('../../assets/images/splash1-mobile.jpg')} resizeMode="cover" style={styles.image}>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => router.navigate('../login')}>
              <View style={styles.button}>
                <ThemeText style={styles.buttonText}>Returning User</ThemeText>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => router.push('../signup')}>
              <View style={styles.button}>
                <ThemeText style={styles.buttonText}>New User</ThemeText>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer} onPress={temp}>
              <View style={styles.button}>
                <ThemeText style={styles.buttonText}>Temp Button</ThemeText>
              </View>
            </TouchableHighlight>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
