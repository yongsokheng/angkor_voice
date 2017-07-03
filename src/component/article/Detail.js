import React, { Component } from "react";
import { View, Text, Image, ScrollView, WebView } from "react-native";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    fetch("http://www.angkorvoice.com/api/v1/articles/" + "10")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({article: responseJson.data});
      })
      .catch((error) => {
        console.error(error);
      }
    );
  }

  render () {
    return (
      <ScrollView>
        <Text>
          {this.state.article.title}
        </Text>
        <Text>{this.state.article.published_at}</Text>
        <Text>{this.state.article.category_name}</Text>
        <Image source={{uri: this.state.article.image_url}} />
      </ScrollView>
    )
  }
}
