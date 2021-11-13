import React from "react"
import { NativeBaseProvider, useColorModeValue, extendTheme } from "native-base"

import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Ionicons from "react-native-vector-icons/Ionicons"

// Screens
import CreateAccount from "./src/screens/CreateAccount"
import ViewAccount from "./src/screens/ViewAccount"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
}

// Extend the theme
const customTheme = extendTheme({ config })

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Screens />
    </NativeBaseProvider>
  )
}

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Criar conta" options={{ headerShown: false }} component={CreateAccount} />
      <Stack.Screen name="Conta criada com sucesso" component={ViewAccount} />
    </Stack.Navigator>
  )
}

function Screens() {
  const { colors } = customTheme
  const activeColor = useColorModeValue(colors.purple[500], colors.purple[900])
  const inactiveColor = useColorModeValue(colors.light[600], colors.purple[400])

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ position: "relative" }}>
                <Ionicons name={"wallet"} size={80} color={color} style={{ marginTop: -40 }} />
              </View>
            )
          },
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
          tabBarShowLabel: false,
        })}>
        {/* <Tab.Screen name="Create" component={CreateAccount} /> */}
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
