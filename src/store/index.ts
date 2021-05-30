import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { MODULE_NAME as usersModule, userReducer } from './users/reducer';
import { MODULE_NAME as todosModule, todosReducer } from './todos/reducer'

const rootReducer = combineReducers({
  [usersModule]: userReducer,
  [todosModule]: todosReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
