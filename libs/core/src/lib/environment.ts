export abstract class Environment {
  abstract readonly production: boolean;
  abstract readonly hmr: boolean;
  abstract readonly apiUrl: string;
}
