import 'react-native-gesture-handler';

import React from 'react';
import type {Node} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Tickets from './Tickets'
import Contact from './Contact';
import TicketPurchase from './TicketPurchase';


const Stack = createStackNavigator();

 const App: () => Node = () => {
   return (
     <>
        <StatusBar barStyle="dark-content" hidden />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Home'
            options={{
              headerMode: 'screen'
            }}
          >
            <Stack.Screen 
              name='Home'
              options={{
                headerShown: false
              }}
            >
              {(props) => <Home {...props} username='Sports Fan' />}
            </Stack.Screen>

            <Stack.Screen 
              name='Tickets'
              component={Tickets}
              option={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'Ubuntu-Regular' }
              }}
            />

            <Stack.Screen 
              name='Contact'
              component={Contact}
              option={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'Ubuntu-Regular' },
                headerTitle: 'Contact Us'
              }}
            />

            <Stack.Screen
              name='Purchase'
              component={TicketPurchase}
              option={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontFamily: 'Ubuntu-Regular' },
                headerTitle: 'Purchase Ticket'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
     </>
   );
 };
 
 export default App;
 