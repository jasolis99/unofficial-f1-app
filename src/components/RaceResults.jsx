import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet,FlatList,Text, View, TouchableOpacity, Button} from 'react-native'
import fetchRaceResults from '../services/fetchRaceResults'
import RaceResultCard from './RaceResultCard'
import ReactNativePickerModule from "react-native-picker-module"
import fetchSeasons from '../services/fetchSeasons'

export default function RaceResults({navigation}) {
    
    // const [index, setIndex] = useState(1)
    const [title, setTitle] = useState('Temporada')
    const [finished, setFinished] = useState(false)
    const [finalResults, setFinalResults] = useState([])
    const [seasons, setSeasons] = useState(null)
    const pickerRef = useRef()
    let raceResults = []
    let i = 1

    const getResults = (year) => {
        fetchRaceResults(i,year).then((result) =>{
            if(result){
                raceResults.unshift(result)
                i++
                getResults(year)
            }
            else{
                setFinalResults(raceResults)
                setFinished(true)
            }
        })
    }
    const changeYear = (year) => {
        i = 1
        raceResults = []
        setTitle(year)
        getResults(year)
    }
    useEffect(() => {
        getResults()
        fetchSeasons().then(setSeasons)
    },[])

    const mappedSeasons = seasons ? 
    seasons.map((season) =>  {
      return{
        label: season.season,
        value: season.season
      }     
    }) 
    : []

    if(finished === false){
        return <View><Text>Loading ...</Text></View>
    }
    else{        
        return (
        <View>
        {mappedSeasons && 
            <View style={{padding: 30,alignItems:'center'}}>
                <Button color="#841584" title={title} onPress={()=> pickerRef.current.show()} />
                <ReactNativePickerModule
                    pickerRef={pickerRef}
                    title={"Selecciona el año"}
                    items={mappedSeasons}
                    selectedColor="#FC0"
                    cancelButtonTextStyle={{ color: "red" }}
                    onValueChange={changeYear}
                    />
            </View>
        }
        <FlatList 
            data={finalResults}
            style={{paddingRight: 16,backgroundColor: '#13141d'}} 
            ItemSeparatorComponent={Text}
            renderItem={({ item: team, index }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('InfoRaces',{season: team.season,round: team.round,title:team.Location.country})}>
                    <RaceResultCard {...team} index={index} />
                </TouchableOpacity>
            )}
            >
          </FlatList>
        </View>       
        )
    }
}
