import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactsProvider } from "./context/ContactsContext";

import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import AddContactScreen from "./screens/AddContactScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContactsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Contacts">
          <Stack.Screen name="Contacts" component={ContactListScreen} />
          <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
          <Stack.Screen name="AddContact" component={AddContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContactsProvider>
  );
}
