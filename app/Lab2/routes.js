import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Contacts from '../../screens/Contacts';
import Profile from '../../screens/Profile';
import Favorites from '../../screens/Favorites';
import User from '../../screens/User';
import Options from '../../screens/Options';
import colors from '../../utils/colors';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const getIcon = (name) => ({ color }) => (
  <MaterialIcons name={name} size={24} color={color} />
);

// Stack cho Contacts
const ContactsStack = () => (
  <Stack.Navigator initialRouteName="Contacts">
    <Stack.Screen
      name="Contacts"
      component={Contacts}
      options={{
        title: 'Contacts',
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ route }) => ({
        title: route.params.contact.name.split(' ')[0],
        headerStyle: { backgroundColor: colors.blue },
        headerTintColor: 'white',
      })}
    />
  </Stack.Navigator>
);

// Stack cho Favorites
const FavoritesStack = () => (
  <Stack.Navigator initialRouteName="Favorites">
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="Profile" component={Profile} />
  </Stack.Navigator>
);

// Stack cho User
const UserStack = () => (
  <Stack.Navigator initialRouteName="User">
    <Stack.Screen
      name="User"
      component={User}
      options={({ navigation }) => ({
        title: 'Me',
        headerStyle: { backgroundColor: colors.blue },
        headerTintColor: 'white',
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
            onPress={() => navigation.navigate('Options')}
          />
        ),
      })}
    />
    <Stack.Screen name="Options" component={Options} />
  </Stack.Navigator>
);

// Drawer Navigator chính
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Contacts">
    <Drawer.Screen
      name="Contacts"
      component={ContactsStack}
      options={{ drawerIcon: getIcon('list') }}
    />
    <Drawer.Screen
      name="Favorites"
      component={FavoritesStack}
      options={{ drawerIcon: getIcon('star') }}
    />
    <Drawer.Screen
      name="Me"
      component={UserStack}
      options={{ drawerIcon: getIcon('person') }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
