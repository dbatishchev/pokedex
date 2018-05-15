import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import RootStack from './src/components/RootStack';

const store = createStore(rootReducer, {
  pokemons: {
    isFetching: false,
    canLoadMore: true,
    page: 1,
    pokemonsById: {

    },
    pokemons: {

    },
  },
}, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
