import { useState, useEffect } from "react";
import { Redirect } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp }  from "../../firebaseconfig"; // Correct the import path

// Initialize auth using the imported firebaseApp
const auth = getAuth(firebaseApp);

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // User is not authenticated
      }
      
      // Simulate a delay of 3 seconds before hiding the loading spinner
      setTimeout(() => {
        setIsLoading(false); // Stop loading after the delay
      }, 3000); // 3000 ms = 3 seconds
    });

    // Cleanup function for unsubscribing
    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Redirect based on authentication state
  if (isAuthenticated === null) {
    return null; // Or handle the case where the auth state is still being determined
  }

  return <Redirect href={isAuthenticated ? "/(tabs)" : "/login"} />;
}
