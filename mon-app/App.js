import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContactCard from './components/ContactCard';
import { contacts as contactsData } from './data';
import { useState } from 'react';
import ContactList from './components/ContactList';
import ModalContactInfo from './components/ModalContactInfo';


export default function App() {

  const [contacts] = useState(contactsData)
  const [selectedContact, setSelectedContact] = useState(null)
  const [isModalVisible, setModalVisible] = useState(false)

  const openDetails = (contact) => {
    setSelectedContact(contact)
    setModalVisible(true)
  }

  const closeDetails = () => {
    setModalVisible(false)
  }

  return (
    <>
      <SafeAreaView style={styles.ecran} edges={['top']}>
        <StatusBar style="light" />
        <ContactList contacts={contacts} onSelect={openDetails} />
        <ModalContactInfo
          contact={selectedContact}
          visible={isModalVisible}
          onClose={closeDetails}
        />
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: '#19141fff',
  },

});
