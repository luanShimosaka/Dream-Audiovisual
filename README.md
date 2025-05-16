# Dream Audiovisual

O Dream Audiovisual é uma aplicação web de gerenciamento que permite disponibilizar fotos de ensaios para clientes de forma profissional, em uma plataforma própria. O sistema oferece maior facilidade na organização de fotos, gerenciamento de clientes e montagem de portfólio para fotógrafos. Ele armazena dados de clientes e organiza as fotos em álbuns, facilitando a seleção e disponibilização dos resultados. Com isso, o fotógrafo conta com um ambiente mais eficiente, enquanto os clientes têm uma experiência personalizada e moderna.

## Motivação

Sou fotógrafo freelancer e atuo com audiovisual como fonte de renda extra. Desejo uma solução profissional para disponibilizar as fotos aos clientes e manter meu portfólio em um único lugar. Atualmente, dependo de ferramentas de terceiros, que além de serem custosas, não oferecem o nível de personalização e profissionalismo desejado — além de exigirem sincronização manual dos serviços e do portfólio.

## Ferramentas e Instalação

### Front-end

Para o desenvolvimento do front-end, foi escolhido o framework **React** com **Vite**, utilizando a linguagem **TypeScript** para garantir melhor controle de tipos e minimizar erros em tempo de desenvolvimento.

A instalação pode ser realizada com qualquer gerenciador de pacotes. Abaixo estão os comandos para os mais comuns:

#### **NPM**

```bash
npm create vite@latest nome-do-projeto -- --template react-ts
```

#### **Yarn**

```bash
yarn create vite nome-do-projeto --template react-ts
```

Você pode acessar a [documentação oficial do Vite](https://vite.dev/guide/) — também disponível em [português](https://pt.vite.dev/guide/).

---

### Back-end

Para o back-end, optamos pela utilização do **NestJS** com **TypeScript** para a construção da API. O banco de dados escolhido foi o **MySQL**, por ser uma solução relacional robusta e amplamente utilizada.

Abaixo estão os comandos para instalação do Nest CLI e criação do projeto:

#### **NPM**

```bash
npm install -g @nestjs/cli
nest new nome-do-projeto --strict
```

#### **Yarn**

> A instalação global do Nest CLI via Yarn não é recomendada pela própria documentação oficial. Recomenda-se o uso do NPM.

Acesse a [documentação oficial do NestJS](https://docs.nestjs.com/) para mais detalhes.

---

## Ambiente de Desenvolvimento

Durante o desenvolvimento, utilizaremos o [**Visual Studio Code**](https://code.visualstudio.com/) como editor de código principal, além do [**NPM**](https://www.npmjs.com/) como gerenciador de pacotes para instalação das dependências necessárias.