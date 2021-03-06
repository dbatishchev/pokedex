import React from 'react';
import {View, Text, Button, RefreshControl} from 'react-native';
import { ListView } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import ListItem from './ListItem';

export default class HomeScreen extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: this.rowHasChanged.bind(this),
      })
    };

    // Update the data store with initial data.
    this.state.dataSource = this.getUpdatedDataSource(props);
  }

  componentDidMount() {
    this.props.fetchPokemons(this.props.page);
  }

  loadMore = () => {
    if (this.props.isFetching) {
      return;
    }

    this.props.fetchPokemons(this.props.page);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.getUpdatedDataSource(nextProps),
    });
  }

  getUpdatedDataSource(props) {
    let ids = props.pokemons.map((obj, index) => index);

    return this.state.dataSource.cloneWithRows(props.pokemons, ids);
  }

  /**
   * @private
   * @param r1
   * @param r2
   * @return {boolean}
   * @private
   */
  rowHasChanged(r1, r2) {
    return JSON.stringify(r1) !== JSON.stringify(r2);
  }

  /**
   * @private
   * @return {*}
   */
  renderRefreshControl() {
    // Reload all data
    return (
      <RefreshControl
        refreshing={this.props.isFetching}
        onRefresh={() => {}}
      />
    );
  }

  rowPressed(beerId) {
    this.props.navigation.navigate('Details', {id: beerId});
  }

  render() {
    return (
      <View>
        <ListView
          refreshControl={this.renderRefreshControl()}
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          canLoadMore={this.props.canLoadMore}
          onLoadMoreAsync={this.loadMore}
          dataSource={this.state.dataSource}
          renderRow={rowData => <ListItem rowData={rowData} onPress={() => this.rowPressed(rowData.id)} />}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
