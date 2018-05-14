import fetch from 'cross-fetch';

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

export const fetchPokemonsSuccess = response => ({
  type: FETCH_POKEMONS_SUCCESS,
  response,
});

export const fetchPokemons = page => (dispatch) => {
  dispatch(fetchPokemonsRequest(page));

  return fetch(`http://pokeapi.co/api/v2/pokemon?limit=20&offset=${20 * (page - 1)}`).then(
    response => response.json(),
    error => dispatch(fetchPokemonsFailure(error)),
  ).then(response => dispatch(fetchPokemonsSuccess(response)));
};
