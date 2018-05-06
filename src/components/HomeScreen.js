import React from 'react';
import { View, Text, Button } from 'react-native';
import { ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

export default class HomeScreen extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: this._rowHasChanged.bind(this),
      }),
    };

    // Update the data store with initial data.
    this.state.dataSource = this.getUpdatedDataStore(props);
  }

  componentDidMount() {
    this.props.fetchPokemons(1);
  }

  componentWillReceiveProps(nextProps) {
    // Trigger a re-render when receiving new props (when redux has more data).
    this.setState({
      dataSource: this.getUpdatedDataSource(nextProps),
    });
  }

  getUpdatedDataSource(props) {
    // See the ListView.DataSource documentation for more information on
    // how to properly structure your data depending on your use case.
    let rows = props.pokemons;

    let ids = rows.map((obj, index) => index);

    return this.state.dataSource.cloneWithRows(rows, ids);
  }

  _rowHasChanged(r1, r2) {
    // You might want to use a different comparison mechanism for performance.
    return JSON.stringify(r1) !== JSON.stringify(r2);
  }

  _renderRefreshControl() {
    // Reload all data
    return (
      <RefreshControl
        refreshing={this.props.listData.isFetching}
        onRefresh={() => {}}
      />
    );
  }

  render() {
    console.log(this.props.pokemons);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <ListView
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          dataSource={this.state.dataSource}
          renderRow={...}
          refreshControl={this._renderRefreshControl()}
          canLoadMore={false}
          onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
        />
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
