import { API_URL } from './config';

// fetch com timeout e tratamento de erro HTTP, usado pelas telas.
export async function apiGet(path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const res = await fetch(`${API_URL}${path}`, { signal: controller.signal });
    if (!res.ok) {
      throw new Error(res.status === 404 ? 'Pokémon não encontrado.' : `Erro do servidor (${res.status}).`);
    }
    return await res.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error(`Tempo esgotado ao acessar ${API_URL}. O backend está rodando?`);
    }
    if (err.message?.includes('Network request failed')) {
      throw new Error(`Não consegui conectar em ${API_URL}. Confira se o backend está rodando e se o celular está na mesma rede Wi-Fi.`);
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
