import { useCallback, useEffect, useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity,
  StyleSheet, ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import ErrorMessage from '../components/ErrorMessage';
import { apiGet } from '../api';

export default function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    apiGet('/pokemons')
      .then(setPokemons)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Escolha seu Pokémon</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#e63946" style={{ marginTop: 40 }} />
      ) : error ? (
        <ErrorMessage message={error} onRetry={load} />
      ) : (
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.name}
          numColumns={2}
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Detail', { name: item.name })}
            >
              <Image source={{ uri: item.sprite }} style={styles.image} />
              <Text style={styles.number}>#{String(item.index).padStart(3, '0')}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  title: { textAlign: 'center', fontSize: 18, fontWeight: '700', color: '#e63946', marginVertical: 16 },
  grid: { paddingHorizontal: 12, paddingBottom: 24 },
  card: { flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16, margin: 6, alignItems: 'center' },
  image: { width: 90, height: 90 },
  number: { fontSize: 11, color: '#aaa', marginTop: 4 },
  name: { fontSize: 14, fontWeight: '600', color: '#1a1a2e', textTransform: 'capitalize' },
});
