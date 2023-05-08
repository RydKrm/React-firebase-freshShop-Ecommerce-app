import React from 'react';
import MyAccountTop from './MyAccountTop';
import DetailsAccount from './DetailsAccount';
import HeroSection from '../About/HeroSection';

const MyAccount = () => {
    return (
        <span>
       <HeroSection></HeroSection>
       <div className="my-account-box-main">
         <div className="container">
            <div className="my-account-page">
                <MyAccountTop></MyAccountTop>
                <DetailsAccount></DetailsAccount>
            </div>
        </div>
        </div>
</span>
    
    );
};

export default MyAccount;