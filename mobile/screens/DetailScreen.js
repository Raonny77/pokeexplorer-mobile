import { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';
import { apiGet } from '../api';

const TYPE_COLORS = {
  fire: '#F08030', water: '#6890F0', grass: '#78C850', poison: '#A040A0',
  normal: '#A8A878', flying: '#A890F0', bug: '#A8B820', electric: '#F8D030',
  psychic: '#F85888', rock: '#B8A038', ground: '#E0C068', ice: '#98D8D8',
  dragon: '#7038F8', ghost: '#705898', dark: '#705848', steel: '#B8B8D0',
  fairy: '#EE99AC', fighting: '#C03028',
};

export default function DetailScreen({ navigation, route }) {
  const { name } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const load = useCallback(() => {
    setError(null);
    setPokemon(null);
    apiGet(`/pokemons/${encodeURIComponent(name)}`)
      .then(setPokemon)
      .catch((err) => setError(err.message));
  }, [name]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {error ? (
        <ErrorMessage message={error} onRetry={load} />
      ) : !pokemon ? (
        <ActivityIndicator size="large" color="#e63946" style={{ marginTop: 40 }} />
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <Image source={{ uri: pokemon.sprite }} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>

          <Text style={styles.label}>Tipos</Text>
          <View style={styles.types}>
            {pokemon.types.map((t) => (
              <Text key={t} style={[styles.type, { backgroundColor: TYPE_COLORS[t] || '#ccc' }]}>
                {t}
              </Text>
            ))}
          </View>

          <Text style={styles.label}>Peso</Text>
          <Text style={styles.value}>{pokemon.weight} kg</Text>

          <Text style={styles.label}>Altura</Text>
          <Text style={styles.value}>{pokemon.height} m</Text>

          <Text style={styles.label}>Habilidades</Text>
          {pokemon.abilities.map((a) => (
            <Text key={a} style={styles.value}>• {a}</Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  content: { alignItems: 'center', padding: 24 },
  image: { width: 200, height: 200 },
  name: { fontSize: 24, fontWeight: '700', color: '#e63946', textTransform: 'capitalize', marginBottom: 12 },
  label: { fontSize: 11, color: '#888', textTransform: 'uppercase', marginTop: 12, fontWeight: '700' },
  value: { fontSize: 15, color: '#1a1a2e', textTransform: 'capitalize' },
  types: { flexDirection: 'row', gap: 8, marginTop: 4 },
  type: { paddingVertical: 4, paddingHorizontal: 12, borderRadius: 999, color: '#fff', fontSize: 12, fontWeight: '700', textTransform: 'capitalize', overflow: 'hidden' },
});
