# Formulário de Inscrição

Este projeto é um aplicativo Ruby que permite a criação e gerenciamento de usuários através de um formulário de inscrição. Abaixo estão as instruções para instalação e uso.

## Estrutura do Projeto

- **app/controllers/users_controller.rb**: Controlador que gerencia as ações relacionadas aos usuários.
- **app/models/user.rb**: Modelo que representa os dados do usuário, incluindo validações.
- **app/views/users/**: Contém as views para criar, editar, mostrar e listar usuários.
  - **new.erb**: Formulário para criar um novo usuário.
  - **edit.erb**: Formulário para editar um usuário existente.
  - **show.erb**: Exibe detalhes de um usuário específico.
  - **index.erb**: Lista todos os usuários cadastrados.
- **config/routes.rb**: Define as rotas da aplicação.
- **config/database.yml**: Configurações de conexão com o banco de dados.
- **db/migrate/**: Arquivos de migração do banco de dados.
- **db/schema.rb**: Definição do esquema atual do banco de dados.
- **Gemfile**: Lista as gemas necessárias para o projeto.
- **Gemfile.lock**: Registra as versões exatas das gemas instaladas.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd formulario-inscricao
   ```
3. Instale as dependências:
   ```
   bundle install
   ```

## Uso

Para iniciar o servidor, execute:
```
ruby app.rb
```

Acesse o aplicativo em seu navegador em `http://localhost:4567`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Crie um fork do repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.