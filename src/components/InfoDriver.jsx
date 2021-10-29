import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements'
import { Text,StyleSheet,Image, View } from 'react-native'
import {useFonts} from 'expo-font'
import { teamThemes } from '../teamThemes'
import { driversPicture } from '../driversPicture'

export default function InfoDriver({route}) {
  const headerHeight = useHeaderHeight()
  let [fontsLoaded] = useFonts({
    'F1_Bold': require('../../assets/fonts/Formula1-Bold.otf'),
    'F1_Regular': require('../../assets/fonts/Formula1-Regular.otf'),
    'F1_Wide': require('../../assets/fonts/Formula1-Wide.otf'),
  })
  if(!fontsLoaded){
    return <View><Text>Loading ...</Text></View>
  }
  else{
    return(
      <View>
        <View style={{backgroundColor: '#13141d'}}>
          <View style={{marginTop:headerHeight}}></View>
          <View style={styles.driverCard}>
            <View style={{borderLeftWidth:4, borderColor: teamThemes[route.params.team],padding: 5}}>
              <Text style={{fontFamily:'F1_Regular',color: 'white'}}>{route.params.givenName}</Text>
              <Text style={{fontFamily:'F1_Bold',color:'white',fontSize: 24}}>{route.params.familyName}</Text>
              <View style={{marginTop:16,flexDirection:'row'}}>
                <Text style={{fontFamily:'F1_Bold',color:'white'}}>{route.params.permanentNumber}</Text>
                <Text style={{color:'white'}}> | </Text>
                <Text style={{fontFamily:'F1_Regular',color:'white'}}>{route.params.team}</Text>
              </View>
            </View>
            <Image style={styles.image}  source={{uri: driversPicture[route.params.familyName.normalize('NFD').replace(/[\u0300-\u036f]/g,"")]}} />
          </View> 
        </View>
        <View style={{marginTop:20,padding:5}}>
            <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
              <View>
                <Text style={{fontFamily:'F1_Regular',fontSize:12}}>Championship Standing</Text>
                <Text style={{marginTop:10,fontFamily:'F1_Bold',fontSize: 72}}>{route.params.position}</Text>
              </View>
              <View style={{position:'relative',width:'50%',borderRightWidth:4,borderTopWidth:4,borderTopRightRadius:16,borderColor:teamThemes[route.params.team]}}>
                <View style={{position:'absolute',bottom:0,flexDirection: 'row',alignItems:'center'}}>
                  <Text style={{fontFamily:'F1_Regular',fontSize: 32,marginRight: 10}}>{route.params.points}</Text>
                  <Text style={{padding: 5, backgroundColor:'#474851',color:'white',borderColor:'#474851',fontFamily: 'F1_Wide'}}>PTS</Text>
                </View>
              </View>
            </View>
        </View> 
      </View>
    )  

  }
}

const styles = StyleSheet.create({
  driverCard:{
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  image:{
    width: '25%',
    height: 100
  }
})
