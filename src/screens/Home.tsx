import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  BackHandler,
} from 'react-native';

import {WebView} from 'react-native-webview';
import Splash from './Splash';

const Home = () => {
  const ref = useRef(null);
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
  }, []);

  const onAndroidBackPress = () => {
    if (ref.current) {
      ref.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        ref={ref}
        source={{uri: 'https://9live.news/'}}
        style={{flex: 1}}
        startInLoadingState={true}
        decelerationRate="fast"
        renderLoading={() => <Splash />}
        onNavigationStateChange={navState => {
          setBack(navState.canGoBack);
        }}
        geolocationEnabled={true}
      />
    </SafeAreaView>
  );
};

export default Home;
