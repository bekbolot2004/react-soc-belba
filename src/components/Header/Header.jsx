import React, {useEffect} from 'react'
import s from './Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <h1>React-learn</h1>
            <img className={s.react_logo} src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt=""/>
        </header>
    );
}

export default Header;