import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

/* Import from react native elements */
import {Button} from 'react-native-paper'
import {Input} from 'react-native-elements'

//Import from react native components
import { Formik, FormikTouched, FormikErrors } from 'formik'
import * as yup from 'yup'

/* Types and initial values */
import { Expenses, emptyExpenses } from '../Types/dataTypes'


class ExpensesForm extends React.Component{

  //fix type of props and state
  constructor(props:any){
    super(props);
    this.state = emptyExpenses;
  }

  render(){
    return (
      <View style={styles.view}>
        <Text style={styles.heading}>Edit Expenses</Text>
        <Formik
          initialValues = {emptyExpenses}
          validationSchema = {
            yup.object().shape({
              food: yup.number().required('Required'),
              rent: yup.number().required('Required'),
              travel: yup.number().required('Required'),
              clothes: yup.number().required('Required'),
              academics: yup.number().required('Required'),
              entertainment: yup.number().required('Required'),
              personal: yup.number().required('Required'),
            })}
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
            /* Dynamically generate form */
            const keys = Object.keys(values)
            const formBody = keys.map(( key, index ) => (
              <View
                key={index}
                style={styles.formGroup}
              >

                <Input
                  label={key[0].toUpperCase()+key.slice(1)+"*"}
                  labelStyle={styles.label}
                  placeholder={(touched[key as keyof FormikTouched<Expenses>]
                    &&
                      errors[key as keyof FormikErrors<Expenses>])?
                      errors[key as keyof FormikErrors<Expenses>]:""
                  }
                  placeholderTextColor="#FF0D10"
                  keyboardType={'number-pad'}
                  onChangeText={handleChange(key)}
                  onBlur={handleBlur(key)}
                  value={values[key as keyof Expenses].toString()}
                />

              </View>
            ));
            /* Ends */
            /* main rendering */
            return (
              <View>
                <View style={styles.formWrapper}>
                  {formBody}
                </View>
                <Button
                  color={"#000"}
                  mode={"contained"}
                  style={styles.button}
                  onPress={() => {handleSubmit()}}>
                  Edit!
                </Button>
              </View>
            );
            /* Ends */
          }}
        </Formik>
      </View>
    );
  }
}

/* TODO */
/* User array reduce to get form errors and siable button accordingly */

const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 15,
  },
  heading: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  formWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  formGroup: {
    width: "45%",
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
  },
  errorText: {
    fontSize: 12,
    color: '#FF0D10',
    textAlign: "center",
  },
  label: {
    color: "#000",
  }
});

export default ExpensesForm;
