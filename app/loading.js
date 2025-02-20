import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function LoadingScreen() {
  const router = useRouter();
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Set timeout before redirecting, so it stays on the screen for a few seconds
      setTimeout(() => {
        if (user) {
          router.replace('/(tabs)'); // Redirect to tabs if user is logged in
        } else {
          router.replace('/login'); // Redirect to login if user is not logged in
        }
      }, 2000); // 2 seconds delay

    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});
