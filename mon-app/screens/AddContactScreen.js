import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.label}>Nom</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez le nom"
                placeholderTextColor="#aaa"
                value={nom}
                onChangeText={setNom}
            />

            <Text style={styles.label}>Téléphone</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez le numéro"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={telephone}
                onChangeText={setTelephone}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Entrez l'email"
                placeholderTextColor="#aaa"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <View style={styles.buttonContainer}>
                <Button title="Ajouter" onPress={handleAdd} color="#7b68ee" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#19141f",
        padding: 20,
    },
    label: {
        color: "#efeaeaff",
        fontSize: 14,
        fontWeight: "500",
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        backgroundColor: "#2a2433",
        color: "#fff",
        borderRadius: 8,
        padding: 12,
        fontSize: 12,
        borderWidth: 1,
        borderColor: "#3d3c40",
    },
    buttonContainer: {
        marginTop: 30,
    },
});
