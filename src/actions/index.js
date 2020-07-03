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

export const logoutRequest = (obj) => ({
  type: 'LOGOUT_REQUEST',
  payload: obj,
});

export const registerRequest = (form) => ({
  type: 'REGISTER_REQUEST',
  payload: form,
});

export const getVideoSource = (id) => ({
  type: 'GET_VIDEO_SOURCE',
  payload: id,
});

export const getVideoSearch = (payload) => ({
  type: 'GET_VIDEO_SEARCH',
  payload,
});

