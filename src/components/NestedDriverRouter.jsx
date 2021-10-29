import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversRanking from './DriversRanking';
import InfoDriver from './InfoDriver'
const Stack = createNativeStackNavigator();

export default function NestedDriverRouter(params) {
    return (
        <Stack.Navigator screenOptions={
            {
                headerBackTitleVisible: false,
                title:'',
                headerTransparent:true,
                headerTintColor: 'white'
            }
        }>
          <Stack.Screen name="Ranking" component={DriversRanking} />
          <Stack.Screen name="Info" component={InfoDriver} />
        </Stack.Navigator>
      );
}
