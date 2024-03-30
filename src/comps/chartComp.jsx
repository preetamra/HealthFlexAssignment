import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

const ChartComp = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: props.backgroundCol, alignItems: 'center', justifyContent: 'center'}}>
      {
        props.forecast.length > 0 ? 
        (
          <LineChart
        data={{
          labels: ["-30mins","-20mins","-10mins","now","+10mins"],
          datasets: [
            {
              data: [props.forecast[0].temperature,props.forecast[14].temperature,props.forecast[29].temperature,props.forecast[44].temperature,props.forecast[59].temperature],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2 // optional
            }
          ],
        }}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height - 520}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      />
        ) :
        (
          <Text>
            Loading
          </Text>
        )
      }
    </View>
  );
};

export default ChartComp;
