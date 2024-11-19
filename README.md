## 🛠️ Componente de Botão Reutilizável em React
Este projeto tem como objetivo criar um componente de botão reutilizável utilizando React, seguindo boas práticas de desenvolvimento, design modular e acessibilidade. O botão pode ser personalizado para se adequar a diferentes estilos e funcionalidades, oferecendo uma base sólida para uso em projetos futuros.

## 📚 O que é React?
React é uma biblioteca JavaScript usada para criar interfaces de usuário (UI) interativas e eficientes. Desenvolvida pelo Facebook, ela permite que os desenvolvedores criem componentes reutilizáveis e gerenciem o estado da aplicação de forma eficiente. React utiliza um conceito chamado Virtual DOM para atualizar apenas as partes da interface que mudam, melhorando o desempenho e a experiência do usuário.

Principais características do React:
- **Componentização:** A interface é dividida em pequenos blocos independentes chamados componentes.
- **Reatividade:** React atualiza automaticamente a UI quando os dados (estado ou props) mudam.
- **Baseado em JavaScript:** O React usa JavaScript e JSX, uma extensão de sintaxe que combina HTML e JS.



## 📋 O que é um componente?
Um componente é um bloco de construção no React. É uma função ou classe que retorna um pedaço da interface (HTML) que será exibido no navegador. Componentes permitem dividir a interface em partes reutilizáveis e independentes.

### Componente simples 

~~~javascript
import React from "react";

const MeuComponente = () => {
  return <h1>Olá, mundo!</h1>;
};

export default MeuComponente;

~~~

Melhorando o README com explicações sobre React, componentes e props:
🛠️ Componente de Botão Reutilizável em React
Este projeto tem como objetivo criar um componente de botão reutilizável utilizando React, seguindo boas práticas de desenvolvimento, design modular e acessibilidade. O botão pode ser personalizado para se adequar a diferentes estilos e funcionalidades, oferecendo uma base sólida para uso em projetos futuros.

📚 O que é React?
React é uma biblioteca JavaScript usada para criar interfaces de usuário (UI) interativas e eficientes. Desenvolvida pelo Facebook, ela permite que os desenvolvedores criem componentes reutilizáveis e gerenciem o estado da aplicação de forma eficiente. React utiliza um conceito chamado Virtual DOM para atualizar apenas as partes da interface que mudam, melhorando o desempenho e a experiência do usuário.

Principais características do React:
Componentização: A interface é dividida em pequenos blocos independentes chamados componentes.
Reatividade: React atualiza automaticamente a UI quando os dados (estado ou props) mudam.
Baseado em JavaScript: O React usa JavaScript e JSX, uma extensão de sintaxe que combina HTML e JS.
📋 O que é um componente?
Um componente é um bloco de construção no React. É uma função ou classe que retorna um pedaço da interface (HTML) que será exibido no navegador. Componentes permitem dividir a interface em partes reutilizáveis e independentes.

Exemplos:
Componente Simples:
jsx
Copiar código
import React from "react";

const MeuComponente = () => {
  return <h1>Olá, mundo!</h1>;
};

export default MeuComponente;
Componente com Props:
jsx
Copiar código
import React from "react";

const Saudacao = ({ nome }) => {
  return <h1>Olá, {nome}!</h1>;
};

export default Saudacao;
No exemplo acima, o componente Saudacao recebe uma prop chamada nome e a exibe no HTML.

## 🤔 O que são Props?
Props (abreviação de "properties") são argumentos passados para os componentes. Elas permitem que um componente seja configurado ou receba dados externos, tornando-o mais reutilizável e dinâmico.

Características das Props:
- Imutáveis: Uma vez recebidas, elas não podem ser alteradas pelo próprio componente.
- Personalizáveis: Cada instância do componente pode receber props diferentes.
- Flexibilidade: Permitem passar dados, funções, ou até mesmo outros componentes.


### Componente com props
~~~javascript
import React from "react";

const Saudacao = ({ nome }) => {
  return <h1>Olá, {nome}!</h1>;
};

export default Saudacao;
~~~

No exemplo acima, o componente Saudacao recebe uma prop chamada nome e a exibe no HTML.

## 🧩 Onde os componentes precisam ser chamados?
Para exibir os componentes no navegador, eles precisam ser renderizados no DOM (Document Object Model). No React, usamos o pacote ReactDOM para "injetar" os componentes no DOM.

~~~javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importando o componente principal
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Renderizando o componente principal na div com id "root"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

~~~

### O que acontece aqui?
- **ReactDOM.createRoot:** Cria uma raiz React vinculada a um elemento no DOM (neste caso, a div com id root).
- **root.render:** Renderiza o componente principal <App />, que geralmente contém os outros componentes.
- **React.StrictMode:** Ajuda a identificar problemas potenciais no código durante o desenvolvimento.

~~~javascript
src/
├── index.js          // Entrada principal do React
├── App.js            // Componente principal que chama outros componentes
├── components/       // Pasta para componentes reutilizáveis
│   └── Button/       // Componente do botão
│       ├── Button.js
│       ├── Button.css
├── index.css         // Estilos globais

~~~
## 📋 Funcionalidades do Botão

- Texto do botão.
- Cor de fundo e texto.
- Estilos adicionais (bordas, ícones, etc.).
- Estados do Botão:
- Chamadas de eventos onClick configuráveis.


## ✅ Critérios de Aceitação
Para garantir que o componente de botão seja funcional, reutilizável e fácil de manter, os seguintes critérios devem ser atendidos:

- Renderização Dinâmica

O botão deve aceitar props que permitam personalizar o texto, estilo e comportamento (por exemplo, text, onClick, styleType, disabled).

Deve ser possível renderizar o botão com diferentes estilos baseados na prop styleType (ex.: primary, secondary, danger).

- Interatividade

O botão deve executar uma função passada via prop onClick quando for clicado.

Deve ser desabilitado quando a prop disabled for definida como true.


- Estilos

Deve permitir personalização de cores e bordas através de classes CSS específicas.

Estilos adicionais, como estados de hover e focus, devem ser implementados no arquivo CSS.

## 📦 Estrutura do Projeto:

~~~javascript
src/
├── components/
│   └── Button/
│       ├── Button.jsx
│       ├── Button.css
├── index.js
~~~

## 🧠 Sobre Dumb Components
No React, dumb components (ou componentes de apresentação) são componentes simples que:

- Responsabilidade única: São responsáveis apenas por exibir informações baseadas nas props que recebem.
- 
- Sem lógica complexa: Não possuem estado próprio ou lógica de negócios.

- Reutilizáveis: São altamente reutilizáveis em diferentes contextos porque não estão atrelados a dados ou estados específicos.
  
- Foco na apresentação: Geralmente são usados para renderizar elementos visuais e deixar a lógica para os smart components.


## 🚀 Hacker Edition: Aprimorando o Projeto da Loja Virtual
Se você está pronto para ir além e aprender mais sobre desenvolvimento web, aqui estão algumas sugestões e recursos para aprimorar o seu projeto de loja virtual. Essas adições não apenas melhorarão a experiência do usuário, mas também darão a você uma compreensão mais profunda do desenvolvimento JavaScript e do front-end.

1. Testes Unitários com Jest

- Adicione testes para suas funções usando Jest.

- Verifique se as funções de busca e manipulação de produtos funcionam corretamente.
- Use npm install --save-dev jest para instalar.
  
2. Design Responsivo

 Utilize CSS Flexbox ou Grid para garantir que os produtos se ajustem bem em diferentes tamanhos de tela.
   
- Adicione media queries para otimizar a exibição em dispositivos móveis.

3. Documentação
- Crie uma documentação clara para seu projeto, explicando como configurá-lo, executá-lo e como funcionam suas principais funcionalidades.
  
## 🔗 Links Extras
Documentação Oficial do React
[Texto do Link](URL)


Introdução a Componentes React
[Texto do Link](URL)

Learn React Components
[Texto do Link](URL)

Guia de Boas Práticas com Props
[Texto do Link](URL)

Acessibilidade no React
[Texto do Link](URL)


Dumb vs Smart Components
[Texto do Link](URL)


CSS Responsivo
[Texto do Link](URL)



## 💻Començando a desenvolver: 

### 1. Fork do Repositório
   - Um "fork" é uma cópia de um repositório que fica no seu perfil GitHub. Você faz um fork para ter uma versão própria do projeto na qual você pode trabalhar. Isso permite que você modifique e experimente o código sem afetar o repositório original.
 
#### Como forkar?

[Como fazer um fork](https://github.com/campinho-digital/Como-fazer-um-Fork)  


### 2. Após o Fork

- Clonar o Repositório Forkado
  
Abra o terminal ou o Git Bash em seu computador.


### Clone o repositório forkado para o seu computador com o seguinte comando:

~~~javascript
git clone seu_repositorio
~~~


### Navegue até a pasta do repositório clonado:

~~~javascript
cd seu_repositorio
~~~

#### ⚠️ Atenção 

Quando você clona um repositório, o Git cria uma nova pasta no seu sistema contendo todos os arquivos e a estrutura do projeto. Para trabalhar com esse projeto (editar arquivos, rodar scripts, instalar dependências, etc.), você precisa estar dentro dessa pasta. Se não navegar para essa pasta, você estará em uma localização diferente no seu sistema e os comandos que tentar rodar (como npm install ou git) não funcionarão corretamente, pois eles precisam ser executados no diretório correto.


### 3. Instalar Dependências
Se o projeto utiliza npm, você deve instalar as dependências:

~~~javascript
npm install

~~~

#### ⚠️ Atenção 
Se o projeto utiliza o Node.js e tem um arquivo `package.json`, você precisa rodar `npm install` para instalar todas as bibliotecas e dependências que o projeto necessita para funcionar. Sem isso, o projeto pode não rodar corretamente.


### 4. Rodando o projeto

- Vá até a pasta do projeto no terminal ou prompt de comando.
- Digite o seguinte comando no terminal
  
~~~javascript
npm start
~~~

- Isso irá rodar o comando `"start": "lite-server"` que está configurado no package.json. O `lite-server` vai automaticamente:

- Criar um servidor local.
- Abrir o seu navegador padrão.
- Carregar o arquivo index.html do seu projeto.


### 5. Versionamento com Git
Depois de implementada a solução e adicionar comentários ao código, você precisa versionar essas alterações usando o Git.

Quando você estiver trabalhando em dupla, é fundamental usar o Git para controlar as versões do projeto de forma organizada e eficiente. Isso ajuda a evitar conflitos de código e facilita a colaboração. 

### 6. Enviar o Repositório para o Moodle
Essa é uma atividade avaliativa, você deve enviar o link do repositório com as questões respondidas para o Moodle, para que o instrutor possa revisar o seu trabalho. O link do GitHub facilita o acesso ao código e também permite que o instrutor veja todo o histórico de commits (versões anteriores do código), o que é útil para acompanhar seu progresso.



## **Boa sorte e bom código!** 🚀📘

