# Case challenge Smartbreeder

## Visão geral do projeto

Projeto desenvolvido como parte do processo seletivo para a vaga de desenvolvedor front-end. A aplicação apresenta um cabeçalho com links para a página de produtos e a página de favoritos, bem como um ícone de coração que indica a quantidade de itens favoritados e também redireciona para a página de favoritos. Na página de produtos é possível ver os cartões com os nomes dos produtos, preço e opções para ver mais detalhes e favoritar o item. Os produtos podem ser filtrados através do nome, faixa de preço e categoria. Ao clicar no botão "Ver detalhes", um modal abre na tela com nome do produto, preço, descrição, ategorias associadas ao produto e uma tabela com as variações do item. Na página de favoritos os cartões favoritados aparecem.

Você pode acessar a aplicação através [deste link](https://smartbreeder-rodrigo-harder.vercel.app/).

## Instruções para execução

### **Pré-requisitos**
1. Certifique-se de ter o **Node.js**. As versões usadas neste projeto foram: Node (22.16.0) e npm (10.9.2).
   - É recomendado usar o `nvm` para gerenciar as versões do Node.js.
   - Antes de prosseguir, execute `nvm use` (e, caso necessário, `nvm install` e novamente `nvm use`).

2. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicialize o ambiente de desenvolvimento com o comando `npm run dev`

## Tecnologias aplicadas

- **[React.js](https://react.dev/):** biblioteca usada para a estrutura do projeto.
- **[Material UI](https://mui.com/material-ui/getting-started/)**: para auxiliar na construção dos componentes.

## Conceitos e metodologias aplicadas

- **[Hooks Personalizados](https://marcosviniciosneves.medium.com/react-dominando-custom-hooks-e-otimizando-a-reutiliza%C3%A7%C3%A3o-de-l%C3%B3gica-d592ce422fc1):** desenvolvimento de *hooks* personalizados para acessar as os dados JSON dos produtos e separar a lógica dos componentes.
- **[Colocation](https://kentcdodds.com/blog/colocation)**: Organização de diretórios para facilitar a navegação e manutenção do código.
- **[Context API](https://www.dtidigital.com.br/blog/context-api-como-usar-de-forma-simples-e-facil): para gerenciar o estado dos produtos favoritados e compartilhá-lo entre diversos componentes e páginas.

---

Este documento foi criado para fornecer orientações claras sobre o *case challenge* e sua execução.
