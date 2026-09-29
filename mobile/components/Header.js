import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logo}>🔴 PokeExplorer</Text>
      </TouchableOpacity>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.link}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a1a2e',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: { color: '#fff', fontSize: 16, fontWeight: '700' },
  nav: { flexDirection: 'row', gap: 16 },
  link: { color: '#ccc', fontSize: 14 },
});
