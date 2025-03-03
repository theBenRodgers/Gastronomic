import React, {useState} from 'react';
import {ImageBackground, TextInput, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import ThemeText from '@/components/ui/ThemeText'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';



const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('')
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const onPress = () => {
    alert(`${name} ${email} ${dob} ${password} ${confPassword}`);
  }

    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['left', 'right']}>
          <ImageBackground source={require('../assets/images/splash1-blur-mobile.jpg')} resizeMode="cover" style={styles.image}>
            <ThemeText type='title'>Create new</ThemeText>
            <ThemeText type='title'>account</ThemeText>
            <ThemeText type='caption'>Already Registered? Log in here.</ThemeText>
            <ThemeText type='subtitle' style={styles.text}>Name</ThemeText>
            <TextInput
              style={styles.inputContainer}
              placeholder='John Doe'
              value={name}
              onChangeText={setName}
            />
            <ThemeText type='subtitle' style={styles.text}>Email</ThemeText>
            <TextInput
              style={styles.inputContainer}
              placeholder='example@email.com'
              value={email}
              onChangeText={setEmail}
            />
            <ThemeText type='subtitle' style={styles.text}>Date of Birth</ThemeText>
            <TextInput
              style={styles.inputContainer}
              placeholder='MM/DD/YYY'
              value={dob}
              onChangeText={setDob}
            />
            <ThemeText type='subtitle' style={styles.text}>Password</ThemeText>
            <TextInput
              style={styles.inputContainer}
              placeholder='*****'
              value={password}
              onChangeText={setPassword}
            />
            <ThemeText type='subtitle' style={styles.text}>Confirm Password</ThemeText>
            <TextInput
              style={styles.inputContainer}
              placeholder='*****'
              value={confPassword}
              onChangeText={setConfPassword}
            />
            <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
              <View style={styles.button}>
                <ThemeText style={styles.buttonText}>Sign up</ThemeText>
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
  },
});

export default SignUpScreen;