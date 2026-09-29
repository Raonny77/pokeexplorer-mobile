import { Platform } from 'react-native';
import Constants from 'expo-constants';

// Detecta automaticamente o IP do PC que está rodando o `expo start`.
// Assim não precisa editar nada quando a rede Wi-Fi mudar.
//  - Celular físico (Expo Go): usa o mesmo IP do Metro bundler (ex.: 192.168.0.10)
//  - Emulador Android: o "localhost" do PC é 10.0.2.2
//  - Simulador iOS / web: localhost funciona
//
// Se algo der errado (ex.: usando --tunnel), defina o IP na mão em API_URL_OVERRIDE.
const API_URL_OVERRIDE = null; // exemplo: 'http://192.168.0.10:3000'
const PORT = 3000;

function resolveApiUrl() {
  if (API_URL_OVERRIDE) return API_URL_OVERRIDE;

  const hostUri = Constants.expoConfig?.hostUri; // ex.: "192.168.0.10:8081"
  const host = hostUri?.split(':')[0];

  if (host && !host.includes('exp.direct')) return `http://${host}:${PORT}`;
  if (Platform.OS === 'android') return `http://10.0.2.2:${PORT}`;
  return `http://localhost:${PORT}`;
}

export const API_URL = resolveApiUrl();
