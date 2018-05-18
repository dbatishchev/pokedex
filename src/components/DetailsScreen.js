import pokemonGif from 'pokemon-gif';
import React from 'react';
import { Badge, ButtonGroup, Text } from 'react-native-elements';
import {View, Image, StyleSheet} from 'react-native';
import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

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
    paddingBottom: 20,
    paddingLeft: 10,
  },
  imageContainer: {
    position: 'absolute',
    top: 60,
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 120,
  },
  thumb: {
    width: 120,
    height: 120,
    zIndex: 10,
  },
  name: {
    fontSize: 32,
    textAlign: 'center',
    color: '#656565',
  },
  statsList: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  statContainer: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  statName: {
    flex: 1,
    fontSize: 14,
    color: '#656565',
    textAlign: 'left',
  },
  statBar: {
    flex: 2,
    height: 10,
    backgroundColor: '#999999',
    borderRadius: 5,
  },
  statBarValue: {
    width: '70%',
    height: 10,
    backgroundColor: '#000033',
    borderRadius: 5,
  },
  types: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeItem: {
    marginLeft: 2,
    marginRight: 2,
  },
  segment: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
  },
  segmentItem: {
    borderColor: '#000000',
    backgroundColor: '#000000',
  }
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
        <View style={styles.wrapper}>
          {this.props.pokemon && <Text style={styles.name}>{capitalizeFirstLetter(this.props.pokemon.name)}</Text>}
          <View style={styles.types}>
            <Badge style={styles.typeItem}>
              <Text>Grass</Text>
            </Badge>
            <Badge style={styles.typeItem}>
              <Text>Water</Text>
            </Badge>
          </View>

          <View>
            <ButtonGroup
              onPress={()=>{}}
              selectedIndex={0}
              buttons={['Stats', 'Evolutions', 'Moves']}
            />
          </View>

          {this.props.pokemon && this.props.pokemon.stats && (
            <View style={styles.statsList}>
              {this.props.pokemon.stats.map(s => (
                <View style={styles.statContainer} key={s.stat.name}>
                  <Text style={styles.statName}>{s.stat.name}</Text>
                  <View style={styles.statBar}>
                    <View style={styles.statBarValue}/>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}
