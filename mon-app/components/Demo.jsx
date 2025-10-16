import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Demo() {

    // console.log('log');

    // View = div
    // Text = p, span, h1, h2, h3, ...
    // React(Web)	React Native	Rôle / équivalent
    // < div > <View>	Conteneur générique pour la mise en page
    // <span> / <p> / <h1>	<Text>	Affichage de texte
    // <img>	<Image>	Affichage d’images
    // <button>	<Pressable> / <TouchableOpacity> / <Button>	Boutons interactifs
    // <ul> / <ol> / <li>	<TouchableOpacity>	Liste défilante
    // <input>	<TextInput>	Champ de saisie
    // <a>	Pas d’équivalent direct (souvent Linking.openURL())

    return (
        <View style={styles.ecran}>
            <StatusBar style="dark" />
            <Text style={styles.text}>
                Demo Component
            </Text>
            <Text style={styles.paragraph}>
                Avec React Native
            </Text>
            <Image
                // source={{ uri: 'https://picsum.photos/id/1/200/300' }}
                source={require('../assets/MainBefore.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ecran: {
        flex: 1, // prend toute la place possible
        backgroundColor: '#d67bacff',
        alignItems: 'center', // centre horizontalement
        justifyContent: 'center', // centre verticalement
       
    },
    text: {
        fontSize: 36,
        fontWeight: 900,
        color: '#fff',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 400,
        color: '#332d31ff',
        textAlign: 'center',
        padding: 20,
    },
    image: {
        width: 420,
        height: 300,
        marginTop: 20,
    },
});