# Your Best GIFs

## Descrição

**Your Best GIFs** é uma aplicação web desenvolvida para salvar, visualizar e interagir com GIFs. Esta aplicação foi criada para demonstrar habilidades no uso de Quasar 2, Vue 3, Composition API, Vue Router, Pinia, Axios, Tailwind CSS, e LocalStorage, consumindo a API do GIPHY.

## Tecnologias Utilizadas

- **Quasar 2**
- **Vue 3**
- **Vue Router**
- **Pinia**
- **Axios**
- **Tailwind CSS**
- **LocalStorage (via Quasar Plugin)**

## Funcionalidades

- **Home**: Exibe uma lista de GIFs em alta (trending) obtidos através da API do GIPHY com uma barra de pesquisa para buscar GIFs específicos.
- **Favoritos**: Permite que o usuário visualize e remova GIFs da sua lista de favoritos.
- **Categorias**: Lista as categorias de GIFs disponíveis e exibe os GIFs correspondentes ao clicar em uma categoria.
- **Sobre**: Página com informações sobre o desenvolvedor e o propósito do projeto.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. [Download Node.js](https://nodejs.org/).
- **Quasar CLI**: Instale o Quasar CLI globalmente.

Windows:

```bash
npm install -g @quasar/cli
```

Linux:

```bash
sudo npm install -g @quasar/cli
```

### Passos para Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/ErikaNunex/your_best_gifs.git
   cd your_best_gifs
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Execute o projeto localmente:

   ```bash
   quasar dev
   ```

4. Acesse a aplicação usando o endereço de localHost que vai aparecer no terminal.

### Scripts Disponíveis

- `quasar dev`: Executa a aplicação em modo de desenvolvimento.
- `quasar build`: Compila a aplicação para produção.
