import React from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Tab } from 'react-native-elements/dist/tab/Tab';
import Admin from './Admin';
import QRScanner from './QRScanner';
import Home from './Home';
import HomePdf from './HomePdf';
import Client from './Client';
import PDFCompiler from './PDFCompiler';
import HomeClient from './HomeClient';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeCalendar from './HomeCalendar';

const Tab = createBottomTabNavigator();

export default function Tabs({ user, navigation }) {

    // Return the SafeAreaView
    return (
        <Tab.Navigator
            tabBarShowLabel={true}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = "home"
                        } else if (route.name === 'Admin') {
                            iconName = "gear"
                        } else if (route.name === 'Compila PDF') {
                            iconName = "file-text"
                        } else if (route.name === 'QRScanner') {
                            iconName = "qrcode"
                        } else if (route.name === 'Clienti') {
                            iconName = "users"
                        } else if (route.name === 'Calendario') {
                            iconName = "calendar"
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarBadgeStyle: "white",
                    tabBarInactiveTintColor: "white",
                    tabBarActiveTintColor: "white",
                    tabBarStyle: {
                        position: 'absolute',
                        eleveation: 0,
                        backgroundColor: "#0282ba",
                        height: 80,
                        headerShown: false,
                        color: "#fff"
                    },
                })

            }
        >
            <Tab.Screen name="Home" children={() => <Home user={user} navigation={navigation} />} />
            {/* {
                user !== "admin" || user === "EXTERNAL" ? null : <Tab.Screen name="Admin" children={() => <Admin user={user} />} />
            } */}
            {
                user === "EXTERNAL" ? null : <Tab.Screen name="Compila PDF" children={() => <HomePdf user={user} />} />
            }
            {
                user === "surra" || user === "EXTERNAL" ? null : <Tab.Screen name="QRScanner" children={() => <QRScanner user={user} />} />
            }
            {
                user === "EXTERNAL" ? null : <Tab.Screen name="Clienti" children={() => <HomeClient user={user} />} />
            }
            {
                user === "EXTERNAL" ? null : <Tab.Screen name="Calendario" children={() => <HomeCalendar user={user} />} />
            }
        </Tab.Navigator >
    );
}
