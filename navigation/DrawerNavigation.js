import * as React from "react";
import LoginScreen from './screens/Login.js';
import HomeScreen from './screens/Home';
import SettingsScreen from "./screens/Settings.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Accueil"
        component={HomeNavigator}/>
      <Drawer.Screen
        name="Parametres"
        component={SettingsNavigator}
      />
      <Drawer.Screen
        name="Quitter"
        component={LoginNavigator}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStackStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  )
}

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </SettingsStack.Navigator>
  )
}

const LoginStack = createStackNavigator();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
    </LoginStack.Navigator>
  )
}