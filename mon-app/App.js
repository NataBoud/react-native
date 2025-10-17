import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactsProvider } from "./context/ContactsContext";

import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import AddContactScreen from "./screens/AddContactScreen";
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator initialRouteName="Contacts" screenOptions={{
          headerStyle: { backgroundColor: "#19141f" },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
        }}>

          <Stack.Screen name="Contacts" component={ContactListScreen} options={{ title: "Liste des contacts" }} />
          <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: "Détails du contact" }} />
          <Stack.Screen name="AddContact" component={AddContactScreen} options={{ title: "Ajouter un contact" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactsProvider>
  );
}
