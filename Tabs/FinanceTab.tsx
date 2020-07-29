import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

/* Types */
import {Expenses,emptyExpenses} from '../Types/dataTypes'

/* Components */
import PieChart from '../components/PieChart'
import Header from '../components/Header'
import ExpensesForm from '../components/ExpensesForm'

function getKey():string{
  let x = new Date();
  return x.getUTCFullYear() + "-" + x.getUTCMonth();
}

/* Interfaces required in finance tab */
interface Props {}
type dataFromStorage = string | null;

/* Entire finance tab */
/* We will store expenses as state variable */
class FinanceTab extends React.Component<Props, Expenses>{

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
      <>
        <Header text="Finance" />
        <ScrollView style={styles.view}>
          <PieChart
            data={this.state}
          />
          <ExpensesForm />
        </ScrollView>
      </>
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
  }
});

export default FinanceTab;
