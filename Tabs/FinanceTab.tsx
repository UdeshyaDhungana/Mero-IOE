import React from 'react'
import {YellowBox} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
/* Import screens */
import FinanceDetails from '../Screens/FinanceDetails'
import FinanceForm from '../Screens/FinanceForm'
/* IMport types */
import {updaterFunction} from '../Utilities/dataTypes'

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

/*
 * State persistance, or deep links are not used, so we can ignore the
 * "Non-serializable values were found in the navigation state,
 * which can break usage such as persisting and restoring state." warning
 * */

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
