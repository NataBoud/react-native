import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactCard from './components/Contact';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.ecran}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>Contacts</Text>
        <ContactCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: '#19141fff',
  },
  container: {
    width: width,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#efeaeaff',
    marginBottom: 10,
  },
});
