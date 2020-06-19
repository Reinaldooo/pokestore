<p  align="center">
<img  height="200px"  src="./docs/js.svg">
</p>

<p  align="center">
Fashion é uma loja online de moda feminina desenvolvida durente a Aceleração ReactJS da Codenation.
</p>

#### Ferramentas em destaque no projeto:

* ReactJS
* React Router
* Redux
* Redux Persist
* Redux Saga

![Example](/docs/Example.png)

#### Detalhe das ferramentas

* `React router dom` é utilizado para viabilizar a navegação do usuário pelo app sem a necessidade de recarregar a página, sendo assim essa ferramenta garante a verdadeira experiência de uso de um SPA.
* `Redux` é utilizado para criar uma fonte única de verdade no app, ou a chamada `loja`, que armazena os dados do app e somente atravez de ações enviadas para esta loja, as informações podem ser alteradas. Isso garante imutabilidade das informações e garante um app mais estável.
* `Redux Persist` é utilizado para salvar os itens do carrinho e da wishlist na `localstorage` do navegador
* `Redux-saga` é utilizado para tratar das ações assíncronas do app

##### Rodar o projeto

* Para rodar a versão hospedada, clique [aqui](https://fashion-reinaldo.netlify.app/).

##### Para rodar na sua máquina:

* Caso ainda não possua o `npm`, a forma mais fácil de obtê-lo é instalando o [NodeJS](https://nodejs.org/en/download/)
* O `git` também é necessário, você pode baixá-lo [aqui](https://git-scm.com/)
* Faça o Download ou clone o repo usando `git clone https://github.com/Reinaldooo/fashion.git` em uma janela de terminal
* Entre na pasta com `cd fashion`
* Instale as dependências com `npm i`
* Para iniciar o servidor local, use `npm start`
* O app abrirá automaticamente no seu navegador utilizando a porta `3000`