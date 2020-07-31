import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
/* Import screens */
import FinanceDetails from '../Screens/FinanceDetails'
import FinanceForm from '../Screens/FinanceForm'
/* IMport types */
import {updaterFunction} from '../Types/dataTypes'

/* Type checking */
export type FinanceTabParamsList = {
  Details: undefined,
  "Add Expenses": {
    updateExpenses: updaterFunction,
  },
}

const FinanceTabStack = createStackNavigator<FinanceTabParamsList>();
/* We have two screens here, one for form, one for details */
export default function FinanceTab (){
  return (
    <FinanceTabStack.Navigator>
      <FinanceTabStack.Screen name="Details" component={FinanceDetails}/>
      <FinanceTabStack.Screen name="Add Expenses" component={FinanceForm}/>
    </FinanceTabStack.Navigator>
  );
}
