import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {emptyExpenses} from '../Types/dataTypes'
/* Import types */
import {RouteProp} from '@react-navigation/native'
import {FinanceTabParamsList} from '../Tabs/FinanceTab'

/* Type checking */
type formScreenRouteProp = RouteProp<FinanceTabParamsList, "Add Expenses">

type Props = {
  route: formScreenRouteProp,
}

/* TODO 
 * New styled form
 * Get parent's state as route parameter, update state while going back
 */
export default class FinanceForm extends React.Component<Props,any>{
  render(){
    return (
      <>
        <Text>I am form component</Text>
        <TouchableOpacity onPress={() => {
          this.props.route.params.updateExpenses(emptyExpenses);
        }}>
          <Text>Click me!</Text>
        </TouchableOpacity>
      </>
    );
  }
}
