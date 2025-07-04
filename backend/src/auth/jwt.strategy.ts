import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      //Define que o token será extraído do cabeçalho 'Authorization' como um 'Bearer Token'
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //Garante que o token não seja ignorado se estiver expirado
      ignoreExpiration: false,
      //A chave secreta para verificar a assinatura do token
      secretOrKey: 'SECRET_KEY',
    });
  }


  async validate(payload: { sub: number; username: string }): Promise<User> {
    //O sub do nosso payload é o ID do usuário
    const user = await this.userService.findOne(payload.sub);

    if (!user) {
      //Se o usuário associado ao token não existir mais, a autenticação falha.
      throw new UnauthorizedException('Usuário não encontrado ou token inválido.');
    }

    //Retorna o objeto de usuário completo
    return user;
  }
}
