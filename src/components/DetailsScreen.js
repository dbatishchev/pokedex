import pokemonGif from 'pokemon-gif';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000033',
    paddingTop: 120,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'relative',
    overflow: 'visible',
    flex: 1,
    paddingTop: 80,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  imageContainer: {
    position: 'absolute',
    top: 60,
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  thumb: {
    width: 120,
    height: 120,
    zIndex: 10,
  },
  statContainer: {
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  statName: {
    color: '#656565',
    width: 100,
  },
  statBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000033',
  },
});

export default class DetailsScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };

  componentDidMount() {
    this.props.setActivePokemonAndFetchData(this.props.navigation.state.params.id);
  }

  render() {
    const imgURL = this.props.pokemon ? pokemonGif(this.props.pokemon.id) : null;
    console.log(this.props);

    // s.base_stat

    return (
      <View style={styles.container}>
        {imgURL && (
          <View style={styles.imageContainer}>
            <Image style={styles.thumb} resizeMode="contain" source={{uri: imgURL}}/>
          </View>
        )}
        <View  style={styles.wrapper}>
          <Text>Details Screen</Text>
          {this.props.pokemon && this.props.pokemon.stats && (
            <View>
              {this.props.pokemon.stats.map(s => (
                <View style={styles.statContainer} key={s.stat.name}>
                  <Text style={styles.statName}>{s.stat.name}
                  </Text>
                  <View style={styles.statBar}></View>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}
