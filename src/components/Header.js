import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
        <Link to ="/">
            <img className="header__icon" src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-4-1.png" alt="Airbnb"/>
        </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Became a Host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
        
    )
}

export default Header;
