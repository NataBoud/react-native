import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactCard from './components/Contact';
import { contacts } from './data';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.ecran} edges={['top']}>
      <StatusBar style="light" />

      <View style={styles.container}>
        <Text style={styles.text}>Contacts</Text>

        {contacts.length > 0 ? (
          <FlatList
            data={contacts}
            renderItem={({ item }) => <ContactCard contact={item} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.noContact}>Aucun contact</Text>
        )}
      </View>

    </SafeAreaView>
    </>

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
    fontWeight: '600',
    color: '#efeaeaff',

    marginBottom: 10,
  },
  noContact: {
    color: '#c5c5c5ff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'left',
  }
});
