import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Button, View } from "react-native";
import ContactList from "../components/ContactList";
import { contacts as contactsData } from "../data";
import { StatusBar } from 'expo-status-bar';
import { ContactsContext } from "../context/ContactsContext";

export default function ContactListScreen({ navigation }) {

  const { contacts } = useContext(ContactsContext);

  const handleSelectContact = (contact) => {
    navigation.navigate("ContactDetail", { contact });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#19141f" }}>
      <View style={{ paddingRight: 20, alignItems: "flex-end" }}>
        <Button
          title="Ajouter un contact"
          color="#7b68ee"
          onPress={() => navigation.navigate("AddContact")}
        />
      </View>
      <ContactList contacts={contacts} onSelect={handleSelectContact} />
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
