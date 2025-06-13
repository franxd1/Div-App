# 🧾 Divisor de contas App

Aplicativo simples feito com **React Native (JavaScript)** para dividir o valor de uma conta entre várias pessoas, com opção de adicionar gorjeta.

## 📱 Preview

O Divisordecontas possui uma interface amigável e direta.  
Na tela principal, o usuário pode:

- Inserir o **valor total da conta**
- Informar o **número de pessoas**
- (Opcionalmente) adicionar o **valor da gorjeta**
- E, com um clique, ver **quanto cada pessoa deve pagar**

![Demonstração do App](./assets/divapp.gif)


## 🧠 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Expo](https://expo.dev/)

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/franxd1/Div-App.git
cd divapp
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Inicie o projeto com Expo

```bash
npm start
```

Ou use os comandos abaixo, dependendo da plataforma desejada:

```bash
npm run android  # Executa no Android
npm run ios      # Executa no iOS
npm run web      # Executa no navegador
```

## 📂 Estrutura de arquivos

```
divisordecontas-app
 ├── 📄 App.js                    # Componente principal com layout e chamada do divisor
 ├── 📁 components
 │   └── 📄 BillSplitter.js       # Lógica e interface do cálculo da divisão da conta
 ├── 📄 package.json              # Configurações do projeto e dependências
```

## 📱 Funcionalidades

- Inserção do valor total da conta
- Definição do número de pessoas
- Inclusão de valor de gorjeta (opcional)
- Cálculo automático do valor por pessoa
- Exibição do resultado de forma clara

## ✅ Requisitos

- Node.js e npm instalados
- Expo CLI global:

```bash
npm install -g expo-cli
```

- Emulador Android, Xcode ou dispositivo físico com Expo Go

## 📄 Licença

Este projeto é livre para uso e modificação. Sinta-se à vontade para contribuir!
