export interface AuthResponseDto {
  accessToken: string;
  user: {
    id: string | number;
    name: string;
    email: string;
  };
}