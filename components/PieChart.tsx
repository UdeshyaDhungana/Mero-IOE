import React from 'react'
import {Text, View} from 'react-native'
import {Expenses} from '../Tabs/FinanceTab'

interface Props{
  data: Expenses,
}

class PieChart extends React.Component<Props, object>{
  constructor(props:Props){
    super(props);
  }

  render(){
    return (
      <View>
        <Text>The expense in food is {JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export default PieChart;
