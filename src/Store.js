import { createNavigationEnabledStore, NavigationReducer } from '@expo/ex-navigation';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import AuthReducer from './reducers/AuthReducer';
import PageFormReducer from './reducers/PageFormReducer';
import PageReducer from './reducers/PageReducer';

const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation'
});

/*
const Store = createStoreWithNavigation(
    combineReducers({
        auth: AuthReducer,
        pageForm: PageFormReducer,
        pages: PageReducer
    })
);
*/
export default Store = createStoreWithNavigation(reducers, {}, applyMiddleware(ReduxThunk));
