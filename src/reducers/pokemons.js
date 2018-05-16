import each from 'lodash/each';
import assignIn from 'lodash/assignIn';
import values from 'lodash/values';
import {
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  SET_ACTIVE_POKEMON,
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_FAILURE,
  FETCH_POKEMONS_SUCCESS
} from '../actions';

export const getPokemonsList = state => values(state.pokemons.pokemons);
export const getPokemonById = (state, id) => state.pokemons.pokemonsById[id];
export const getActivePokemon = (state) => state.pokemons.pokemonsById[state.pokemons.activePokemonId];

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
        const id = (state.page - 1) * 20 + (i + 1); // todo: make 20 as constant
        col[id] = {...r, id: id};
      });

      return {
        ...state,
        page: state.page + 1,
        pokemons: assignIn({}, state.pokemons, col),
        isFetching: false,
      };

    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonsById: {...state.pokemonsById, [action.id]: action.response},
        isFetching: false,
      };

    case SET_ACTIVE_POKEMON:
      return {
        ...state,
        activePokemonId: action.id,
      };

    default:
      return state;
  }
};

export default pokemons;
