import React from 'react'
import DriversRanking from './DriversRanking'
import TeamsRanking from './TeamsRanking'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import NestedDriverRouter from './NestedDriverRouter'
import NestedRacesRouter from './NestedRacesRouter'
import { topBar } from '../tabStyles'
import { useRoute } from '@react-navigation/core'

const Tab = createMaterialTopTabNavigator()

export default function Rankings({route}) {

    return (
        <Tab.Navigator screenOptions={topBar}>
            <Tab.Screen name="Pilotos" component={NestedDriverRouter} />
            <Tab.Screen name="Equipos" component={TeamsRanking} />
            <Tab.Screen name="Carreras" component={NestedRacesRouter} />
        </Tab.Navigator>
      )
}
