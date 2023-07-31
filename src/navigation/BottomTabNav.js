import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ChatScreen from "../screens/ChatScreen";
import CartScreen from "../screens/CartScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      "tabBarActiveTintColor": "#FFF7C6",
  "tabBarInactiveTintColor": "#FFF7C6",
  "tabBarActiveBackgroundColor": "#0E4000",
  "tabBarInactiveBackgroundColor": "#0E4000",
  "tabBarStyle": [
    {
      "display": "flex"
    },
    null
  ]
    }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" size={24} color="#FFF7C6" />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
              <Icon name="calendar" size={24} color="#FFF7C6" />
            ),
        }}
      />
      <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="cutlery" size={24} color="#FFF7C6" />
        ),
      }}
    />
    <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="comments" size={24} color="#FFF7C6" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={24} color="#FFF7C6" />
          ),
        }}
      />

    </Tab.Navigator>
  );
};
export default MainTabs;