import React from 'react'
import AsyncStorage from '@react-native-community/async-storage';

/* Components */
import PieChart from '../components/PieChart'
import Form from '../components/Form'

export type dataInterface = {
  food: number,
  rent: number,
  travel: number,
  clothes: number,
  academics: number,
  entertainment: number,
  personal: number,
}

const initialState:dataInterface = {
  food: 0,
  rent: 0,
  travel: 0,
  clothes: 0,
  academics: 0,
  entertainment: 0,
  personal: 0,
}

function getKey(){
  let x = new Date();
  return x.getUTCFullYear() + "-" + x.getUTCMonth();
}

class FinanceTab extends React.Component{
  constructor(props:any){
    super(props);
    this.state = initialState;
  }

  getFromStorage = async() => {
    const thisMonthKey = getKey();
    try{
      /* Try getting data from storage */
      const thisMonthData = await AsyncStorage.getItem(thisMonthKey);
      if (!thisMonthData){
        throw new Error("Value 'null' is stored");
      }
      return JSON.parse(thisMonthData);
    }
    catch(err){
      /* If not found, create an entry */
      await this.saveToStorage(initialState);
      /* return initialState */
      return initialState;
    }
  }

  saveToStorage = async(data:dataInterface) => {
    const thisMonthKey = getKey();
    try{
      await AsyncStorage.setItem(thisMonthKey, JSON.stringify(data));
    }
    catch(err){
      console.log('Shit happens!');
    }
  }

  async componentDidMount(){
    let thisMonthData = await this.getFromStorage();
    this.setState(thisMonthData);
  }

  render(){
    //form
    return (
      <PieChart
        data={this.state}
      />
    );
  }
}

export default FinanceTab;
