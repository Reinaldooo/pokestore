<p  align="center">
<img  height="200px"  src="./docs/js.svg">
</p>

<p  align="center">
Pokestore é uma loja online de cartas Pokémon.
</p>

#### Ferramentas em destaque no projeto:

* ```Redux``` é utilizado para criar uma fonte única de verdade no app, ou a chamada `loja`, que armazena os dados do app e somente atravez de ações enviadas para esta loja, as informações podem ser alteradas. Isso garante imutabilidade das informações e garante um app mais estável.
* `Redux Persist` é utilizado para salvar alguns items da loja na `localstorage` do navegador, garantindo assim que os dados estejam disponíveis mesmo se o usuário recarregar a página, ou fechar o navegador.
* `Redux-saga` é utilizado para tratar e enviar as ações assíncronas enviadas à `loja`

![Example](/docs/Example.png)

##### Rodar o projeto

* Para rodar a versão hospedada, clique [aqui](https://pokestore-reinaldo.netlify.app/).

##### Para rodar na sua máquina:

* Caso ainda não possua o `npm`, a forma mais fácil de obtê-lo é instalando o [NodeJS](https://nodejs.org/en/download/)
* O `git` também é necessário, você pode baixá-lo [aqui](https://git-scm.com/)
* Faça o Download ou clone o repo usando `git clone https://github.com/Reinaldooo/pokestore.git` em uma janela de terminal
* Entre na pasta com `cd pokestore`
* Instale as dependências com `npm i`
* Para iniciar o servidor local, use `npm start`
* O app abrirá automaticamente no seu navegador utilizando a porta `3000`
