import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {
  getHello() {
    return 'Hello from Auth!';
  }

  login() {
    return `Login successful for user with password.`;
  }

  resetPassword() {
    return `Password reset successful for user.`;
  }
}
