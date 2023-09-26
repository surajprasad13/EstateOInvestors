import React, {FC} from 'react';
import {View, Image} from 'react-native';

import {} from '@react-navigation/native';

const Splash: FC = ({}) => {
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
