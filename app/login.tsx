import React, { useState } from 'react';
import { ImageBackground, TextInput, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import ThemeText from '@/components/ui/ThemeText';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig'; 
import { useRouter } from 'expo-router';

const auth = getAuth(app);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      Alert.alert('Login Successful', `Welcome, ${user.email}`);
      router.push('/home'); // Navigate to /home (HomeScreen)
    } catch (error) {
      console.error(error.message);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={require('../assets/images/splash1-blur-mobile.jpg')} resizeMode="cover" style={styles.image}>
          <ThemeText type='title'>Login to your</ThemeText>
          <ThemeText type='title'>account</ThemeText>
          <ThemeText type='caption'>Need an account? Sign up here.</ThemeText>
          <ThemeText type='subtitle' style={styles.text}>Email</ThemeText>
          <TextInput
            style={styles.inputContainer}
            placeholder='example@email.com'
            value={email}
            onChangeText={setEmail}
          />
          <ThemeText type='subtitle' style={styles.text}>Password</ThemeText>
          <TextInput
            style={styles.inputContainer}
            secureTextEntry
            placeholder='*****'
            value={password}
            onChangeText={setPassword}
          />
          <TouchableHighlight style={styles.buttonContainer} onPress={handleLogin}>
            <View style={styles.button}>
              <ThemeText style={styles.buttonText}>Log in</ThemeText>
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
  inputContainer: {
    height: 40,
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'white',
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
  text: {
    marginTop: 20,
  }
});

export default LoginScreen;
