# 📱 Testes em Aplicações React Native (Expo)

Este projeto utiliza duas ferramentas principais para garantir a qualidade do código:

- ✅ **Jest**: testes unitários.
- 🧪 **Maestro**: testes E2E (end-to-end, ou ponta-a-ponta).

---

## 🔧 Configuração dos Testes Unitários com Jest

### 1. Instalação

```bash
yarn add --dev jest jest-expo @testing-library/react-native
# ou com npm:
# npm install --save-dev jest jest-expo @testing-library/react-native
```

### 2. Configuração no `package.json`

```json
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
  ]
}
```

### 3. Usando Alias `@/`

No `tsconfig.json`:

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": {
    "@/*": ["./*"]
  }
}
```

No `jest.config.js` (ou dentro do `"jest"`):

```js
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  }
}
```

### 4. Rodar os testes

```bash
npx jest
# ou para rodar teste específico:
npx jest __tests__/Main.test.tsx
```

---

## 🤖 Testes End-to-End com Maestro

### 1. Instale o Java (Ubuntu)

```bash
sudo apt update
sudo apt install openjdk-21-jdk
```

Verifique:

```bash
java -version
```

### 2. Configure o JAVA_HOME

Adicione ao `~/.bashrc`:

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

Depois, atualize com:

```bash
source ~/.bashrc
```

### 3. Instale o Maestro

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
export PATH="$PATH:$HOME/.maestro/bin"
```

Verifique:

```bash
maestro --version
```

### 4. Criado um teste E2E


### 5. Execute o teste

```bash
maestro test test.yaml
```

---

## 🧠 Diferença entre Teste Unitário e Teste E2E

Testes unitarios, como o proprio nome ja diz serve para rodar testes em unidades, em funcoes, componentes, ou ate mesmo hooks
Ja o teste E2E simula a experiencia de um usuario usando o aplicativo, podendo experimentar o comportamento real do aplicativo. 

---
