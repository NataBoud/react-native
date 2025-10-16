import React from 'react'
import { View, Text, StyleSheet, Image, Modal, Pressable, TouchableOpacity, Linking, Alert } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

export default function ModalContactInfo({ contact, visible, onClose }) {
    if (!contact) return null 

    async function makeCall() {
 
            const phoneNumber = contact.telephone.replace(/\s+/g, '')
            const url = phoneNumber
            const possible = await Linking.canOpenURL(url)

            if (possible) {
                await Linking.openURL(url)
            } else {
                Alert.alert("Pas possible ici")
            }
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Image source={{ uri: contact.avatar }} style={styles.avatarLarge} />
                    <Text style={styles.nomModal}>{contact.nom}</Text>

                    <TouchableOpacity onPress={makeCall} style={styles.row}>
                        <MaterialIcons name="phone" size={18} color="#c5c5c5ff" />
                        <Text style={styles.info}>{contact.telephone}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.row}>
                        <Entypo name="mail" size={18} color="#c5c5c5ff" />
                        <Text style={styles.info}>{contact.email}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.2} style={styles.btnClose} onPress={onClose}>
                        <Text style={styles.btnCloseText}>Fermer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#221b2cff',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3d3c40ff',
        width: '80%',
    },
    avatarLarge: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#545254ff',
    },
    nomModal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#efeaeaff',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
    },
    info: {
        fontSize: 15,
        color: '#c5c5c5ff',
        marginLeft: 8,
    },
    btnClose: {
        marginTop: 20,
        backgroundColor: '#40364aff',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    btnCloseText: {
        color: '#efeaeaff',
        fontSize: 16,
    },
})
