import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

export default function ContactDetailsScreen({ route }) {
    const { contact } = route.params;

    async function makeCall() {
        const phoneNumber = contact.telephone.replace(/\s+/g, '');
        const url = `tel:${phoneNumber}`;
        const possible = await Linking.canOpenURL(url);

        if (possible) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Impossible", "Cet appareil ne peut pas passer d'appel.");
        }
    }

    async function sendEmail() {
        const url = `mailto:${contact.email}`;
        const possible = await Linking.canOpenURL(url);

        if (possible) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Impossible", "Cet appareil ne peut pas envoyer d'email.");
        }
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: contact.avatar }} style={styles.avatarLarge} />
            <Text style={styles.nomModal}>{contact.nom}</Text>

            <TouchableOpacity style={styles.row} onPress={makeCall}>
                <MaterialIcons name="phone" size={20} color="#c5c5c5ff" />
                <Text style={styles.info}>{contact.telephone}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={sendEmail}>
                <Entypo name="mail" size={20} color="#c5c5c5ff" />
                <Text style={styles.info}>{contact.email}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19141fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    avatarLarge: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#545254ff',
    },
    nomModal: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#efeaeaff',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    info: {
        fontSize: 16,
        color: '#c5c5c5ff',
        marginLeft: 10,
    },
});
