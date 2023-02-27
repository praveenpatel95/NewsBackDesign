import {combineReducers} from "redux";
import AuthReducer from "./Auth/reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import NewsAPIReducer from "./NewsApi/reducer";
import TheGuardianReducer from "./TheGuardian/reducer";
import NyTimesReducer from "./NyTimes/reducer";


const authPersistConfig = {
    key: "AuthReducer",
    storage: storage,
    blacklist: ["isLoggingIn", "isAuthenticating", "isLoggingOut"],
};

const rootReducer = combineReducers({
            AuthReducer: persistReducer(authPersistConfig, AuthReducer),
            NewsAPIReducer: NewsAPIReducer,
            TheGuardianReducer: TheGuardianReducer,
            NyTimesReducer: NyTimesReducer,
        }
    )
;

export default rootReducer;
