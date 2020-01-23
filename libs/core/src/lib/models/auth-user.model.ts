export interface AuthUser {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  role: any;
  image: string;
  accessToken: string;
  refreshToken?: string;
}
