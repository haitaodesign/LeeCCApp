import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, changeCurrencyAmount, swapCurrency } from '../actions/currencies'

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  error: null,
  conversions: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0
      }
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.baseCurrency,
        quoteCurrency: state.quoteCurrency
      }
    default:
      return state
  }
}
export default reducer
