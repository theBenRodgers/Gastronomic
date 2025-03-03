import React from 'react';
import { Image, StyleSheet, Pressable, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText'
import { router } from 'expo-router';

const NutritionScreen = () => {
return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <View style={styles.topIconsContainer}>
          <Pressable onPress={() => alert('add clicked')}>
            <Image source={require('../assets/images/plus-icon.png')} style={styles.plusIcon}/>
          </Pressable>
          <Pressable onPress={() => alert('cam clicked')}>
            <Image source={require('../assets/images/cam-icon.png')} style={styles.camIcon}/>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topIconsContainer: {
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
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NutritionScreen;
