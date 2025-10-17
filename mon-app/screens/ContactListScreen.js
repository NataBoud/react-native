import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Button, View } from "react-native";
import ContactList from "../components/ContactList";
import { contacts as contactsData } from "../data";

export default function ContactListScreen({ navigation, route }) {

  const [contacts, setContacts] = useState(contactsData);

  useEffect(() => {
    if (route.params?.newContact) {
      setContacts((prev) => [route.params.newContact, ...prev]);
    }
  }, [route.params?.newContact]);

  const openDetails = (contact) => {
    navigation.navigate("ContactDetail", { contact });
  };

  return (
    <SafeAreaView style={styles.ecran} edges={["top"]}>
      <View style={styles.headerBtn}>
        <Button
          title="Ajouter un contact"
          color="#7b68ee"
          onPress={() => navigation.navigate("AddContact")}
        />
      </View>
      <ContactList contacts={contacts} onSelect={openDetails} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    backgroundColor: "#19141fff",
  },
  headerBtn: {
    padding: 10,
    alignItems: "flex-end",
  },
});
