import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import capitilize from '../Utilities/capitalize'
/* Import types */
import {RouteProp} from '@react-navigation/native'
import {FinanceTabParamsList} from '../Tabs/FinanceTab'
import { StackNavigationProp} from '@react-navigation/stack'
import {Expenses} from '../Utilities/dataTypes'

/* Type checking */
type formScreenRouteProp = RouteProp<FinanceTabParamsList, "Add Expenses">
type formScreenNavProp = StackNavigationProp<FinanceTabParamsList,"Add Expenses">

type Props = {
  route: formScreenRouteProp,
  navigation: formScreenNavProp,
}

type FormState = Expenses;

/* Theming */
const theme = {colors: {
  primary: "#000",
}}


/* TODO 
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
            {capitilize(expenseType)}
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
            if (!isNaN(Number(value))){
              state[expenseType as keyof Expenses] = parseInt(value) || Number(value);
              this.setState(state);
            }
          }}
        />
      </View>
    ));

    return (
      <ScrollView style={styles.view}>
        {formBody}
        <Button
          mode="contained"
          icon={"check"}
          style={styles.button}
          theme={theme}
          onPress={() => {
            /* Update state of parent component */
            this.props.route.params.updateExpenses(this.state);
            this.props.navigation.goBack();
          }}
        >
          Done
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 10,
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  formChild: {
    width: "40%",
    justifyContent: "center",
    height: 40,
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    elevation: 4,
    marginTop: 40,
    alignSelf: "center",
  }
})
