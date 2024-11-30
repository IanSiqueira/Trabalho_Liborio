import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Simulação de usuários no banco de dados
  private users = [
    { id: 1, login: 'admin', password: '123456' },
    { id: 2, login: 'user', password: 'password' },
  ];

  async validateUser(login: string, password: string) {
    const user = this.users.find(
      (u) => u.login === login && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return { message: 'Login realizado com sucesso', userId: user.id };
  }
}
