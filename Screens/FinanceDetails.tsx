import React from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
/* Components */
import { AntDesign } from '@expo/vector-icons';
import OurPieChart from '../components/OurPieChart'
/* Types */
import {Expenses,emptyExpenses} from '../Utilities/dataTypes'
import { StackNavigationProp} from '@react-navigation/stack'
import {FinanceTabParamsList} from '../Tabs/FinanceTab'
import {updaterFunction} from '../Utilities/dataTypes'

/* TYPE CHECKING */
/* Interfaces required in finance tab */
type dataFromStorage = string | null;
/* Screens */
type DetailsScreenProp = StackNavigationProp<FinanceTabParamsList,"Details">
type Props = {
  navigation: DetailsScreenProp,
}

/* Get key, I've used year-month as key value for local Storage */
function getKey():string{
  let x = new Date();
  return x.getUTCFullYear() + "-" + x.getUTCMonth();
}

/* Floating action button */
export const FloatingActionButton = (
  {name,navigation, updateExpenses}
    :{name:string,navigation:DetailsScreenProp, updateExpenses:updaterFunction}
) => {
  return (
    <TouchableOpacity
      style={styles.floatingActionButton}
      onPress={() => {
        navigation.push("Add Expenses", {
          updateExpenses,
        });
      }}
    >
      <AntDesign name={name} size={24} />
    </TouchableOpacity>
  );
}

/* Component in finnce tab that displays this month's data */
/* TODO: 
 * Pie chart implementation
 *
 */
export default class Details extends React.Component<Props, Expenses>{

  constructor(props:Props){
    super(props);
    this.state = emptyExpenses;
  }

  /*
     Get this month's data from local storage 
     This function references a function below, please see 'saveToStorage'
   */
  getFromStorage = async() => {
    const thisMonthKey:string = getKey();
    try{
      /* Try getting data from storage */
      const thisMonthData:dataFromStorage = await AsyncStorage.getItem(thisMonthKey);

      /* If it is null, throw error */
      if (!thisMonthData){
        throw new Error("Value 'null' is stored");
      }
      /* 'thisMonthData' is in string form, so convert it to 'Expenses' */
      return JSON.parse(thisMonthData);
    }
    catch(err){
      /* If not found, means it's new month, so create an entry */
      await this.saveToStorage(emptyExpenses);
      /* return emptyExpenses */
      return emptyExpenses;
    }
  }

  /* save provided data to localstorage */
  saveToStorage = async(data:Expenses) => {
    const thisMonthKey:string = getKey();
    try{
      await AsyncStorage.setItem(thisMonthKey, JSON.stringify(data));
    }
    catch(err){
      console.log('Shit happens!');
    }
  }

  /* update state after providing incremental values
     This function is called by <Form /> component which is it's child
   */
  updateStateViaForm = async(increment:Expenses) => {
    let ownState:Expenses = this.state;
    let result:Expenses = emptyExpenses;

    Object.keys(ownState).forEach((key:string) => {
      /* Don't know why Typescript throws error, works perfectly fine tho */
      let fk:keyof Expenses = key as keyof Expenses;
      result[fk]  = ownState[fk] + increment[fk];
    });
    await this.saveToStorage(result);
    this.setState(result);
  }

  /* Lifecycle method: gets data from local storage and store in state */
  async componentDidMount(){
    let thisMonthData:Expenses = await this.getFromStorage();
    this.setState(thisMonthData);
  }

  async componentDidUpdate(){
    const data:Expenses = this.state;
    await this.saveToStorage(data);
  }

  render(){
    //form
    return (
      <ScrollView style={styles.view}>
        <OurPieChart
          data={this.state}
        />
        <FloatingActionButton
          navigation={this.props.navigation}
          updateExpenses={this.updateStateViaForm}
          name="plus" />
      </ScrollView>
    );
  }
}

/* Styling */
const styles = StyleSheet.create({
  view: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
  },
  floatingActionButton: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 30,
    height: 60,
    marginVertical: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 5
  }
});
