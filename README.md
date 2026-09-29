# PokeExplorer Mobile

Pokédex feita como trabalho da disciplina de **Desenvolvimento para Dispositivos Móveis**.

- `backend/` → API em **NestJS** (funciona como proxy para a [PokéAPI](https://pokeapi.co))
- `mobile/`  → App **React Native (Expo SDK 57)** com 3 telas: Home, Detalhe e Sobre

## Como funciona

```
App (Expo Go) ──HTTP──▶ Backend NestJS (:3000) ──HTTPS──▶ PokéAPI
```

| Rota | Descrição |
|------|-----------|
| `GET /pokemons` | Lista os 20 primeiros Pokémon |
| `GET /pokemons/:name` | Detalhes (tipos, peso, altura, habilidades). Retorna 404 se não existir |

## Pré-requisitos

- [Node.js](https://nodejs.org) 20 ou superior
- App **Expo Go** no celular (Play Store / App Store) ou um emulador Android/iOS
- PC e celular na **mesma rede Wi-Fi**

## Como rodar

### 1. Backend (terminal 1)

```bash
cd backend
npm install
npm run start:dev
```

Teste no navegador: <http://localhost:3000/pokemons>

### 2. App mobile (terminal 2)

```bash
cd mobile
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go (Android) ou com a câmera (iOS).
O app descobre sozinho o IP do PC (veja `mobile/config.js`).

## Problemas comuns

- **"Não consegui conectar"** no app: confirme que o backend está rodando e que o Firewall do Windows permite a porta 3000 (Node.js → "Permitir acesso" em redes privadas).
- **Wi-Fi com isolamento de clientes** (redes de faculdade, por exemplo): use `npx expo start --tunnel` para o app e defina `API_URL_OVERRIDE` em `mobile/config.js` com o IP do PC, ou compartilhe a internet do celular com o PC.
- **Emulador Android**: funciona sem ajustes (usa `10.0.2.2`).

## Tecnologias

NestJS · React Native · Expo · React Navigation · PokéAPI
