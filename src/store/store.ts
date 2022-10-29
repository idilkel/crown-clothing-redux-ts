import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import { loggerMiddleware } from "./middleware/logger";
import logger from "redux-logger";

//root-reducer- a combination of all the reducers
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whiteList: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root", //persist all
  storage,
  whiteList: ["cart"],
  //blacklist: ["user"], //we don't want the user to persist because it's coming from AuthListener and they might conflict
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//We don't want to see the logs in production mode (process.env.NODE_ENV)
// const middleWares = [
//   process.env.NODE_ENV !== "production" && loggerMiddleware,
// ].filter(Boolean);

//Replace the "home-made" logger on the above line, using redux-logger
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  //to avoid getting false as optional type: if middleware passes the filter it must be type of Middleware; then pass the parameter into the Boolean check
  (middleware): middleware is Middleware => Boolean(middleware)
);

//To use either Redux-Dev-Tools on Chrom or the regular console
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// //Enhancer - to catch actions before they hit the reducers and it enables log-out the state
// //If the composeEnhancer was not written this should have been used
//const composedEnhancers = compose(applyMiddleware(...middleWares));

//1. rootReducer - only must 2. optional: additional default state 3. optional: middleWares: library helpers which occur before the reducer (such as dispatch)
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
