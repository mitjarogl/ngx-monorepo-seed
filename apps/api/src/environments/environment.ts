// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  environment: 'development',
  production: false,
  url: 'http://localhost',
  port: 3000,
  jwtSecret: 'Sup€r!S€cretH@sh',
  jwtExpirationTime: '2h',
  refreshTokenExpirationTime: '14d',
};
