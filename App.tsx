import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase/app'
import "firebase/firestore";

// Initialize Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "your apiKey",
      authDomain: "your authDomain",
      databaseURL: "your databaseURL",
      projectId: "your projectId",
      storageBucket: "your storageBucket",
      messagingSenderId: "your messagingSenderId",
      appId: "your appId",
      measurementId: "your measurementId",
    };
    firebase.initializeApp(firebaseConfig);
}

export default function App() {
    useEffect(() => {
        getFireBaseItems();
    }, []);

    const getFireBaseItems = async () => {
        const snapshot = await firebase.firestore().collection("shops").get();
        const shops = snapshot.docs.map(doc => doc.data());
        console.log(shops)
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
