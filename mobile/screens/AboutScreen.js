import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Sobre o Projeto</Text>
        <Text style={styles.subtitle}>Uma Pokédex feita com NestJS + React Native (Expo)</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>👤 Aluno</Text>
          <Text style={styles.cardText}>Nome: Raonny</Text>
          <Text style={styles.cardText}>Disciplina: Desenvolvimento para Dispositivos Móveis</Text>
          <Text style={styles.cardText}>Período: 3º</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Projeto</Text>
          <Text style={styles.cardText}>
            O PokeExplorer é um catálogo interativo de Pokémon, agora em versão mobile,
            com backend em NestJS consumindo a PokéAPI e app em React Native (Expo).
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚙️ Tecnologias</Text>
          <Text style={styles.cardText}>→ NestJS (API)</Text>
          <Text style={styles.cardText}>→ React Native + Expo</Text>
          <Text style={styles.cardText}>→ React Navigation</Text>
          <Text style={styles.cardText}>→ PokéAPI</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f8' },
  content: { padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: '#e63946', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#888', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, borderTopWidth: 4, borderTopColor: '#e63946' },
  cardTitle: { fontSize: 14, fontWeight: '700', color: '#e63946', textTransform: 'uppercase', marginBottom: 8 },
  cardText: { fontSize: 14, color: '#555', marginBottom: 4 },
});
