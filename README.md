# 📱 ShotScheduler

Um aplicativo simples em React Native para controle de vacinas de bebês.  
A proposta é ajudar pais e responsáveis a acompanhar quais vacinas o bebê **já deveria ter tomado**, com base em sua idade atual (em meses).

---

## ✨ Funcionalidade

O app recebe:

- 👶 **Nome do bebê**
- 📅 **Idade do bebê (em meses)**

E retorna:

- 📋 Uma **lista de vacinas** que o bebê já deveria ter tomado até a idade informada.

---

## 🧠 Como funciona

1. O usuário informa o nome e a idade do bebê na tela inicial.
2. A aplicação filtra automaticamente as vacinas com base na idade.
3. Mostra na tela as vacinas que já deveriam ter sido aplicadas.

> As vacinas são carregadas a partir de um arquivo JSON com id, nome e idade recomendada para cada dose.

---

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo Router](https://expo.dev/router)
- TypeScript
- `FlatList` para exibição eficiente das vacinas
- Armazenamento local com JSON (mock de dados)

---

## 🧪 Como rodar o projeto

```bash
# Instale as dependências
yarn install

# Rode com o Expo
yarn android

```

---

## ScreenShots

![Screenshot from 2025-05-21 00-08-44](https://github.com/user-attachments/assets/e7a9896c-ae13-4704-bfbd-425800bcbd3f)

![Screenshot from 2025-05-21 00-09-01](https://github.com/user-attachments/assets/bfad33da-ff79-4c7b-97b5-afc6f8e6fa15)

![Screenshot from 2025-05-21 00-09-14](https://github.com/user-attachments/assets/2aeb8231-6e65-4452-8da2-cdfa2a69913e)

