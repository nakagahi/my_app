import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import myInfoReducer from './reducer';



const sagaMiddleware = createSagaMiddleware();

//for Redux DevTools
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({myInfo: myInfoReducer});
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware),
    storeEnhancers(applyMiddleware(sagaMiddleware))
    )
)
export type RootState = ReturnType<typeof rootReducer>;
export default store;