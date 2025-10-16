import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

// npx expo install @expo/vector-icons


export default function ContactCard() {
    const contact = {
        nom: 'Toto Tata',
        telephone: '+33 6 12 34 56 78',
        email: 'toto.tata@example.com',
    }

    return (
        <View style={styles.card}>

            <Text style={styles.nom}>{contact.nom}</Text>
            <View style={styles.row}>
                <MaterialIcons name="phone" size={20} color="#555" />
                <Text style={styles.info}> {contact.telephone}</Text>
            </View>

            <View style={styles.row}>
                <Entypo name="mail" size={20} color="#555" />
                <Text style={styles.info}> {contact.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // pour Android
        alignItems: 'flex-start',
    },
    nom: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row', // ligne horizontale
        alignItems: 'center', // centre verticalement l’icône et le texte
        marginBottom: 8,
    },
})
