export const setFavorite = (items) => ({
  type: 'SET_FAVORITE',
  payload: items,
});

export const deleteFavorite = (items) => ({
  type: 'DELETE_FAVORITE',
  payload: items,
});

export const loginRequest = (form) => ({
  type: 'LOGIN_REQUEST',
  payload: form,
});
