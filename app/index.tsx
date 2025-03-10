import React, {useState} from 'react';
import {ImageBackground, TextInput, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import ThemeText from '@/components/ui/ThemeText'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <ImageBackground source={require('../assets/images/splash1-mobile.jpg')} resizeMode="cover" style={styles.image}>
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
          </ImageBackground>
        </SafeAreaView>
      </SafeAreaProvider>
    );
};

export default HomeScreen;

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