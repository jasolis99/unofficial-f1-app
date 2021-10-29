import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RaceResults from './RaceResults';
import WeekEndResults from './WeekEndResults'
import { useRoute } from '@react-navigation/core';


const Stack = createNativeStackNavigator();

export default function NestedRacesRouter(params) {

    return (
        <Stack.Navigator>
          <Stack.Screen options={
            {
                headerBackTitleVisible: false,
                title:'',
                headerTransparent:true,
            }
        } name="Races" component={RaceResults} />
          <Stack.Screen name="InfoRaces" options={({ route }) => ({ title: route.params.title })} component={WeekEndResults}  />
        </Stack.Navigator>
      );
}
