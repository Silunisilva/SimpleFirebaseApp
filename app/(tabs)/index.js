import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../firebaseconfig"; // Ensure correct path to firebaseconfig

// Initialize auth and db using the imported firebaseApp
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds before redirecting
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Redirect href="/login" />;
}
