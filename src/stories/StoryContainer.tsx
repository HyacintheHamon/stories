import React, {
  useState,
  StyleHTMLAttributes,
  HtmlHTMLAttributes,
  CSSProperties,
  useEffect,
} from 'react';
import ProgressView from './ProgressView';
import StoryView from './StoryView';
import {StoryContainerProps} from '../utils/interfaceHelper';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import {GREEN, LIGHT_GRAY_0, RED, TINT_GRAY, GRAY} from '../utils/colors';
import ArrowNavigator from './ArrowNavigator';
import {DEFAULT_DURATION} from '../utils/constant';

const StoryContainer = (props: StoryContainerProps) => {
  const [progressIndex, setProgressIndex] = useState(0);
  const [stopProgress, setStopProgress] = useState(false);

  useEffect(() => {
    // Alert.prompt("Called")
    setProgressIndex(progressIndex);
  }, [props.enableProgress]);

  useEffect(() => {
    let listener1 = Keyboard.addListener('keyboardDidShow', onShowKeyboard);
    let listener2 = Keyboard.addListener('keyboardDidHide', onHideKeyboard);

    return () => {
      listener1.remove();
      listener2.remove();
    };
  }, []);

  function onShowKeyboard(e: any) {
    console.log(stopProgress);
    setStopProgress(true);
  }

  function onHideKeyboard(e: any) {
    console.log(stopProgress);
    setStopProgress(false);
  }

  function onArrorClick(type: string) {
    switch (type) {
      case 'left':
        onChange(progressIndex === 0 ? progressIndex : progressIndex - 1);
        break;

      case 'right':
        const size = props.imageStyle ? props.images.length - 1 : 0;
        onChange(progressIndex === size ? progressIndex : progressIndex + 1);
        break;
    }
  }

  function onChange(position: number) {
    if (props.enableProgress ? props.enableProgress : true && !stopProgress) {
      if (position < props.images.length) {
        setProgressIndex(position);
      } else {
        props.onComplete();
      }
    }
  }

  return (
    <SafeAreaView>
      {Platform.OS === 'ios' && (
        <KeyboardAvoidingView behavior="padding">
          <View>{props.visible ? getView() : <View></View>}</View>
        </KeyboardAvoidingView>
      )}

      {Platform.OS === 'android' && (
        <View>{props.visible ? getView() : <View></View>}</View>
      )}
    </SafeAreaView>
  );

  function getView() {
    return (
      <View
        style={props.containerStyle ? props.containerStyle : styles.parentView}>
        <StoryView
          images={props.images}
          duration={props.duration ? props.duration : DEFAULT_DURATION}
          progressIndex={progressIndex}
          imageStyle={props.imageStyle}
        />

        <View style={styles.customView}>
          <ArrowNavigator onArrowClick={(type: string) => onArrorClick(type)} />
        </View>

        <View style={styles.progressView}>
          <ProgressView
            enableProgress={
              props.enableProgress
                ? props.enableProgress
                : true && !stopProgress
            }
            images={props.images}
            duration={props.duration ? props.duration : DEFAULT_DURATION}
            barStyle={props.barStyle}
            progressIndex={progressIndex}
            onChange={(position: number) => onChange(position)}
          />
        </View>
      </View>
    );
  }
};

export default StoryContainer;

const styles = StyleSheet.create({
  parentView: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: TINT_GRAY,
  },
  customView: {
    position: 'absolute',
    flexDirection: 'column',
    width: Dimensions.get('window').width, // Important
    height: '85%', // To not mask the bottom view
  },
  topView: {
    position: 'absolute',
    flexDirection: 'column',
    width: Dimensions.get('window').width, // Important
    paddingTop: '3%',
  },
  progressView: {
    flex: 1,
    width: Dimensions.get('window').width, // Important
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: TINT_GRAY,
  },
});
