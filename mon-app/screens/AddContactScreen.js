import React, { useState, useContext } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { ContactsContext } from "../context/ContactsContext";

export default function AddContactScreen({ navigation }) {
    const { addContact } = useContext(ContactsContext);
    const [nom, setNom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");

    const handleAdd = () => {
        if (!nom || !telephone || !email) {
            Alert.alert("Erreur", "Tous les champs sont obligatoires");
            return;
        }

        const newContact = {
            id: Date.now().toString(),
            nom,
            telephone,
            email,
            avatar: `https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}`,
        };

        addContact(newContact);
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "#19141f" }}>
            <TextInput placeholder="Nom" value={nom} onChangeText={setNom} style={{ color: "#fff" }} />
            <TextInput placeholder="Téléphone" value={telephone} onChangeText={setTelephone} style={{ color: "#fff" }} />
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ color: "#fff" }} />
            <Button title="Ajouter" onPress={handleAdd} color="#7b68ee" />
        </View>
    );
}
