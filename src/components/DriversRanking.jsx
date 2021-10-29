import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Text,Button,View,TouchableOpacity } from 'react-native'
import ReactNativePickerModule from "react-native-picker-module"
import {useFonts} from 'expo-font'
import fetchDrivers from '../services/fetchDrivers'
import fetchSeasons from '../services/fetchSeasons'
import DriverCard from './DriverCard'

export default function DriversRanking({navigation}) {
  let [fontsLoaded] = useFonts({
    'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
    'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
  })
  const pickerRef = useRef()
  const [ranking, setRanking] = useState(null)
  const [seasons, setSeasons] = useState(null)
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchDrivers().then(value =>{
      setRanking(mapRanking(value))
    })
    fetchSeasons().then(setSeasons)
  }, [])

  useEffect(() =>{
    setLoading(false)
  },[ranking])

  const mapRanking = (value) =>{
    return value.map((driver) => {
      return {
        position: driver.position,
        points: driver.points,
        givenName: driver.Driver.givenName,
        familyName: driver.Driver.familyName,
        team: driver.Constructors[0].name,
        permanentNumber: driver.Driver.permanentNumber
      }
    })
  }
  const reFetchSeason  = (value) => {
    setLoading(true)
    fetchDrivers(value).then(result =>{
      setRanking(mapRanking(result))
    })
  }

  const mappedSeasons = seasons ? 
    seasons.map((season) =>  {
      return{
        label: season.season,
        value: season.season
      }     
    }) 
    : []

  return (
    <View style={{flex: 1,backgroundColor: '#13141d'}}>
      {mappedSeasons && 
        <View style={{padding: 30,alignItems:'center'}}>
          <Button title="Temporada" onPress={()=> pickerRef.current.show()} />
            <ReactNativePickerModule
              pickerRef={pickerRef}
              title={"Selecciona el año"}
              items={mappedSeasons}
              selectedColor="#FC0"
              cancelButtonTextStyle={{ color: "red" }}
              onValueChange={reFetchSeason}
            />
        </View>
      }
      {
        loading === true ? <Text style={{color: 'white'}}>Loading...</Text> :
        <FlatList
          data={ranking}
          style={{paddingRight: 16,backgroundColor: '#13141d'}}
          ItemSeparatorComponent={Text}
          renderItem={({ item: driver }) => (
            <TouchableOpacity onPress={()=> navigation.navigate('Info',{...driver})}>
              <DriverCard  {...driver}/>
            </TouchableOpacity>
          )}
        ></FlatList>
      }
     </View>
  )
}

