import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactListScreen from "./screens/ContactListScreen";
import ContactDetailScreen from "./screens/ContactDetailScreen";
import AddContactScreen from "./screens/AddContactScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Contacts"
        screenOptions={{
          headerStyle: { backgroundColor: "#19141f" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Contacts"
          component={ContactListScreen}
          options={{ title: "Mes contacts" }}
        />
        <Stack.Screen
          name="ContactDetail"
          component={ContactDetailScreen}
          options={{ title: "Détails du contact" }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
          options={{ title: "Ajouter un contact" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
