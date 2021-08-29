import React from 'react';
import {StoryViewProps} from '../utils/interfaceHelper';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Emoji from 'react-native-emoji';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function StoryView(props: StoryViewProps) {
  const image = props.images[props.progressIndex];

  return (
    <View style={styles.divStory}>
      <View style={styles.divStory}>
        <FastImage
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 1.4,
            borderRadius: 10,
            alignSelf: 'center',
            //width: Dimensions.get('window').width,
            //height: Dimensions.get('window').height,
          }}
          //style={props.imageStyle ? props.imageStyle : styles.imgStyle}
          source={{
            uri: image,
            priority: FastImage.priority.high,
          }}
          //resizeMode={FastImage.resizeMode.contain}
          //resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.topView}>
          <Text style={styles.topViewTitle}>In someone’s cameral roll</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => {}}>
            <FontAwesome name="close" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.commentView} onPress={() => {}}>
            <Text style={styles.commentText}>comment pic</Text>
          </TouchableOpacity>
          <View style={styles.emojisView}>
            <TouchableOpacity onPress={() => {}}>
              <Emoji name="flushed" style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Emoji name="sob" style={styles.emoji} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Emoji name="fire" style={styles.emoji} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StoryView;

const styles = StyleSheet.create({
  divStory: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  imgStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  commentView: {
    flex: 1,
    backgroundColor: '#4C4C4C',
    padding: 20,
    borderRadius: 80,
  },
  commentText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  emojisView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 30,
    marginLeft: 20,
  },
  topView: {
    position: 'absolute',
    width: '100%',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topViewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    alignItems: 'center',
    textAlign: 'right',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
  },
});
