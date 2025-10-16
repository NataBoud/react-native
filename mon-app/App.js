import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './components/Demo';
import ContactCard from './components/Contact';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
      <ContactCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdedeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
