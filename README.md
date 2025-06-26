# 📚 Dream Audiovisual

O Dream Audiovisual é uma aplicação web de gerenciamento que permite disponibilizar fotos de ensaios para clientes de forma profissional, em uma plataforma própria. O sistema oferece maior facilidade na organização de fotos, gerenciamento de clientes e montagem de portfólio para fotógrafos. Ele armazena dados de clientes e organiza as fotos em álbuns, facilitando a seleção e disponibilização dos resultados. Com isso, o fotógrafo conta com um ambiente mais eficiente, enquanto os clientes têm uma experiência personalizada e moderna.

## 🎯 Motivação

Sou fotógrafo freelancer e atuo com audiovisual como fonte de renda extra. Desejo uma solução profissional para disponibilizar as fotos aos clientes e manter meu portfólio em um único lugar. Atualmente, dependo de ferramentas de terceiros, que além de serem custosas, não oferecem o nível de personalização e profissionalismo desejado — além de exigirem sincronização manual dos serviços e do portfólio.

## 💻 Ferramentas e Instalação

- **TypeScript** versão `5.8.3`
- **NPM** versão `11.4.2`
- **MySql** versão `9.3.0`
- **CSS3**
- **HTML5**

### 🖼️ Front-end

Para o desenvolvimento do front-end, foi escolhido o framework **React** na versão `19.1.0` com **Vite** na versão `6.3.5`, utilizando a linguagem **TypeScript** para garantir melhor controle de tipos e minimizar erros em tempo de desenvolvimento.

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

### 🛠️ Back-end

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

## 🧑‍💻 Regras de código adotadas

- **Padrão de notação adotado:**
    - `camelCase` para métodos e funções
    - `snake_case` para variáveis e atributos
    - `PascalCase` para classes
    - `UPPER_SNAKE_CASE` para constantes

    Exemplo:

    ```javascript
    function criarEnsaio() {...}
    let nome_cliente = 'João'
    class EnsaioFotografico {...}
    const MAX_FOTOS = 100
    ```

- **Documentação e comentários no código:** Comentários devem ser usados para explicar trechos complexos ou decisões de design. O código deve ser escrito de forma que seja o mais autoexplicativo possível, facilitando a reutilização e entendimento por outros programadores.

- **Princípio da Responsabilidade Única (SRP - SOLID):** Cada classe ou função deve ter **apenas uma única responsabilidade**, evitando acúmulo de lógica não relacionada no mesmo local.

- **Modularização do código:** O sistema será dividido em **módulos organizados por domínio**, promovendo escalabilidade, organização e reutilização de componentes.

- **Evitar duplicação de código (DRY - Don’t Repeat Yourself):** Trechos de código repetidos deverão ser refatorados para funções reutilizáveis, evitando redundância.

- **Nomes significativos (Clean Code):** As funções, variáveis e classes devem ter nomes descritivos, que expressem claramente sua intenção.

    Exemplo:

    ```
    ✅ criarAlbumParaCliente()
    ❌ processarDados1()
    ```

## 🌱 Regras e Padrões de Git adotadas

- **Commits devem ser realizados em português do Brasil**.

- **Aplicar o princípio de responsabilidade única em cada commit:** Cada commit deve representar uma única alteração ou funcionalidade, evitando mudanças misturadas no histórico.

- **A branch `main` deve conter o código mais estável**, pronto para deploy ou produção.

- **A branch `develop` deve conter todo o código mais recente**, já testado e revisado pelo PO.

- **Criação de branches de trabalho:** Para cada nova funcionalidade ou correção, deve-se criar uma nova branch. O nome da branch deve refletir claramente o que está sendo implementado ou alterado.

- **Processo de Pull Request:** Após concluir as alterações em uma `branch de trabalho`, o PO deverá abrir um Pull Request direcionado à branch `develop`, garantindo revisão e controle.

- **Integração com a `main`:** Ao final de cada sprint, a `develop` será mergeada na `main`, desde que a estabilidade do código esteja garantida.