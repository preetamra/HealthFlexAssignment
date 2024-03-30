import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RainDropSvgComponent from '../assets/rainDrop';
import WindySvgComponent from '../assets/windySVG';
import UVSvgComponent from '../assets/uvIndexSVG';

const DetailComp1 = (props) => {
  return (
    <View style={
      [
        styles.container,
        {
          backgroundColor: props.backgroundCol
        }
      ]}>
      <View style={styles.itemContainer}>
        <View style={styles.svgContainer}>
        <RainDropSvgComponent></RainDropSvgComponent>
        </View>
       <Text style={styles.text}>
        {
          ( props.rainIntensity) ? (
            props.rainIntensity
          ) : (
            props.rainIntensity != 0 ? "--" : "0"
          )
        }
       </Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.svgContainer}>
         <WindySvgComponent></WindySvgComponent>
        </View>
       <Text style={styles.text}>
        {
          props.windSpeed ? (
            props.windSpeed
          ) : (
            "--"
          )
        }
       </Text>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.svgContainer}>
          <UVSvgComponent></UVSvgComponent>  
        </View>
       <Text  style={styles.text}>
        {
          props.uvIndex ? (
            props.uvIndex
          ) : (
            "--"
          )
        }
       </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    flexDirection: "row"
  },
  itemContainer:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  svgContainer:{
    borderWidth: 1, 
    borderColor: '#000', 
    borderRadius: 50, 
    padding: 10
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"black"
  }
})

export default DetailComp1;
