import { persistStore } from "redux-persist";

const { default: logger } = require("redux-logger");
const { createStore, applyMiddleware } = require("redux");
const { default: rootReducer } = require("./root-reducer");

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persister = persistStore(store);

// export default { store, persister };
