import WebLayout from "../Containers/WebLayout";
import {Route, Routes} from "react-router";
import Home from "../Containers/Home";
import Login from "../Containers/Auth/Login";
import NewsAPI from "../Containers/Articles/NewsAPI";
import TheGuardian from "../Containers/Articles/TheGuardian";
import NyTimes from "../Containers/Articles/NyTimes";
import Register from "../Containers/Auth/Register";
import Profile from "../Containers/account/Profile";
import Account from "../Containers/account";
import NewsFeedSetting from "../Containers/account/NewsFeedSetting";

export default function MainRouter() {
    return (
        <Routes>
            <Route element={<WebLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/news-api" element={<NewsAPI/>}/>
                <Route path="/the-guardian" element={<TheGuardian/>}/>
                <Route path="/new-york-times" element={<NyTimes/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/account" element={<Account/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="newsfeed" element={<NewsFeedSetting/>}/>
                </Route>

            </Route>
        </Routes>
    )
}
