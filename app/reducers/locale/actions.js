export function setLocale(locale) {
  return dispatch => {
    dispatch({
      type: 'SET_LOCALE',
      data: { locale }
    });
  };
}
