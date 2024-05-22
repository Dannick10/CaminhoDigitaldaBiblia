# Caminho Digital da Bíblia

O Caminho Digital da Bíblia é uma plataforma digital desenvolvida para facilitar o acesso e o estudo da Bíblia de forma moderna e intuitiva. A aplicação oferece uma experiência fluida e responsiva em diversas plataformas e dispositivos, permitindo que os usuários explorem os textos sagrados de maneira conveniente e significativa.

## Funcionalidades Principais
| Recurso             | Descrição                                                                                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Versículo do Dia    | Apresenta um versículo bíblico diferente a cada dia para inspiração e reflexão.                                                                         |
| Favoritar Versículos| Permite aos usuários favoritar versículos com um double-click nos espaços em branco da Bíblia. Podem ser acessados a qualquer momento, ordenados por data. |
| ApiContext          | HookReact para manter o livro enquanto navega no aplicativo, permitindo postagens contínuas e acesso à página de versículos favoritados.                |
| Dicionário de Palavras | Oferece definições de palavras bíblicas para ajudar na compreensão do texto, com um clique em qualquer palavra do livro.                                |
| Síntese de Voz      | Permite aos usuários ouvirem os versículos em voz alta para uma experiência de aprendizado mais imersiva, com comandos de pause, parar e velocidade acessíveis. |
| Livros Rápidos      | Facilita o acesso rápido a todos os livros da Bíblia.                                                                                                      |
| Paginação           | Permite navegar facilmente pelas páginas da Bíblia, acessando páginas anteriores e posteriores de cada livro ou todos os capítulos.                       |
| Autenticação        | Funcionalidade de criar e fazer login nas contas dos usuários, mantendo uma experiência individualizada para cada usuário.                                |
| Blog                | Na página de feed, os usuários podem se comunicar através de postagens e comentários. Também é possível visualizar todas as postagens e comentários no perfil, com a capacidade de exclusão. |

## Atualização 

- filtro com pesquisa de livros
- redefinição de senha

## Tecnologias Utilizadas

- HTML, CSS e JavaScript para a estruturação, estilo e interatividade da aplicação.
- React para o desenvolvimento da interface do usuário.
- - - apis - - -
    - bibliaapi: https://bible-api.com/
    - dicionarioaaberto: https://api.dicionario-aberto.net/index.html
    - webstorageApi: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
    - speechSynthes: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
      
- Firebase para o armazenamento, gerenciamento de dados e autenticação.
- Font Awesome para a inclusão de ícones na interface.

## Instalação e Uso

1. Clone este repositório: `git clone https://github.com/seu-usuario/caminho-digital-da-biblia.git`
2. Instale as dependências: `npm i ou npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Acesse o aplicativo em seu navegador: `http://localhost:3000`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para reportar bugs ou sugerir novas funcionalidades. Se preferir, faça um fork do projeto, implemente suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
