import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';

import reducer from './reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
