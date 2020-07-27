import React from 'react'
import {Text, View} from 'react-native'
import {dataInterface} from '../Tabs/FinanceTab'

interface propsInterface{
  data: dataInterface,
}

class PieChart extends React.Component{
  constructor(props:propsInterface){
    super(props);
    this.state = props.data;
  }

  render(){
    return (
      <View>
        <Text>The expense in food is {JSON.stringify(this.state)}</Text>
      </View>
    );
  }
}

export default PieChart;
