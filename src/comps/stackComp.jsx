import React from 'react';
import {View, Text} from 'react-native';

import CircleSvgComponent from '../assets/circleSVG';
import ThunderSvgComponent from '../assets/thunderSVG';

const StackComp = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: props.backgroundCol, alignItems: 'center', justifyContent: 'center', position:"relative"}}>
      <Text style={{
        fontSize: 100,
        color: '#000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 10,
        width:"100%",
        height:"100%",
        position:"absolute",
        left:60,
        top:60,
        zIndex:100,
      }}>{
        props.temperature?
        Math.round(props.temperature)+" °C"
        :
        "--"+" °C"
      }</Text>  
      <View style={{
        opacity:0.7,
        zIndex:50,
      }}>
        {
            (props.temperature < 25) ? (
                <ThunderSvgComponent></ThunderSvgComponent>
            ) : (
                <CircleSvgComponent></CircleSvgComponent>  
            )
        }
      </View>
      <View style={{
        position:"absolute",
        bottom:50
      }}>
        {/* I have hardcoded this city iso code for now if needed
         i can get it from the API response. and show specific city 
         iso code like NYC something  */ }
       <Text style={{
        fontSize: 80,
        color: '#000',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width:"100%",
        height:"100%",
        fontWeight: '400',
      }}>{
        props.temperature ? (
          "BLR"
        ) : (
          "--"
        )
      }</Text>
      </View>
    </View>
  );
};

export default StackComp;
