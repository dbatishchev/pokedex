import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const styles = StyleSheet.create({
  thumb: {
    width: 60,
    height: 80,
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
    console.log('??????', this.props);
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress}
        underlayColor="#dddddd"
      >
        <View>
          {/*<View style={styles.rowContainer}>*/}
            {/*/!*<Image style={styles.thumb} resizeMode="contain" source={{uri: this.props.rowData.image_url}}/>*!/*/}
            {/*<View style={styles.textContainer}>*/}
              {/**/}
            {/*</View>*/}
          {/*</View>*/}
          {/*<View style={styles.separator}/>*/}
          <Text
            style={styles.title}
            numberOfLines={1}
          >{this.props.rowData.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
