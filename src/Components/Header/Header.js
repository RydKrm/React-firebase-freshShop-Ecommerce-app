import React from 'react';
import HeaderTop from './HeaderTop';
import NavigationBar from './NavigationBar';
import Search from '../Search/Search';

const Header = () => {
    return (
    <div>
        <HeaderTop></HeaderTop>
        <NavigationBar></NavigationBar>
        <Search></Search>
    </div>
    );
};

export default Header;