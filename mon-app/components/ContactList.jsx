import { Text, StyleSheet, View, Dimensions, FlatList } from 'react-native'
import React, { Component } from 'react'
import ContactCard from './ContactCard'

export default function ContactList({ contacts, onSelect }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Contacts</Text>
            <FlatList
                data={contacts}
                renderItem={({ item }) => <ContactCard contact={item} onPress={() => onSelect(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        color: '#efeaeaff',
        marginBottom: 10,
    },
    noContact: {
        color: '#c5c5c5ff',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'left',
    }
})