import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Dimensions, StatusBar } from 'react-native';

import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';


export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setHasPermission('granted');
      } else {
        setHasPermission('denied');
      }
    } catch (error) {
      console.log('Error requesting location permission:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar 
        barStyle="default" 
        backgroundColor="transparent" 
        translucent={true}
      />
      <WebView
        geolocationEnabled={true}
        source={{
          uri: 'https://onde-tem-posto.vercel.app'
        }}
        style={{
          width: windowWidth,
          height: windowHeight
        }}
      />
    </SafeAreaView>
  );
}