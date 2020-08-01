export type Expenses = {
  "food": number,
  "rent": number,
  "travel": number,
  "clothes": number,
  "academics": number,
  "entertainment": number,
  "personal": number,
}

/* This function is used to update the state of details page via form
    - Used by FinanceDetails.tsx
* */
export type updaterFunction = (increment:Expenses) => void;

export type colorsType = {
  "food": string,
  "rent": string,
  "travel": string,
  "clothes": string,
  "academics": string,
  "entertainment": string,
  "personal": string,
}

export const colors:colorsType = {
  "food": "#469990",
  "rent": "#e6194B",
  "travel": "#f58231",
  "clothes": "#3cb44b",
  "academics": "#4363d8",
  "entertainment": "#911eb4",
  "personal": "#808000",
}

/* Cheated a little here, this is not type, but a value 😁 */
export const emptyExpenses:Expenses = {
  "food": 0,
  "rent": 0,
  "travel": 0,
  "clothes": 0,
  "academics": 0,
  "entertainment": 0,
  "personal": 0,
}

