import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

import SplashScreen from './logged_out/splash';
import HomeScreen from './home';

const Index = () => {
  const [user, setUser] = useState<null | object>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <HomeScreen /> : <SplashScreen />;
}

export default Index;
