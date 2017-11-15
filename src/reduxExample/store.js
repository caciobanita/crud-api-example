import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

var configureStore = () => {
  // this enables redux dev tools https://github.com/zalmoxisus/redux-devtools-extension
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    /* optional initial state, */ composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

export default configureStore;
