import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
    return (
     <div className="col-lg-4 col-sm-12">
        <div className="contact-info-left">
            <h2>CONTACT INFO</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
              <ul>
                  <li>
                    <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 9000 <br/>Preston Street Wichita,<br/> KS 87213 </p>
                    </li>
                    <li>
                        <p><i className="fas fa-phone-square"></i>Phone: <Link href="tel:+1-888705770">+1-888 705 770</Link></p>
                    </li>
                    <li>
                        <p><i className="fas fa-envelope"></i>Email: <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link></p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactInfo;