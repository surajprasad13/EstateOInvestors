import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

import {} from '@react-navigation/native';

const Splash = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Image
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
        style={{width: 200, height: 200, marginTop: -100}}
      />
    </View>
  );
};

export default Splash;
