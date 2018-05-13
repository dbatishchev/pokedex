import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';
import HomeScreen from '../components/HomeScreen';
import { getPokemonsList } from '../reducers/pokemons';

const mapStateToProps = state => ({
  pokemons: getPokemonsList(state),
  isFetching: state.pokemons.isFetching,
  canLoadMore: state.pokemons.canLoadMore,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: page => dispatch(fetchPokemons(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
