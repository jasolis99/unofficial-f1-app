import React, { useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import InfoRace from './InfoRace'
import Drivers from './Drivers'
import InfoQualy from './InfoQualy'

const Tab = createMaterialTopTabNavigator()

export default function WeekEndResults({route}) {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Race" component={InfoRace} initialParams={{season: route.params.season, round:route.params.round}} />
            <Tab.Screen name="Qualifying" component={InfoQualy} initialParams={{season: route.params.season, round:route.params.round}} />
        </Tab.Navigator>
      )
};
