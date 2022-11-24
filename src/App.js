import React from 'react'
import { BrowserRouter as Router , Route , Routes,Link } from 'react-router-dom';
import { Cv } from './cv/Cv';
import { Evenements } from './Evenements';
import { FeedbackApp } from './feedbackApp/FeedbackApp';
import { Navbar } from './Navbar';
import { Details } from './pages/Details';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
export const App = () => {
    return (
        <div>


        <Router>
 

           <Navbar></Navbar>
            <Routes>
                <Route exact path='/test' element={<>Bonjour</>}></Route>
                <Route exact path='/feedback' element={<FeedbackApp/>}></Route>
                <Route exact path='/register' element={<Signup/>}></Route>
                <Route exact path='/details/:title/:id/:type' element={<Details/>}></Route>

            </Routes>
        </Router>

            {/* text {variable}
    {btn_blue('test')}
    {btn_blue('boutton 2 ')} */}

            {/*  <Cv></Cv> */}
            {/*  <Evenements></Evenements> */}
            {/*     <Signin /> */}
            {/* <Signup/> */}
           {/*  <FeedbackApp /> */}
        </div>
    )
}
