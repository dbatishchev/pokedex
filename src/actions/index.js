import fetch from 'cross-fetch';

export const SET_ACTIVE_POKEMON = 'SET_ACTIVE_POKEMON';

export const setActivePokemon = id => ({
  type: SET_ACTIVE_POKEMON,
  id,
});

export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';

export const fetchPokemonsRequest = page => ({
  type: FETCH_POKEMONS_REQUEST,
  page,
});

export const fetchPokemonsFailure = error => ({
  type: FETCH_POKEMONS_FAILURE,
  error,
});

export const fetchPokemonsSuccess = (response, page) => ({
  type: FETCH_POKEMONS_SUCCESS,
  response,
  page,
});

export const fetchPokemons = page => (dispatch) => {
  dispatch(fetchPokemonsRequest(page));

  return fetch(`http://pokeapi.co/api/v2/pokemon?limit=20&offset=${20 * (page - 1)}`).then(
    response => response.json(),
    error => dispatch(fetchPokemonsFailure(error)),
  ).then(response => dispatch(fetchPokemonsSuccess(response, page)));
};

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';

export const fetchPokemonRequest = id => ({
  type: FETCH_POKEMON_REQUEST,
  id,
});

export const fetchPokemonFailure = error => ({
  type: FETCH_POKEMON_FAILURE,
  error,
});

export const fetchPokemonSuccess = (response, id) => ({
  type: FETCH_POKEMON_SUCCESS,
  response,
  id,
});

export const fetchPokemon = id => (dispatch) => {
  dispatch(fetchPokemonRequest(id));

  return fetch(`http://pokeapi.co/api/v2/pokemon/${id}`).then(
    response => response.json(),
    error => dispatch(fetchPokemonFailure(error)),
  ).then(response => dispatch(fetchPokemonSuccess(response, id)));
};

export const setActivePokemonAndFetchData = id => (dispatch) => {
  dispatch(setActivePokemon(id));

  return fetchPokemon(id)(dispatch);
};
