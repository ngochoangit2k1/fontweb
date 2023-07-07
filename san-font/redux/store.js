import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import accountSlice from './accountSlice'
import { cartReducer } from './cart.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage,
}

const reducer = combineReducers({
	cart: cartReducer,
	account: accountSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
	middleware: gDM => gDM().concat(logger),
	reducer: persistedReducer,
})

export default store
