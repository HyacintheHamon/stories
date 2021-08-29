import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import Faker from 'faker';
// import {StoryContainer, ProgressBar} from 'react-native-stories-view';
import StoryContainer from './src/stories/StoryContainer';
import ProgressBar from './src/stories/ProgressView';

import {
  MID_GREEN,
  BLACK,
  LIGHT_GREEN,
  BAR_ACTIVE_COLOR,
  BAR_INACTIVE_COLOR,
  TINT_GRAY,
} from './colors';

const images = [
  'https://images.pexels.com/photos/2850989/pexels-photo-2850989.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/7140205/pexels-photo-7140205.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/7243167/pexels-photo-7243167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/247206/pexels-photo-247206.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
];

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <StoryContainer
        visible={true}
        enableProgress={true}
        images={images}
        duration={60}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        barStyle={{
          barActiveColor: BAR_ACTIVE_COLOR,
          barInActiveColor: BAR_INACTIVE_COLOR,
          barWidth: 100, // always in number
          barHeight: 4, // always in number
        }}
        imageStyle={{
          width: Dimensions.get('window').width, // always in number
          height: Dimensions.get('window').height, // always in number
        }}
        onComplete={() => alert('onComplete')}
      />
    </SafeAreaView>
  );
};

export default App;
