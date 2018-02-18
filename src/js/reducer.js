import { combineReducers } from 'redux'
const initialState = {
    results: [],
    latestResult: {}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CALCULATE_TRIANGLE_RESULT':
            let newResults = [...state.results]
            newResults.push(action.result);
            return Object.assign({}, state, {
                results: newResults,
                latestResult: action.result
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reducer
  })
  
export default rootReducer
  