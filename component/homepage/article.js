import React, { Component } from "react";
import { View, Text, FlatList, Image } from 'react-native';

class Article extends Component {
<<<<<<< HEAD
  state = {data: []}

  componentWillMount() {
    return fetch(this.props.api_url).then(response => this.setState({data: response.data}));
=======

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentWillMount() {
    fetch(this.props.api_url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
>>>>>>> List article
  }

  render () {
    return (
      <View>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryName}>{this.props.creategoryName}</Text>
          <Text style={styles.seeMore}>ជាច្រើនទៀត</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.title}
            data={this.state.data}
            renderItem={({item}) =>
              <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text style={styles.title} numberOfLines={2} renderTruncatedFooter={() => <ReadMoreButton />}>{item.title}</Text>
              </View>
            }/>
        </View>
      </View>
    )
  }
}

const styles = {
  categoryHeader: {
    flexDirection: "row",
    paddingLeft: 6
  },

  categoryName: {
    color: "#025268",
    fontSize: 20,
    flex: 1
  },

  seeMore: {
    color: "#025268",
    fontSize: 20,
    textAlign: "right",
    flex: 1
  },

  image: {
    height: 150,
    marginBottom: 5
  },

  item: {
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    padding: 10,
    height: 230,
    backgroundColor: "white"
  },

  title: {
    width: 150
  }
};

export default Article;
