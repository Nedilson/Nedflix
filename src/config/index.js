const URL_BACKEND = window.location.host.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://nedflix.herokuapp.com';

export default {
  URL_BACKEND,
};
