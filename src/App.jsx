import React, {useEffect} from 'react'
import s from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className={s.body}>
        <div className={s.app_wrapper}>
          <Header/>
          <Navbar/>
          <div className={s.app_wrapper_content}>
            <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage} /> } />
            <Route path="/profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} /> } />
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
  
}

export default App;
