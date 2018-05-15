import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import pokemonGif from 'pokemon-gif';

const styles = StyleSheet.create({
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
  title: {
    fontSize: 20,
    color: '#656565',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default class ListItem extends React.Component {
  render() {
    const imgURL = pokemonGif(this.props.rowData.id);

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="#dddddd"
      >
        <View>
          <View style={styles.rowContainer}>
            {imgURL && <Image style={styles.thumb} resizeMode="contain" source={{uri: imgURL}}/>}
            <Text
              style={styles.title}
              numberOfLines={1}
            >{this.props.rowData.name}</Text>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
}
