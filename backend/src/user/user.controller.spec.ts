/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  // Mock simples do UserService
  const mockUserService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  // Teste 1: Verificar se o controller foi criado
  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });

  // Teste 2: Testar criação de usuário
  it('deve criar um usuário', async () => {
    const novoUsuario = {
      nome: 'João',
      email: 'joao@teste.com',
      senha: '123456',
    };

    const usuarioCriado = {
      id: 1,
      nome: 'João',
      email: 'joao@teste.com',
    };

    // Simula que o service retorna o usuário criado
    mockUserService.create.mockResolvedValue(usuarioCriado);

    const resultado = await controller.create(novoUsuario);

    expect(resultado).toEqual(usuarioCriado);
    expect(mockUserService.create).toHaveBeenCalledWith(novoUsuario);
  });

  // Teste 3: Testar busca de usuário por ID
  it('deve buscar um usuário por ID', async () => {
    const usuario = {
      id: 1,
      nome: 'João',
      email: 'joao@teste.com',
    };

    // Simula que o service retorna o usuário encontrado
    mockUserService.findOne.mockResolvedValue(usuario);

    const resultado = await controller.findOne(1);

    expect(resultado).toEqual(usuario);
    expect(mockUserService.findOne).toHaveBeenCalledWith(1);
  });
});
