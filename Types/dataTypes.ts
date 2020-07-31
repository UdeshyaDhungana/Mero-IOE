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

