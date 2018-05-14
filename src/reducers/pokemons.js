import each from 'lodash/each';
import assignIn from 'lodash/assignIn';
import values from 'lodash/values';
import { FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_SUCCESS } from '../actions';

export const getPokemonsList = state => values(state.pokemons.pokemonsById);

const pokemons = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case FETCH_POKEMONS_SUCCESS:
      const col = {};
      each(action.response.results, (r, i) => {
        col[i] = r;
      });

      return {
        ...state,
        isFetching: false,
        pokemonsById: assignIn({}, state.pokemonsById, col),
      };

    default:
      return state;
  }
};

export default pokemons;
