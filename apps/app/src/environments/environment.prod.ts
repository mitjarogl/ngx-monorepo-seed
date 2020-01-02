import { Environment } from '@nx/core';

export const environment = {
  production: true,
  hmr: false,
  apiUrl: '',
};

export class EnvironmentImpl implements Environment {
  production = environment.production;
  hmr = environment.hmr;
  apiUrl = environment.apiUrl;
}
