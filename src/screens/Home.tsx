import React, {useEffect, useRef, useState, FC} from 'react';
import {SafeAreaView, BackHandler} from 'react-native';

import {WebView} from 'react-native-webview';
import Splash from './Splash';

const Home: FC = ({}) => {
  const ref = useRef<WebView>(null);
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

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
        source={{uri: 'https://estateoinvester.com/login'}}
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
