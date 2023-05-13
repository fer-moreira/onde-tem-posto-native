import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
// import * as Location from 'expo-location';

import { WebView } from 'react-native-webview';


export default function App() {
  // const [hasPermission, setHasPermission] = useState(null);

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);

  // const requestLocationPermission = async () => {
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status === 'granted') {
  //       setHasPermission('granted');
  //     } else {
  //       setHasPermission('denied');
  //     }
  //   } catch (error) {
  //     console.log('Error requesting location permission:', error);
  //   }
  // };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <WebView
        source={{
          uri: 'https://example.com'
        }}
        geolocationEnabled={true}
      />
    </SafeAreaView>
  );
}