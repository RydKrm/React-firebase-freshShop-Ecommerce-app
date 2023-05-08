import React from 'react';
import { Link } from 'react-router-dom';

const CopyRight = () => {
    return (
      <div className="footer-copyright">
        <p className="footer-company">
          All Rights Reserved. &copy; 2018 <Link to="#">ThewayShop</Link> Design
          By :<Link to="https://html.design/">html design</Link>
        </p>
      </div>
    );
};

export default CopyRight;