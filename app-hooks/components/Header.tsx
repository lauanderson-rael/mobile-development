import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Header() {
  return (
    <View style={styles.header}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/profile" asChild>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Profile</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  link: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
  },
});