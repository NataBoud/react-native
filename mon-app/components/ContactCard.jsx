import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Modal, Pressable } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons'


export default function ContactCard({ contact, onPress }) {

    return (
        <>
            <Pressable style={styles.card} onPress={onPress}>
                <View style={styles.rowName}>
                    <Image source={{ uri: contact.avatar }} style={styles.avatar} />
                    <Text style={styles.nom}>{contact.nom}</Text>
                </View>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#17121eff',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'flex-start',
        marginVertical: 4,
        borderWidth: 1,
        borderColor: '#2a292bff',
    },
    nom: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c5c5c5ff',
    },
    rowName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 38,
        height: 38,
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 1,
        borderColor: '#545254ff',
    },

})
