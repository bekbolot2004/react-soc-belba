import React, {useEffect} from 'react'
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  debugger;
  return (
    <BrowserRouter>
      <div className={s.body}>
        <div className={s.app_wrapper}>
          <Header/>
          <Navbar/>
          <div className={s.app_wrapper_content}>
            <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
            <Route path="/profile"
                   render={() => <Profile store={props.store}/>}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
