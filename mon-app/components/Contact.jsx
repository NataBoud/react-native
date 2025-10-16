import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

// npx expo install @expo/vector-icons


export default function ContactCard() {
    const contact = {
        nom: 'Toto Tatatata',
        telephone: '+33 6 12 34 56 78',
        email: 'toto.tata@example.com',
        avatar: 'https://picsum.photos/100', 
    }

    return (
        <View style={styles.card}>

            <View style={styles.rowName}>
                <Image source={{ uri: contact.avatar }} style={styles.avatar} />
                <Text style={styles.nom}>{contact.nom}</Text>
            </View>

            <View style={styles.row}>
                <MaterialIcons name="phone" size={16} color="#c5c5c5ff" style={{ marginLeft: 6 }} />
                <Text style={styles.info}> {contact.telephone}</Text>
            </View>

            <View style={styles.row}>
                <Entypo name="mail" size={16} color="#c5c5c5ff" style={{ marginLeft: 6 }} />
                <Text style={styles.info}> {contact.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#282229ff',
        borderRadius: 12,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4, // pour Android
        alignItems: 'flex-start',
        marginVertical: 10,   // marge en haut/bas
        borderWidth: 1,
        borderColor: '#393839ff',
    },
    nom: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c5c5c5ff',
        marginBottom: 8,
    },
    info: {
        fontSize: 14,
        color: '#c5c5c5ff',
        marginBottom: 4,
        paddingLeft: 8, 
    },
    row: {
        flexDirection: 'row', // ligne horizontale
        alignItems: 'center', // centre verticalement l’icône et le texte
        marginBottom: 8,
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 20, // cercle
        marginRight: 12,  // espace entre avatar et nom
        borderWidth: 1,
        borderColor: '#545254ff',
    },
    rowName: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
})
