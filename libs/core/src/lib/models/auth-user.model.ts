export interface AuthUser {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  accessToken: string;
  refreshToken?: string;
}
