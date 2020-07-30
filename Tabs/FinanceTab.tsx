import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

/* Import screens */
import FinanceDetails from '../Screens/FinanceDetails'
import FinanceForm from '../Screens/FinanceForm'

const FinanceTabStack = createStackNavigator();

/* We have two screens here, one for form, one for details */
export default function FinanceTab (){
  return (
    <FinanceTabStack.Navigator>
      <FinanceTabStack.Screen name="Details" component={FinanceDetails}/>
      <FinanceTabStack.Screen name="Form" component={FinanceForm}/>
    </FinanceTabStack.Navigator>
  );
}
