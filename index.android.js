import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView
} from 'react-native';

import Article from "./component/homepage/article";

export default class AngkorVoice extends Component {
  render() {
    return (
      <ScrollView style={styles.wraper}>
        <Article creategoryName="ទំព័រដើម" api_url="https://rallycoding.herokuapp.com/api/music_albums.json" />
        <Article creategoryName="ទំព័រដើម" api_url="https://rallycoding.herokuapp.com/api/music_albums" />
        <Article creategoryName="ទំព័រដើម" api_url="https://rallycoding.herokuapp.com/api/music_albums" />
      </ScrollView>
    );
  }
}

const styles = {
  wraper: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 5
  }
};

AppRegistry.registerComponent('AngkorVoice', () => AngkorVoice);
