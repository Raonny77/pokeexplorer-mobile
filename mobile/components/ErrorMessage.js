import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>⚠️ {message}</Text>
      {onRetry && (
        <TouchableOpacity style={styles.button} onPress={onRetry}>
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { margin: 24, padding: 16, backgroundColor: '#fff', borderRadius: 16, alignItems: 'center' },
  text: { color: '#555', textAlign: 'center', marginBottom: 12 },
  button: { backgroundColor: '#e63946', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 999 },
  buttonText: { color: '#fff', fontWeight: '700' },
});
