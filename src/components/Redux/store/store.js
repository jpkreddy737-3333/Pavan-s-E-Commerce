import {legacy_createStore,applyMiddleware} from "redux";
import Namereducer from "../reducer/Namereducer";
import logger from "redux-logger";

var myStore = legacy_createStore(Namereducer,applyMiddleware(logger));

export default myStore;