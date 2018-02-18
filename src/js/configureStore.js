import { createStore } from 'redux';
import rootReducer from 'js/reducer';

export default function configureStore() {
    return createStore(rootReducer);
}
