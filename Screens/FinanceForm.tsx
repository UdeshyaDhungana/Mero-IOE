import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
/* Import types */
import {RouteProp} from '@react-navigation/native'
import {FinanceTabParamsList} from '../Tabs/FinanceTab'
import {Expenses} from '../Types/dataTypes'

/* Type checking */
type formScreenRouteProp = RouteProp<FinanceTabParamsList, "Add Expenses">

type Props = {
  route: formScreenRouteProp,
}

type FormState = Expenses;

/* Theming */
const theme = {colors: {
  primary: "#000",
}}


/* TODO 
 * New styled form
 * Get parent's state as route parameter, update state while going back
 */
export default class FinanceForm extends React.Component<Props,FormState>{
  constructor(props:Props){
    super(props);
    this.state = {
      food: 0,
      rent: 0,
      travel: 0,
      clothes: 0,
      academics: 0,
      entertainment: 0,
      personal: 0,
    }
  }
  render(){
    /* Picker */
    const state:FormState = {...this.state};
    const formBody = Object.keys(state).map((expenseType:string, index:number) => (
      <View
        key={index}
        style={styles.formGroup}
      >
        <View style={styles.formChild}>
          <Text style={styles.text}>
            {expenseType[0].toUpperCase()+expenseType.slice(1)}
          </Text>
        </View>
        {/* Value: numeric keyboard */}
        <TextInput
          style={styles.formChild}
          theme={theme}
          mode={"outlined"}
          value={state[expenseType as keyof Expenses].toString()}
          keyboardType={"number-pad"}
          onChangeText={(value:string) => {
            /* If the value is number, then only change state */
            /* Additional Number() casting has been done due to typescript */
            if (!isNaN(Number(value)) && value.length > 0){
              state[expenseType as keyof Expenses] = parseInt(value);
              this.setState(state);
            }
          }}
        />
      </View>
    ));

    return (
      <ScrollView>
        {formBody}
        <Button
          mode="contained"
          icon={"wallet-plus"}
          style={styles.button}
          theme={theme}
          onPress={() => {
            console.log("Hello, world");
          }}
        >
          Add
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  formChild: {
    width: "40%",
    justifyContent: "flex-end",
    padding: 10,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    elevation: 4,
    marginTop: 20,
    alignSelf: "center",
    alignItems: "flex-end",
  }
})
