export const environment = {
  production: true
};

export let baseURL = '';

switch (window.location.hostname) {
  case 'efa-sis-test-ng.herokuapp.com':
    baseURL = 'https://elevenfiftysis.azurewebsites.net/api';
  break;

  default:
  // TODO: Should this be localhost?
    baseURL = 'https://elevenfiftysis.azurewebsites.net/api';
  break;
}
