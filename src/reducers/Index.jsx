import { combineReducers } from "redux";
import userReducer from './userReducer';
import articleReducer from "./ArticleReducers";

const rootReducer = combineReducers({
    userState: userReducer,
    articleState: articleReducer,
});

 

export default rootReducer