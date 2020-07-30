import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
/* Types */
import {Expenses,emptyExpenses} from '../Types/dataTypes'
/* Components */
import { AntDesign } from '@expo/vector-icons';
import PieChart from '../components/PieChart'

/* Interfaces required in finance tab */
type dataFromStorage = string | null;
interface Props {
  navigation: string
}

/* Get key, I've used year-month as key value for local Storage */
function getKey():string{
  let x = new Date();
  return x.getUTCFullYear() + "-" + x.getUTCMonth();
}

/* Floating action button */
export const FloatingActionButton = ({name}:{name:string}) => {
  return (
    <TouchableOpacity style={styles.floatingActionButton}>
      <AntDesign name={name} size={24} />
    </TouchableOpacity>
  );
}

/* Component in finance tab that displays this month's data */
/* TODO: 
 * 1. Type checking for props and state
 * 2. Button opens new screen
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
  async updateState(increment:Expenses){
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
      <View style={styles.view}>
        <PieChart
          data={this.state}
        />
        <FloatingActionButton name="plus" />
      </View>
    );
  }
}

/* Styling */
const styles = StyleSheet.create({
  view: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    backgroundColor: "#eee",
    flex: 1,
  },
  floatingActionButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 5
  }
});
