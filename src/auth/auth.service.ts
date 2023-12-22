import { Global, Injectable } from '@nestjs/common';

@Global()
@Injectable()
export class AuthService {
  register() {
    return 'register user';
  }

  login() {
    return 'login user';
  }
}
