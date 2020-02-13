import { Environment } from '@nx/core';
import { Injectable } from "@angular/core";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: true,
  apiUrl: 'http://localhost:3000/v1',
};

@Injectable()
export class EnvironmentImpl implements Environment {
  production = environment.production;
  hmr = environment.hmr;
  apiUrl = environment.apiUrl;
}
