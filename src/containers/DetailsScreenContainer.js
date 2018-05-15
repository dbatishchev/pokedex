import { connect } from 'react-redux';
import {setActivePokemonAndFetchData} from '../actions';
import DetailsScreen from '../components/DetailsScreen';
import {getActivePokemon} from '../reducers/pokemons';

const mapStateToProps = state => ({
  pokemon: getActivePokemon(state),
});

const mapDispatchToProps = dispatch => ({
  setActivePokemonAndFetchData: id => dispatch(setActivePokemonAndFetchData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsScreen);
