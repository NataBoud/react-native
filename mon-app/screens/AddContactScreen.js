import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";

export default function AddContactScreen({ navigation }) {
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
            avatar: "https://picsum.photos/100", 
        };
        
        navigation.navigate("Contacts", { newContact });

        setNom("");
        setTelephone("");
        setEmail("");
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

            <Button title="Ajouter" onPress={handleAdd} color="#7b68ee" />
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
        fontSize: 16,
        marginTop: 10,
    },
    input: {
        backgroundColor: "#2a2433",
        color: "#fff",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#3d3c40",
    },
});
