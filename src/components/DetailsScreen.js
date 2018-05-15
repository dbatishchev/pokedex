import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };

  componentDidMount() {
    this.props.setActivePokemonAndFetchData(this.props.navigation.state.params.id);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
