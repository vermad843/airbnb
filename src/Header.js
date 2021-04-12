import React from 'react';
import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className = "header">
            <img
                className = "header__icon"
                src = "https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-10.png"
                alt = ""
            />
            <div className = "header__center">
               <input
                   type = "text"
                  />
                <SearchIcon/>
            </div>
            <div>
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header;
