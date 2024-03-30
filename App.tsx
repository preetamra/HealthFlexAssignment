import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios';
import GetLocation from 'react-native-get-location';
import { apiKey } from './api';

import StackComp from './src/comps/stackComp';
import DetailComp1 from './src/comps/DetailComp1';
import ChartComp from './src/comps/chartComp';

function App() {

  const [lat,setLat] = useState("");
  const [long,setLong] = useState("");

  const [temp,setTemp] = useState("");
  const [uvIndex,setUvIndex] = useState("");
  const [rainIntensity,setRainIntensity] = useState("");
  const [windSpeed,setWindSpeed] = useState("");

  const [forecast,setForecast] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    (
      async () => {
        try{
          const res = await GetLocation.getCurrentPosition({enableHighAccuracy: true, timeout: 10000});
              
          setLat(res.latitude.toString());
          setLong(res.longitude.toString());
        }catch (err) {
          console.log(err); 
        }
      }
    )()
  },[]);

  const updateWeather = async () => {
    try{
      let uri = `https://api.tomorrow.io/v4/weather/realtime?location=${lat},${long}&apikey=${apiKey}`;
      let uriforcast = `https://api.tomorrow.io/v4/weather/forecast?location=${lat},${long}&apikey=${apiKey}`;
      
      const resforcast = await axios.get(uriforcast);
      const res = await axios.get(uri);

      setForecast(resforcast.data.timelines.minutely.map((item) => {
        return {
          time: new Date(item.time).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}),
          temperature: item.values.temperature,
        }
      }));

/*       console.log(JSON.stringify(resforcast.data.timelines.minutely[0]));
      console.log(JSON.stringify(resforcast.data.timelines.minutely[14]));
      console.log(JSON.stringify(resforcast.data.timelines.minutely[29]));
      console.log(JSON.stringify(resforcast.data.timelines.minutely[44]));
      console.log(JSON.stringify(resforcast.data.timelines.minutely[59])); */
      // console.log(res.data);
      // console.log(res.data.data.values.uvIndex);
      // console.log(res.data.data.values.rainIntensity);
      // console.log(res.data.data.values.windSpeed);
      setUvIndex(res.data.data.values.uvIndex);
      setRainIntensity(res.data.data.values.rainIntensity);
      setWindSpeed(res.data.data.values.windSpeed);
      setTemp(res.data.data.values.temperature);
    }catch(err) {
      console.log(err);
    } 
  }

  useEffect(() => {
    updateWeather();
  },[lat,long]);

  useEffect(() => {
    if(temp) {
       setBackgroundColor( (parseInt(temp) < 25) ? "gray" : "#FFF1C7")
    }
  },[temp]);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: backgroundColor,
    }}>
      {
         (!lat && !long) ? (
      <View>
        <Text>Grant access to Location</Text>
        <Button
        title='Refresh'
        onPress={updateWeather}
        ></Button>
      </View>
        )
        :
        (
          <View style={{flex: 3}}>
            <View style={{flex: 6,backgroundColor: backgroundColor}}>
            <StackComp
            backgroundCol={backgroundColor}
            temperature={temp}
            ></StackComp>          
            </View>
            <View style={{flex: 1,backgroundColor: backgroundColor}}>
            <DetailComp1
            uvIndex={uvIndex}
            rainIntensity={rainIntensity}
            windSpeed={windSpeed}
            ></DetailComp1>
            </View>
            <View style={{flex: 3,backgroundColor: backgroundColor}}>
            <ChartComp
            forecast={forecast}
            ></ChartComp>
            </View>
          </View>
        ) 
      }
    </SafeAreaView>
  );
}

export default App;
