import React, { useEffect, useState } from 'react'
import { Image, Text, View} from 'react-native'
import {useFonts} from 'expo-font'
import getNextRaceDate from '../services/getNextRaceDate'
import months from '../months'
export default function NextEvents() {
    const [nextRace, setNextRace] = useState(null)
    useEffect(() =>{
        async () => { 
            await fetch('https://api.formula1.com/v1/event-tracker', {
                headers: {
                    apiKey: 'qPgPPRJyGCIPxFT3el4MF7thXHyJCzAP',
                    locale: 'en',
                },
            }).then(setNextRace);}
    },[])
    let [fontsLoaded] = useFonts({
        'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
        'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
    })
    // const startDay = new Date(nextRace.race.meetingStartDate).getDate()
    // const endDay = new Date(nextRace.race.meetingEndDate).getDate()
    if(!fontsLoaded){return <View><Text>Loading ...</Text></View>}
    else{
        return (<View style= {{backgroundColor: 'black',padding: 5}}>
            <Text style={{color:'white', fontFamily: 'F1_Bold',marginTop: 8}}>Hola</Text>
            <View style={{marginTop: 14,flexDirection: 'row',padding: 5}}>
                <View style={{width: 60, height: 50,borderRightWidth:1,borderTopWidth:1,borderTopRightRadius:10,borderColor:'white'}}>
                    {/* <Image style={{width:50,height:50,resizeMode:'contain'}} source={{uri: nextRace.circuitSmallImage.url}} /> */}
                </View>
                <View style={{borderTopWidth:1,borderColor:'white', width: '80%',marginLeft: 10,justifyContent:'center'}}>
                    <Text style={{color:'white',fontFamily: 'F1_Bold'}}>Hola</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row',padding: 5}}>
                <View style={{backgroundColor:'#202027',width:'70%',alignItems:'center',justifyContent:'center',padding: 8,borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
                    <View style={{backgroundColor:'#38383F',width:'50%',alignItems:'center',borderRadius:10,padding: 5}}>
                        <Text style={{color:'white',fontFamily: 'F1_Regular',fontSize:10}}>PRACTICE 2</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',width:'70%',marginTop: 8}}>
                        <View>
                            <Text style={{color:'white',fontFamily: 'F1_Bold'}}>00</Text>
                            <Text style={{color:'white',fontFamily: 'F1_Regular',fontSize:10}}>DAYS</Text>
                        </View>
                        <View>
                            <Text style={{color:'white',fontFamily: 'F1_Bold'}}>00</Text>
                            <Text style={{color:'white',fontFamily: 'F1_Regular',fontSize:10}}>HRS</Text>
                        </View>
                        <View>
                            <Text style={{color:'white',fontFamily: 'F1_Bold'}}>00</Text>
                            <Text style={{color:'white',fontFamily: 'F1_Regular',fontSize:10}}>MINS</Text>
                        </View>
                    </View>
                </View>
                <View style={{width:'30%',borderWidth:1,borderColor:'white',alignItems:'center',justifyContent:'center',backgroundColor:'white',borderTopRightRadius: 10,borderBottomRightRadius:10}}>
                    <Image style={{width: 84,height:52,resizeMode:'contain'}} source={{uri:'https://www.formula1.com/etc/designs/fom-website/images/rolex/rolex-logo-green.png'}} />
                </View>
            </View>
        </View>
        )}
}
