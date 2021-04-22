import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import DestroyPage from "./destroy_page/DestroyPage"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import MainPage from "./main_page/MainPage"
import MeteorPage from "./meteor_page/MeteorPage"


const App: React.FC<any> = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/destroy' component={DestroyPage}/>
                <Route path='/meteor/:id' component={MeteorPage}/>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default App