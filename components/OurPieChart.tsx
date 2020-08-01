import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import {colors} from '../Utilities/dataTypes'
import {StyleSheet, View, Text} from 'react-native'
import {Rect, Svg} from 'react-native-svg'
import capitalize from '../Utilities/capitalize'
/* Types */
import {Expenses} from '../Utilities/dataTypes'
import {colorsType} from '../Utilities/dataTypes'

interface Props {
  data: Expenses,
}

function OurPieChart(props: Props) {
  const keys:string[] = Object.keys(props.data);
  const values:number[] = Object.values(props.data);
  const pieData = keys
  .filter((_,index) => values[index] > 0)
  .map(key => ({
    value:props.data[key as keyof Expenses],
    svg: {
      fill: colors[key as keyof colorsType],
    },
    key: `${capitalize(key)}`
  }));

  const labels = keys.map(( key, index ) => (
    <View key={index} style={styles.labelWrapper}>
      <View style={styles.labelChild}>
        <Text style={styles.labelItem}>{capitalize(key)}</Text>
      </View>
      <Svg style={styles.labelChild} height={45}>
        <Rect
          x="25"
          y="20"
          width="75"
          height="10"
          fill={colors[key as keyof colorsType]}
          strokeWidth="3"
        />
      </Svg>
      <View style={{...styles.labelChild, ...styles.lastChild}}>
        <Text style={styles.value}>Rs. {values[index]}</Text>
      </View>
    </View>
  ));
  return(
    <>
      <View style={styles.pieChartWrapper}>
        <PieChart
          style={styles.pieChart}
          data={pieData}
          labelRadius={100}
        />
      </View>
      <View style={styles.labels}>
        {labels}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pieChartWrapper: {
    height: 160,
  },
  pieChart: {
    height: 160,
  },
  labels: {
    padding: 10,
    marginTop: 10,
  },
  labelWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  labelChild: {
    height: 45,
    width: "33%",
    alignItems: "center",
    flexDirection: "row",
  },
  labelItem: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastChild: {
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  value: {
    fontSize: 15,
  }
});

export default OurPieChart;
